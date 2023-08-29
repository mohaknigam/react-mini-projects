import { useEffect, useState } from "react";
import Loader from "./Loader";
import ListView from "./ListView";

const InfiniteScroll = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    //  const response = await fetch(
    //    "https://jsonplaceholder.typicode.com/posts?" +
    //      new URLSearchParams({
    //        _limit: 9,
    //        _page: page,
    //      })
    //  );

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );

    const data = await response.json();
    setList((oldList) => [...oldList, ...data]);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [page]);

  const handleInfiniteScroll = async () => {
    // See for refference
    // https://www.educative.io/answers/how-to-implement-infinite-scrolling-in-javascript

    if (
      window.innerHeight + document.documentElement.scrollTop + 2 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  return (
    <div className="container">
      <h1>Infinite Scroll</h1>
      <ListView list={list} />
      {loading && <Loader />}
    </div>
  );
};

export default InfiniteScroll;
