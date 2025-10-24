import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useVideoScroll(
  videoRef: RefObject<HTMLVideoElement | null>,
  containerRef: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    
    if (!video || !container) return;

    // Wait for video metadata to load
    const onLoadedMetadata = () => {
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5, // Much faster response (was 2)
        onUpdate: (self) => {
          if (video.duration) {
            video.currentTime = video.duration * self.progress;
          }
        },
      });
    };

    if (video.readyState >= 1) {
      onLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', onLoadedMetadata);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, [videoRef, containerRef]);
}