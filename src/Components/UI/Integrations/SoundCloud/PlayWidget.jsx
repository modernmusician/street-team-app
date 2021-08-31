import React from 'react';

// using the soundcloud play widget API to generate an iFrame https://developers.soundcloud.com/docs/api/html5-widget#playground
export const PlayWidget = ({sourceUrl}) => {

    
    // if the source url isn't a soundcloud link, we'll pretend this didn't happen. 
    const source = `https://w.soundcloud.com/player/?url=${sourceUrl}`;
    const validSource = sourceUrl.includes("https://soundcloud.com/");
    console.log(`source is valid? : ${validSource}`)
    return !validSource ? 
        <div></div> : 
        <div><iframe title="SoundCloud" id="sc-widget" width="100%" height="166" scrolling="no" frameborder="no" src={source}></iframe></div>
};


