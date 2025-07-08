import { useEffect, useState } from "react";

export const usePWAMode = () => {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    // Check if the app is running in standalone mode as a PWA
    const checkPWA = () => {
      const isPWAMode = window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as unknown as { standalone?: boolean }).standalone === true ||
        document.referrer.includes('android-app://');
      setIsPWA(isPWAMode);
    };

    checkPWA();
  }, []);

  return isPWA;
};