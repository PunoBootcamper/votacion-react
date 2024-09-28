import { PropTypes } from "prop-types";

const Total = ({ votes }) => {
  return (
    <div className="container_total">
      <h2>Total</h2>
      {Object.keys(votes).reduce((acc, name) => acc + votes[name], 0)}
    </div>
  );
};

Total.propTypes = {
  votes: PropTypes.object.isRequired,
};

export default Total;
