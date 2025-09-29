import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    const baseTitle = 'Anest Petollari | Full-Stack Developer & UI/UX Designer in Albania';
    
    if (!title) {
      document.title = `${baseTitle} | Tirana, Albania`;
    } else if (title === 'About') {
      document.title = 'About Anest Petollari | Full-Stack Web Developer in Tirana, Albania';
    } else if (title === 'Tech Insights') {
      document.title = 'Tech Blog & Insights | Anest Petollari - Developer in Albania';
    } else {
      document.title = `${title} | Anest Petollari - Developer in Albania`;
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}; 