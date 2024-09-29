import { useCandidates } from "../hooks/useCandidates";

const Total = () => {
  const { state } = useCandidates();
  const { candidates } = state;

  return (
    <div className="container_total">
      <h2>
        Total{" "}
        {Object.keys(candidates).reduce(
          (acc, name) => acc + candidates[name],
          0
        )}
      </h2>
    </div>
  );
};

export default Total;
