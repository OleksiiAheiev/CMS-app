import React, { lazy, Suspense } from 'react';
import Loading from '../pages/Loading/Loading';

const TabLoader = ({ path }) => {
  const Component = lazy(() => import(`./${path}`));

  return (
    <Suspense fallback={<Loading />}>
      {Component ? <Component /> : <div>Error: Component not found</div>}
    </Suspense>
  );
};

export default TabLoader;
