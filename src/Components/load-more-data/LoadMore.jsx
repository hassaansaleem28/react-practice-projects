import { useEffect, useState } from "react";
import "./style.css";

function LoadMore() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(
    function () {
      let didCancel = false;
      async function fetchData() {
        try {
          setIsLoading(true);
          const response = await fetch(
            `https://dummyjson.com/products?limit=20&skip=${
              count === 0 ? 0 : count * 20
            }`
          );
          const data = await response.json();
          if (!didCancel && data?.products.length) {
            setProducts(prevdata => [...prevdata, ...data.products]);
            setIsLoading(false);
          }
        } catch (err) {
          throw new Error(err.message);
        } finally {
          if (!didCancel) setIsLoading(false);
        }
      }
      fetchData();
      return () => {
        didCancel = true;
      };
    },
    [count]
  );
  if (isLoading) return <h3>Loading data...</h3>;

  return (
    <div className="load-more-container">
      <h1>Project - 5 ( PRODUCTS - LOAD MORE DATA )</h1>
      <div className="product-container">
        {products && products.length
          ? products.map(prod => (
              <div className="product" key={prod.id}>
                <img alt={prod.title} src={prod.thumbnail} />
                <p>{prod.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="btn-container">
        <button
          disabled={isLoading || products.length === 100}
          onClick={() => setCount(count + 1)}
          style={{
            border: "none",
            backgroundColor: "#8e7e7e",
            color: "#000",
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            fontFamily: "cursive",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          Load more Products - Total Products: {products.length}
        </button>
        {products.length === 100 && <p>You have reached 100 products.</p>}
      </div>
    </div>
  );
}

export default LoadMore;
