import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `Anest Petollari | ${title}` : 'Anest Petollari';

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}; 