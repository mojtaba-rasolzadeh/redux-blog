const Spinner = ({ size = "5erm" }) => {
  return (
    <div className="spinner">
      <div className="loader" style={{ height: size }} />
    </div>
  );
};
export default Spinner;
