"use client"
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import { Button } from "../ui/button";
import { Volume2, VolumeX } from "lucide-react";

const Player = ({ src }: { src: string }) => {
    const [client, setClient] = useState(0);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [muted, setMuted] = useState(true);
    const handleVideoLoadedMetadata = () => {
        window.scrollTo({ top: 100, behavior: 'smooth' });
        setVideoLoaded(true)
    }
    useEffect(() => {
        setClient(1);
    }, []);

    return (
        <>
            {
                !videoLoaded &&
                <div className="h-96 pt-10">
                    <Loader />
                </div>
            }
            {client && (
                <>
                    <video
                        onLoadedMetadata={handleVideoLoadedMetadata}
                        src={src} autoPlay loop muted={muted}
                        className="w-full relative -z-10">
                    </video>
                    <Button onClick={() => setMuted(!muted)}
                        className="absolute right-8 top-8 text-white
                         bg-black opacity-75 cursor-pointer">
                        {muted ? <VolumeX /> : <Volume2 />}
                    </Button>
                </>
            )}
        </>
    );
};

export default Player;
