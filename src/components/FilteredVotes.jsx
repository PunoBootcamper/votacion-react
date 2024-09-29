import PropTypes from "prop-types";

const FilteredVotes = ({ votes, filter, filterCheck }) => {
  const totalVotes = Object.keys(votes).reduce(
    (acc, name) => acc + votes[name],
    0
  );
  return (
    <div className="container__filtered">
      <ul>
        {filterCheck.map((name, index) => {
          const percentage = (votes[name] / totalVotes) * 100;
          return (
            <li key={index}>
              {name}:{" "}
              {filter === "PERCENTAGE"
                ? `${percentage.toFixed(2)}%`
                : votes[name]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FilteredVotes.propTypes = {
  votes: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  filterCheck: PropTypes.array.isRequired,
};

export default FilteredVotes;
