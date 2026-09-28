import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppLayout from './components/AppLayout'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import AddProduct from './pages/AddProduct'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/new" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
