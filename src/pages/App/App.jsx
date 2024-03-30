import React, { Suspense } from 'react';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';

import {
  NoMatch,
  Login,
  Components,
  Dashboard,
} from '@pages';

import {
  PublicRoute,
  ProtectedRoute,
  Toasts,
  CustomDocumentHead
} from '@components';

import AlertModal from '@components/Modals/AlertModal';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="subscription">
          <Route path="list" element={<SubscriptionList />} />
          <Route path="request" element={<RequestCancellation />} />
        </Route> */}
      </Route>

      <Route element={<PublicRoute />}>
        <Route path="/" element={<Components />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="*" element={<NoMatch />} />
    </>
  )
);

const App = () => {
  return (
    <HelmetProvider>
      <CustomDocumentHead />
      <Suspense fallback={<>Loading</>}>
        <AlertModal />
        <Toasts />
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;

