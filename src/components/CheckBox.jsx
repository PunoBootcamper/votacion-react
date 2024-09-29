import PropTypes from "prop-types";

const Checkbox = ({ value, checked, onChange, label }) => (
  <div>
    <input
      type="checkbox"
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label>{label}</label>
  </div>
);

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
