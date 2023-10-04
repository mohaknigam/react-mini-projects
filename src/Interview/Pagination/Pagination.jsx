import { useEffect, useState } from "react";
import { dummy_api_url } from "../Constants";
import "./pagination_styles.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const getProducts = async () => {
    const response = await fetch(dummy_api_url);
    const data = await response.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handlePageSelect = (selectedPage) => {
    setPage(selectedPage);
  };
  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((item) => (
            <div className="products__single" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <button
            style={{ visibility: page > 1 ? "visible" : "hidden" }}
            onClick={() => setPage((prevPage) => prevPage - 1)}
          >
            prev
          </button>
          {Array(Math.ceil(products.length / 10.0))
            .fill("")
            .map((_, idx) => (
              <span
                className={page === idx + 1 ? "pagination__selected" : ""}
                onClick={() => handlePageSelect(idx + 1)}
              >
                {idx + 1}
              </span>
            ))}
          <button
            onClick={() => setPage((prevPage) => prevPage + 1)}
            style={{
              visibility: page === products.length / 10 ? "hidden" : "visible",
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
