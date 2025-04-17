import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
        <Outlet/>
      <Footer />
    </>
  );
}