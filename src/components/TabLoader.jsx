import React, { lazy, Suspense } from 'react';
import Loading from '../pages/Loading/Loading';
import NotFound from '../pages/NotFound/NotFound';

const TabLoader = ({ path }) => {
  const Component = lazy(() => import(`./${path}`));

  return (
    <Suspense fallback={<Loading />}>
      {Component ? <Component /> : <NotFound />}
    </Suspense>
  );
};

export default TabLoader;
