import React, { Suspense } from 'react';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import {
  NoMatch
} from '@pages';

import { PublicRoute, ProtectedRoute } from '@components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route element={<ProtectedRoute />}>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      
        {/* <Route path="subscription">
          <Route path="list" element={<SubscriptionList />} />
          <Route path="request" element={<RequestCancellation />} />
        </Route> */}
      </Route>

      <Route element={<PublicRoute />}>
        {/* <Route path="/login" element={<Login />} /> */}
      </Route>

      {/* <Route path="/" element={<Landing />} /> */}
   
      <Route path="*" element={<NoMatch />} />
    </>
  )
);

const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
