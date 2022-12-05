import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductsQuery extends React.Component {
  render() {
    const {
      title,
      thumbnail,
      price,
      attributes,
      id,
      setStateApp,
      setStateCart,
    } = this.props;

    const UM_ITEM = 1;

    return (
      <div
        data-testid="product"
      >
        <Link
          data-testid="product-detail-link"
          to="/product-detail"
          onClick={ () => setStateApp(title, thumbnail, price, attributes, id) }
        >
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <h3>{ `R$ ${price}` }</h3>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => setStateCart(id, title, price, UM_ITEM) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductsQuery.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  setStateApp: PropTypes.func.isRequired,
  attributes: PropTypes.arrayOf.isRequired,
  setStateCart: PropTypes.func.isRequired,
};

export default ProductsQuery;
