import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    const baseTitle = 'Anest Petollari | Software Engineer & Product Builder';
    
    if (!title) {
      document.title = baseTitle;
    } else {
      document.title = `${title} | Anest Petollari`;
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
