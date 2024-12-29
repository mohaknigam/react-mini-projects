import React, { useEffect, useState } from "react";
import { MEME_API_URL } from "../../Constants";
import MemeCard from "./MemeCard";
import ShimmerUI from "./ShimmerUI";

const InfiniteScroll = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(true);

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch(MEME_API_URL);
    const res = await data.json();
    setShowShimmer(false);
    setMemes((memes) => [...memes, ...res?.memes]);
  };

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.body.scrollHeight - 10
    ) {
      console.log(20);

      fetchMemes();
    }
  };

  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5 items-center">
      {memes.map((item, idx) => (
        <MemeCard key={idx} url={item?.url} />
      ))}
      {showShimmer && <ShimmerUI />}
    </div>
  );
};

export default InfiniteScroll;
