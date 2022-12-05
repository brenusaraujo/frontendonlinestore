import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetail extends React.Component {
  render() {
    const { productDetail, setStateCart } = this.props;
    const [title, thumbnail, price, attributes, id] = productDetail;

    const UM_ITEM = 1;

    return (
      <div data-testid="product-detail-name">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <h3>{ `R$ ${price}` }</h3>
        <div>
          { attributes.map(({ name, value_name: valueName, id: idProduct }) => (
            <p key={ idProduct }>{`${name}: ${valueName}`}</p>
          )) }
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => setStateCart(id, title, price, UM_ITEM) }
        >
          Adicionar ao Carrinho
        </button>
        <Link to="/shopping-cart">
          <button
            data-testid="shopping-cart-button"
            type="button"
          >
            Ir para Carrinho de compras
          </button>
        </Link>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  productDetail: PropTypes.arrayOf.isRequired,
  setStateCart: PropTypes.func.isRequired,
};

export default ProductDetail;
