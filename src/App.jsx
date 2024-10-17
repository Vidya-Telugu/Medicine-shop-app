import './App.css'
import InputData from './components/InputData'
import CartProvider from './components/CONTEXTS/Cartcontext';
function App() {
  

  return (
    <>
   <CartProvider>
    <InputData></InputData>
   </CartProvider>
    </>
  )
}

export default App
