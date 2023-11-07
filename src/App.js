//import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Usuario from './components/Usuario'
import {Switch, Route, Redirect} from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ProdutoBeleza from './components/ProdutoBeleza';


function App() {
  return (
   <>
     
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/about" component={About} />
        <Route exact path="/produtobeleza" component={ProdutoBeleza} />
        <Route exact path="/usuario" component={Usuario} />

        <Redirect to="/" />
      </Switch>
     
      <Footer/>
        </>
  );
}

export default App;