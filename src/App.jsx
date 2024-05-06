import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainBody from './components/MainBody'
import VideoContainer from './components/VideoContainer'
import WatchPage from './components/WatchPage'
import Error from './components/Error'
import SearchResultQuery from './components/SearchResultQuery'

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainBody />,
      children: [
        {
          path: '/',
          element: <VideoContainer />
        },
        {
          path: '/results',
          element: <SearchResultQuery />
        },
        {
          path: '/watch',
          element: <WatchPage />
        }
      ],
      errorElement: <Error/>
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
