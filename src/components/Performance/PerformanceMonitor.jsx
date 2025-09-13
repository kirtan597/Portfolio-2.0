import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalImages = () => {
      const criticalImages = ['/home.png', '/project 1.png', '/project 2.png'];
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadCriticalImages();

    // Optimize memory usage
    const cleanupUnusedResources = () => {
      if (window.gc && typeof window.gc === 'function') {
        window.gc();
      }
    };

    const interval = setInterval(cleanupUnusedResources, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default PerformanceMonitor;