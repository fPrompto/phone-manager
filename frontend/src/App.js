import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppProvider from './context/AppProvider';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, i) => (
            <Route
              key={i}
              // exact={route.exact}
              exact
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
