import React, { useEffect } from "react";
// import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig"

const ProgressBar = ({ setFile, url, progress, videourl, setVideoFile }) => {
    const removedDecimal = Math.trunc(progress);

    // const docRef = addDoc(collection(db, "images"), {
    //   name: "darshan",
    //   url: url
    // });
    // const videoRef = addDoc(collection(db, "video"), {
    //   name: "darshan",
    //   videourl: videourl
    // });

    // useEffect(() => {
    //   if (url) {
    //     setFile(null);

    //   }
    // }, [url, setFile]);
    // useEffect(() => {
    //   if (videourl) {
    //     setVideoFile(null);
    //     setFile(null);
    //   }
    // }, [videourl]);
    return (
        <div
            className="h-5 flex items-center  text-white font-semibold  bg-purple-500 tex"
            style={{ width: progress + "%", borderRadius: "4px " }}
        >
            {removedDecimal}%
        </div>
    );
};

export default ProgressBar;