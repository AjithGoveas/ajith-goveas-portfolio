import React, { useEffect, useState } from 'react';

interface SimpleTypingAnimationProps {
    text: string;
    startDelay?: number; // delay before typing starts (ms)
    speed?: number; // speed per character (ms)
    cursorBlinkSpeed?: number; // speed of cursor blink (ms)
    keepCursor?: boolean; // show cursor after typing is done
}

const SimpleTypingAnimation: React.FC<SimpleTypingAnimationProps> = ({
                                                                         text,
                                                                         startDelay = 0,
                                                                         speed = 100,
                                                                         cursorBlinkSpeed = 530,
                                                                         keepCursor = false,
                                                                     }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let isMounted = true;
        let typingInterval: NodeJS.Timeout;

        const startTyping = () => {
            typingInterval = setInterval(() => {
                if (!isMounted) return;

                // stop when all characters are typed
                if (currentIndex >= text.length) {
                    clearInterval(typingInterval);
                    return;
                }

                setDisplayText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);
        };

        const typingTimer = setTimeout(startTyping, startDelay);

        return () => {
            isMounted = false;
            clearTimeout(typingTimer);
            clearInterval(typingInterval);
        };
    }, [text, speed, startDelay, currentIndex]);

    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, cursorBlinkSpeed);
        return () => clearInterval(cursorTimer);
    }, [cursorBlinkSpeed]);

    const typingComplete = currentIndex >= text.length;

    return (
        <span className="font-mono">
      {displayText}
            {(keepCursor || !typingComplete) && (
                <span
                    className={`inline-block w-1.5 h-20 align-middle bg-gradient-to-b from-primary to-accent ml-1 rounded-xl transition-opacity duration-75 ${
                        showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            )}
    </span>
    );
};

export default SimpleTypingAnimation;
