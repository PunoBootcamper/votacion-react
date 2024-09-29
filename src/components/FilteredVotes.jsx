import { useCandidates } from "../hooks/useCandidates";

const FilteredVotes = () => {
  const { state } = useCandidates();
  const { candidates, filter, filterCheck } = state;

  const totalVotes = Object.keys(candidates).reduce(
    (acc, name) => acc + candidates[name],
    0
  );

  return (
    <div className="container__filtered">
      <ul>
        {filterCheck.map((name, index) => {
          const percentage = (candidates[name] / totalVotes) * 100;
          return (
            <li key={index}>
              {name}:{" "}
              {filter === "PERCENTAGE"
                ? `${percentage.toFixed(2)}%`
                : candidates[name]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilteredVotes;
