import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DynamicTitle = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Portfolio | Home';
      case '/about':
        return 'Portfolio | About';
      case '/skils':
        return 'Portfolio | Skills';
      case '/projects':
        return 'Portfolio | Projects';
      case '/contact':
        return 'Portfolio | Contact us';
      default:
        return 'Personal Portfolio';
    }
  };

  return (
    <Helmet>
      <title>{getTitle()}</title>
    </Helmet>
  );
};

export default DynamicTitle;
