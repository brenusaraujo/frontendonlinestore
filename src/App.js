import React from 'react';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Search from './pages/Search';
import Categories from './components/Categories';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './components/ProductDetail';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productDetail: [],
      productAddCart: [],
    };
  }

  setStateApp = (...param) => {
    const [title, thumbnail, price, id, attributes] = param;
    this.setState({ productDetail: [title, thumbnail, price, id, attributes] });
  }

  setStateCart = (id, title, price, quantity) => {
    const { productAddCart } = this.state;

    const verifyItens = productAddCart.some(({ id: idProduct }) => idProduct === id);

    const object = {
      id,
      title,
      price,
      totalPrice: price,
      quantity,
    };

    if (!verifyItens) {
      this.setState((prevState) => ({
        productAddCart: [...prevState.productAddCart, object],
      }));
    } else {
      const newState = productAddCart.map((product) => {
        const {
          id: idProduct,
          title: titleProduct,
          price: priceProduct,
          quantity: quantityProduct } = product;

        const newQuantity = idProduct === id ? quantityProduct + 1 : quantityProduct;
        const newPrice = priceProduct * newQuantity;

        const newObjectProduct = {
          id: idProduct,
          title: titleProduct,
          price: priceProduct,
          totalPrice: newPrice.toFixed(2),
          quantity: newQuantity,
        };

        return newObjectProduct;
      });

      this.setState({ productAddCart: newState });
    }
  }

  render() {
    const { productDetail, productAddCart } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/shopping-cart">
              <ShoppingCart
                productAddCart={ productAddCart }
              />
            </Route>
            <Route exact path="/">
              <Search
                setStateApp={ this.setStateApp }
                setStateCart={ this.setStateCart }
              />
            </Route>
            <Route path="/product-detail">
              <ProductDetail
                productDetail={ productDetail }
                setStateCart={ this.setStateCart }
              />
            </Route>
            <Categories />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
