import { useEffect, useState } from "react";
import InfiniteScrollTile from "./InfiniteScrollTile";

const InfiniteScroll = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?" +
        new URLSearchParams({
          _limit: 9,
          _page: page,
        })
    );

    const data = await response.json();
    setList((oldList) => [...oldList, ...data]);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  useEffect(() => {
    getData();
  }, [page]);

  const handleInfiniteScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 2 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1);

      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className="container">
      <h1>Infinite Scroll</h1>

      {list.map((item, index) => {
        return <InfiniteScrollTile item={item} key={index} />;
      })}
    </div>
  );
};

export default InfiniteScroll;
