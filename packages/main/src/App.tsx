import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
// import Empty from './components/Empty';
// import { Login } from './features/Login/Login';
import { Navigation } from './features/Navigation/Navigation';
import './index.scss';
import store from './state/store';

const Outlets = React.lazy(() => import('outlet/OutletRemote'));

const App = () => (
  <Provider store={store}>
    <main className="h-screen flex md:flex-row flex-col-reverse">
      <Navigation />
      <section className="flex-grow bg-gray-200">
        <Suspense fallback="Loading...">
          <Outlets />
        </Suspense>
        {/* <Login /> */}
        {/* <Empty /> */}
      </section>
    </main>
  </Provider>
);

export default App;
