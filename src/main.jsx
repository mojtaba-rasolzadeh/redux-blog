import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { store } from './store';
import { router } from './routes/'
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-confirm-alert/src/react-confirm-alert.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </React.StrictMode>
  </Provider>
)
