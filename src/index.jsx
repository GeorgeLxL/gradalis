import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ContentLoader from './components/global/Loader';
import { createStoreWithMiddleware } from './store/createStore';
import primaryTheme from 'themes/primaryTheme';
import reportWebVitals from './reportWebVitals';
import './index.css';

export const { persistor, store } = createStoreWithMiddleware();

const DefaultLayout = React.lazy(() => import('./App'));

const RootComponent = () => {
  const matches = useMediaQuery(primaryTheme.breakpoints.down('xs'));
  if (matches) {
    primaryTheme.palette.background.default = "#000";
  }
  return (
    <Suspense fallback={<ContentLoader />}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={primaryTheme}>
            <BrowserRouter>
              <CssBaseline />
              <Switch>
                <Route path="/" component={DefaultLayout} />
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  );
};

ReactDOM.render(
  <RootComponent />,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
