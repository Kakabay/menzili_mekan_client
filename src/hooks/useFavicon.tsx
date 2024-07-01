import { useEffect } from 'react';

const useFavicon = () => {
  useEffect(() => {
    const setFavicon = () => {
      const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const favicon = document.getElementById('favicon') as HTMLLinkElement;

      if (darkThemeMediaQuery.matches) {
        favicon.href = '/favicon-light.svg';
        console.log('dark theme');
      } else {
        favicon.href = '/favicon-black.svg';
        console.log('light theme');
      }
    };

    // Set favicon on initial load
    setFavicon();

    // Add event listener for theme change
    const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMediaQuery.addEventListener('change', setFavicon);

    // Cleanup event listener on component unmount
    return () => {
      darkThemeMediaQuery.removeEventListener('change', setFavicon);
    };
  }, []);
};

export default useFavicon;
