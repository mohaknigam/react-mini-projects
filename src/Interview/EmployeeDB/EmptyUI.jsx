const EmptyUI = ({ text, description }) => {
  return (
    <div className="all-deleted">
      <h1>{text}</h1>
      <div>{description}</div>
    </div>
  );
};

export default EmptyUI;
