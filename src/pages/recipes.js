import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'

const recipeMini = recipe => (
  <Link key={recipe.recipeName} className='miniRecipe' to={`/recipes/${recipe.url}`}>
    <h4>{recipe.recipeName}</h4>
    <h5>{recipe.category}</h5>
    <div className='recipeMiniImage' style={{ backgroundImage: `url('${recipe.mainImageUrl}')`}}></div>
  </Link>
)

const Recipes = () => {
  const { recipes } = useRouteData()
  return (
    <div className='contain recipesSection'>
        <h2 className='subHeading'>Recipes</h2>
        <div className='seperator'></div>
        <div className='miniRecipesSection'>{recipes.map(recipeMini)}</div>
    </div>
  )
}

export default Recipes
