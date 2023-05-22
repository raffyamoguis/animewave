import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useRouteLocation = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const location = useLocation();

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } // Capitalize first letter.

  useEffect(() => {
    function identifyRoute() {
      // Set the route name base on the current route.
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
