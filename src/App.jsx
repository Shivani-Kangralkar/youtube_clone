import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainBody from './components/MainBody'
import VideoContainer from './components/VideoContainer'
import WatchPage from './components/WatchPage'

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
          path: '/watch',
          element: <WatchPage />
        }
      ]
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
