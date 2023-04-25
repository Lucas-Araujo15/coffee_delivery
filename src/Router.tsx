import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'
import { useContext } from 'react'
import { CartContext } from './contexts/CartContext'

export function Router() {
  const { order } = useContext(CartContext)

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={order ? <Success /> : <Home />} />
      </Route>
    </Routes>
  )
}
