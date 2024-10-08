
import { useState } from 'react';
import Head from './components/Head';
import Body from './components/Body'
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';



function App() {
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path: "watchPage",
          element: <WatchPage />
        }
      ]

    }
  ])



  return (
    <>
      <Provider store={store}>
        <Head handleCollapse={handleCollapse} />
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  )
}

export default App
