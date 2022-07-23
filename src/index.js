import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import SplashScreen from "./components/SpashScreen"

const container = document.getElementById('root');
const root = createRoot(container);

const App = React.lazy(() => import('./App'));

root.render(
  <Provider store={store}>
    <Suspense
      fallback={
        <SplashScreen />
      }
    >
      <App />
    </Suspense>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
