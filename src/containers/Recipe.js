import React from 'react'
import { useRouteData } from 'react-static'
import {
    FacebookShareButton,
    PinterestShareButton,
    RedditShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    PinterestIcon,
    RedditIcon,
    TwitterIcon,
    WhatsappIcon,
} from 'react-share';
import MetaTags from 'react-meta-tags';
import { Link, Location } from '@reach/router'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types'

const options = {
  renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
          let { file } = node.data.target.fields
          return <div className='recipeContentImage' style={{ backgroundImage: `url(${file.url})`}} />
      },
  },
}

const Recipe = () => {
  const { recipe: content } = useRouteData()

  content.ingredients = documentToReactComponents(content.ingredients)
  content.method = documentToReactComponents(content.method, options)

  const socialText = content.recipeName + ' by HD Fitness'

  return (
    <div className='contain recipesSection'>
      <Link to='/recipes'>Back to Recipes</Link>
      <h1 id={content.recipeName.replace(/\s+/g, '-')}>{content.recipeName}</h1>
      <div className='seperator'></div>
      <h3>{content.category}</h3>
      <div className='recipeMainImage' style={{ backgroundImage: `url('${content.mainImageUrl}')`}}></div>
      <div className='social-icon-area'>
        <Location>
          {({ location })=> {
            const currentUrl = location.href ? location.href.replace('localhost:3000', 'hdfitness.club') : ''
            console.log(currentUrl)
            return (
              <>
                <FacebookShareButton className='social-icons' quote={socialText} url={currentUrl}><FacebookIcon size={36} round={true}/></FacebookShareButton>
                <PinterestShareButton className='social-icons' description={socialText} media={content.mainImageUrl} url={currentUrl}><PinterestIcon size={36} round={true}/></PinterestShareButton>
                <RedditShareButton className='social-icons' title={socialText} url={currentUrl}><RedditIcon size={36} round={true}/></RedditShareButton>
                <TwitterShareButton className='social-icons' title={socialText} url={currentUrl}><TwitterIcon size={36} round={true}/></TwitterShareButton>
                <WhatsappShareButton className='social-icons' title={socialText} url={currentUrl}><WhatsappIcon size={36} round={true}/></WhatsappShareButton>
              </>
            )
          }}
        </Location>
      </div>
      <div className='columnLeft'>
        <h3>Method</h3>
        {content.method}
      </div>
      <div className='columnRight'>
        <h3>Ingredients</h3>
        {content.ingredients}
      </div>
      <Link to='/recipes'>Back to Recipes</Link>
      <MetaTags>
        <title>HD Fitness Recipes</title>
        <meta name="description" content={content.recipeName} />
        <meta property="og:title" content='HD Fitness Recipes' />
        <meta property="og:image" content={content.mainImageUrl} />
      </MetaTags>
    </div>
  )
}

export default Recipe
