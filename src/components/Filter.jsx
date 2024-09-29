import { PropTypes } from "prop-types";
import Checkbox from "./CheckBox";

const Filter = ({
  filter,
  setFilter,
  filterCheck,
  setFilterCheck,
  candidates,
}) => {
  const handleFilterCheck = (e) => {
    if (e.target.checked) {
      setFilterCheck([...filterCheck, e.target.value]);
    } else {
      setFilterCheck(filterCheck.filter((item) => item !== e.target.value));
    }
  };
  return (
    <>
      <div className="container__filter-percent">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="PERCENTAGE">Porcentaje</option>
          <option value="NUMBER">Votos</option>
        </select>
      </div>
      <div className="container__filter-check">
        {candidates.map((name, index) => (
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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  filterCheck: PropTypes.array.isRequired,
  setFilterCheck: PropTypes.func.isRequired,
  candidates: PropTypes.array.isRequired,
};

export default Filter;
