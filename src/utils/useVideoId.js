import { useEffect, useState } from "react";

export const useVideoId = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const unsub = async () => {
            const response = await fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC3_NJf886Au6pj59s2I1Bvg&maxResults=50&key=AIzaSyCnY0bZ1c68Yw4f2s37QE-Xr-rRr5Kkvlc");
            const data = await response.json();
            setVideos(data.items)
        }
        unsub()

    }, []);



    return videos;
};