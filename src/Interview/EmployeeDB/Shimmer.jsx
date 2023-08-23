const Shimmer = () => {
  console.log("shimmer");
  return (
    <div className="list-container">
      {Array(10)
        .fill("")
        .map((e, idx) => {
          return <div className="shimmer__box" key={idx}></div>;
        })}
    </div>
  );
};
export default Shimmer;
