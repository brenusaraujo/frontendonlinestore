import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

import '../styles/Categories.css';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      category: '',
    };
  }

  componentDidMount() {
    this.getJSONCategories();
  }

  getJSONCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  handleChange = async (id) => {
    const { setStateProductsFromCategory } = this.props;
    const getCategory = await getProductsFromCategoryAndQuery(id);
    // this.setState({ category: getCategory.results });
    setStateProductsFromCategory(getCategory);
  }

  render() {
    const { categories, category } = this.state;
    return (
      <div>
        <h2>Categorias:</h2>
        <section className="Categories">
          {
            categories.map(({ name, id }) => (
              <label className="Categories_itens" key={ id } htmlFor={ id }>
                <input
                  type="radio"
                  data-testid="category"
                  id={ id }
                  name="categories"
                  onChange={ () => { this.handleChange(id); } }
                />
                {name}
              </label>
            ))
          }
        </section>
        {
          category && category.map(({ title, price, thumbnail, id }) => (
            <div
              data-testid="product"
              key={ id }
            >
              <img src={ thumbnail } alt={ title } />
              <strong>{price}</strong>
              <Link to="qualquerlugar">
                <h2>{`teste ${title}`}</h2>
              </Link>
            </div>
          ))
        }
      </div>

    );
  }
}

Categories.propTypes = {
  setStateProductsFromCategory: PropTypes.func.isRequired,
};

export default Categories;
