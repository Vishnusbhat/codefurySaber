import Iframe from "react-iframe";
const Video = () => {
    return ( 
        <div className=" w-auto h-fit pt-[50vh] flex flex-row justify-evenly">
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/Sxddnugwu-8?si=0T0sMur3gr7S1xmW" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

            </iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/Wg4YUcsavI8?si=WELFI8sJwL0_GIL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
     );

    }
 
export default Video;
