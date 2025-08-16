// hooks/useIsLargeScreen.tsx
import { useState, useEffect } from 'react';

const useIsLargeScreen = (breakpoint = 1024): boolean => {
    const [isLarge, setIsLarge] = useState<boolean>(false);

    useEffect(() => {
        // This runs only on the client
        const checkSize = () => {
            setIsLarge(window.innerWidth >= breakpoint);
        };
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, [breakpoint]);

    return isLarge;
};

export default useIsLargeScreen;