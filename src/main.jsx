import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Provider/AuthProvider/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
   <AuthProvider>
    <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
   </QueryClientProvider>
    <ToastContainer position='top-right'></ToastContainer>
  </StrictMode>,
)
