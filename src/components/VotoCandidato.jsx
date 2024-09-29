import { PropTypes } from "prop-types";

const VotoCandidato = ({ nombre, votar }) => {
  return (
    <div className="container__candidate">
      <h2>{nombre}</h2>
      <button
        onClick={() => {
          votar(nombre);
        }}
      >
        {`Votar por ${nombre}`}
      </button>
    </div>
  );
};

export default VotoCandidato;

VotoCandidato.propTypes = {
  nombre: PropTypes.string.isRequired,
  votar: PropTypes.func.isRequired,
};
