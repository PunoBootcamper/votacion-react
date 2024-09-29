import { PropTypes } from "prop-types";
import { useCandidates } from "../hooks/useCandidates";

const VotoCandidato = ({ nombre }) => {
  const { dispatch } = useCandidates();

  const votar = (name) => {
    dispatch({ type: "VOTE", payload: name });
  };

  return (
    <div className="container__candidate">
      <h2>{nombre}</h2>
      <button onClick={() => votar(nombre)}>{`Votar por ${nombre}`}</button>
    </div>
  );
};

VotoCandidato.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default VotoCandidato;
