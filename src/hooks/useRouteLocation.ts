import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useRouteLocation = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const location = useLocation();

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    function identifyRoute() {
      if (location.pathname === '/') {
        setCurrentRoute('Home');
        return;
      }

      const clean = location.pathname.replace('/', '');

      setCurrentRoute(capitalizeFirstLetter(clean));
    }
    identifyRoute();
  });

  return currentRoute;
};

export default useRouteLocation;
