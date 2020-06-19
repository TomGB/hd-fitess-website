import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const Footer = () => (<footer>
    <InstagramEmbed
        url='https://www.instagram.com/p/CAK5AjSn5Zm/'
        maxWidth={320}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
        className='instagramEmbed'
    />
    <InstagramEmbed
        url='https://www.instagram.com/p/CAImlx2ntGU/'
        maxWidth={320}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
        className='instagramEmbed'
    />
    <InstagramEmbed
        url='https://www.instagram.com/p/CAIfm0SHdXF/'
        maxWidth={320}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
        className='instagramEmbed'
    />
    </footer>
)

export default Footer
