const InfiniteScrollTile = ({ item }) => {
  return (
    <div className="tile-container">
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default InfiniteScrollTile;
