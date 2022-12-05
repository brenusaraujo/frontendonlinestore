import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  state = {
    qtd: 1,
  }

  increase = () => {
    const { qtd } = this.state;
    this.setState({
      qtd: qtd + 1,
    });
  }

  decrease = () => {
    const { qtd } = this.state;
    if (qtd > 1) {
      this.setState({
        qtd: qtd - 1,
      });
    }
  }

  render() {
    const { productAddCart } = this.props;
    const { qtd } = this.state;
    return (
      <div className="ShoppingCart">
        { productAddCart.length
          ? productAddCart.map(({ title, totalPrice }) => (
            <div key={ title }>
              <h3
                data-testid="shopping-cart-product-name"
              >
                { title }
              </h3>
              <p>{ `R$${totalPrice}` }</p>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                { qtd }
              </p>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.increase() }
              >
                +1
              </button>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.decrease() }
              >
                -1
              </button>
            </div>

          ))
          : (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          )}
        <Link to="/">
          <button
            type="button"
          >
            Voltar para pagina inicial
          </button>
        </Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  productAddCart: PropTypes.arrayOf.isRequired,
};

export default ShoppingCart;
