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
  Component,

  List,
  Role,
  UserEdit,
  RoleEdit,

  CompanyList,
  EditCompany,
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
        <Route path="/user/list" element={<List />} />
        <Route path="/user/role" element={<Role />} />
        <Route path="/user/list/edit" element={<UserEdit />} />
        <Route path="/user/role/edit" element={<RoleEdit />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/edit" element={<EditCompany />} />

        {/* <Route path="subscription">
          <Route path="list" element={<SubscriptionList />} />
          <Route path="request" element={<RequestCancellation />} />
        </Route> */}
      </Route>

      <Route element={<PublicRoute />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="*" element={<NoMatch />} />
      <Route path="/components" element={<Components />} />
      <Route path="/component" element={<Component />} />

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

