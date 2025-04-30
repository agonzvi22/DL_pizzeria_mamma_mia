import Cart from './components/Cart'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
//import Register from './components/Register'
//import Login from './components/Login'
//import Home from './components/Home' 

 const App = () => {
   return (
     <>
       <Navbar />
       {/* <Register /> */}
       {/* <Login /> */}
       <Cart />
       <Footer />
     </>
   )
 }
 
 export default App