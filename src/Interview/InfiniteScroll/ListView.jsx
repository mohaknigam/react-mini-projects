const ListView = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <div className="tile-container">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ListView;
