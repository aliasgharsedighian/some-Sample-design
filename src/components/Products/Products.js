import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
import "./Products.css";

function Products() {
  const [data, setData] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
    console.log(data);
  }, []);
  const getProducts = async () => {
    const products = await axios("https://fakestoreapi.com/products");
    setData(products.data);
    console.log(products.data);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchProduct) return;

    navigate(`/serach-products?term=${searchProduct}`);
  };
  return (
    <section className="products-container ">
      <form onSubmit={handleSearch} className="search-products-input">
        <input
          className="placeholder-gray-500"
          type="text"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          placeholder="Search Product"
        />
        <button
          className="disabled:text-gray-400"
          type="submit"
          disabled={!searchProduct}
        >
          Search
        </button>
      </form>
      <div className="products-title-filter">
        <div className="products-title">
          <h2>Our Products</h2>
          <span></span>
        </div>
        <div className="products-filter">
          <div className="products-category">
            <p>All Products</p>
            <p>Men</p>
            <p>Women</p>
            <p>clothes</p>
            <p>electric</p>
          </div>
          <div className="products-filter-button">
            <button>Filter</button>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {data
          .slice(0, 4)
          .map(({ id, title, price, description, category, image }) => {
            return (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            );
          })}

        <img
          className="md:col-span-full"
          src="http://localhost:3000/images/adv.jpg"
          alt=""
        />

        <div className="md:col-span-2">
          {data
            .slice(4, 5)
            .map(({ id, title, price, description, category, image }) => (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            ))}
        </div>
        {data
          .slice(5, data.length)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      <div className="products-load-more">
        <button>Load More</button>
      </div>
    </section>
  );
}

export default Products;
