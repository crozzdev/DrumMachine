import { useEffect } from "react";
import { Sounds } from "../constants";

export const useKeydownSound = (audioRefs, volume, setDisplayMsg) => {
    useEffect(() => {
        const playSound = ({ key }) => {
            const sound = Sounds.find(elem => elem.id.toLowerCase() === key.toLowerCase());
            if (sound) {
                const index = Sounds.indexOf(sound) // Find the correct index
                const audio = audioRefs[index].current
                if (audio) {
                    audio.currentTime = 0;
                    audio.volume = volume
                    audio.play();
                    setDisplayMsg(audio.parentElement.id)
                }
            }
        }

        window.addEventListener("keydown", playSound);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("keydown", playSound);
        }
    }, []);
}