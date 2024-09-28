import { PropTypes } from "prop-types";

const VotoCandidato = ({ nombre, votar }) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <button onClick={votar}>Votar</button>
    </div>
  );
};

export default VotoCandidato;

VotoCandidato.propTypes = {
  nombre: PropTypes.string.isRequired,
  votar: PropTypes.func.isRequired,
};
