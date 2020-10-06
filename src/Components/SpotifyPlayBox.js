import React from "react";
import { FaPlay } from "react-icons/fa";
import { IconContext } from "react-icons";
import Text from "./Text";

function SpotifyPlayBox() {
    return(
            <div>
                <div class="spotify-play-full-container">
                    <div class="spotify-triangle-up"> </div> 
                </div>
                <div class="spotify-play-container">
                </div>
                    <div class="spotify-play-box">
                        <div class="spotify-top-text-container">
                            <div class="spotify-top-left-text-box"> <p> <Text color="hsl(0, 0%, 80%, 1)"> Play <Text weight="bold"> 3x </Text> a day </Text> </p>  </div>
                            <div class="spotify-top-right-text-box"> <p> <Text color="hsl(0, 0%, 80%, 1)"> <Text weight="bold"> +20 </Text> each &nbsp; <span class = "spotify-vertical-line"> </span> &nbsp; &nbsp; </Text> </p> 
                            
                            <IconContext.Provider value={{ color: "hsla(141, 74%, 42%, 1)", className: "react-icons" }}>
                            <FaPlay />
                            </IconContext.Provider>
                            <p> &nbsp; <Text color="hsl(0, 0%, 80%, 1)"> <Text weight="bold"> 24 </Text>plays left </Text> </p> </div>
                        </div>
                        <div class="spotify-player"> 
                            <iframe 
                                src="https://open.spotify.com/embed/artist/0jXaeFozic6yOdJRGuUcrR" 
                                width="100%" 
                                height="100%" 
                                frameborder="0" 
                                allowtransparency="true" 
                                allow="encrypted-media">
                            </iframe>
                        </div>
                    </div>
            </div>
        )
}

export default SpotifyPlayBox