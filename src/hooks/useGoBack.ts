import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useGoBack(defaultUrl: string = '/') {
  const [backUrl, setBackUrl] = useState<string>(defaultUrl);
  const router = useRouter();

  useEffect(() => {
    const referrer = document.referrer;
    if (referrer && new URL(referrer).origin === window.location.origin) {
      setBackUrl(new URL(referrer).pathname);
    }
  }, []);

  const handleGoBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.back();
  };

  return {
    backUrl,
    handleGoBack,
  };
}