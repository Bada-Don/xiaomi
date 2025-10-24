import { useEffect, useState } from 'react';

interface ScrollTextRange {
    start: number;
    end: number;
    text: string;
}

export function useScrollText(ranges: ScrollTextRange[]) {
    const [activeText, setActiveText] = useState<string>('');
    const [opacity, setOpacity] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Find which range we're in
            const activeRange = ranges.find(
                (range) => scrollY >= range.start && scrollY <= range.end
            );

            if (activeRange) {
                setActiveText(activeRange.text);

                // Calculate opacity based on position within range
                const rangeProgress = (scrollY - activeRange.start) / (activeRange.end - activeRange.start);

                // Fade in during first 30%, stay visible, fade out during last 30%
                if (rangeProgress < 0.3) {
                    setOpacity(rangeProgress / 0.3);
                } else if (rangeProgress > 0.7) {
                    setOpacity((1 - rangeProgress) / 0.3);
                } else {
                    setOpacity(1);
                }
            } else {
                setOpacity(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [ranges]);

    return { activeText, opacity };
}
