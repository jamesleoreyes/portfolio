import { useState, useEffect } from 'react';

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = '(max-width: 767px)';
    const mql = window.matchMedia(query);

    const handleChange = () => setIsMobile(mql.matches);

    handleChange();
    mql.addEventListener('change', handleChange);

    return () => mql.removeEventListener('change', handleChange);
  }, []);

  return isMobile;
};