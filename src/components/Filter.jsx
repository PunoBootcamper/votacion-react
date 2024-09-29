import Checkbox from "./CheckBox";
import { useCandidates } from "../hooks/useCandidates";

const Filter = () => {
  const { state, dispatch } = useCandidates();
  const { filter, filterCheck, candidates } = state;

  const handleFilterCheck = (e) => {
    if (e.target.checked) {
      dispatch({
        type: "SET_FILTER_CHECK",
        payload: [...filterCheck, e.target.value],
      });
    } else {
      dispatch({
        type: "SET_FILTER_CHECK",
        payload: filterCheck.filter((item) => item !== e.target.value),
      });
    }
  };

  return (
    <>
      <div className="container__filter-percent">
        <select
          value={filter}
          onChange={(e) =>
            dispatch({ type: "SET_FILTER", payload: e.target.value })
          }
        >
          <option value="PERCENTAGE">Porcentaje</option>
          <option value="NUMBER">Votos</option>
        </select>
      </div>
      <div className="container__filter-check">
        {Object.keys(candidates).map((name, index) => (
          <Checkbox
            key={index}
            value={name}
            checked={filterCheck.includes(name)}
            onChange={handleFilterCheck}
            label={name}
          />
        ))}
      </div>
    </>
  );
};

export default Filter;
