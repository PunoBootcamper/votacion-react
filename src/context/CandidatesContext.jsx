import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const CandidatesContext = createContext();

const initialState = {
  candidates: {
    "John Doe": 0,
    "Jane Doe": 0,
    "John Smith": 0,
    "Jane Smith": 0,
  },
  filter: "PERCENTAGE",
  filterCheck: ["John Doe", "Jane Doe", "John Smith", "Jane Smith"],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "VOTE":
      return {
        ...state,
        candidates: {
          ...state.candidates,
          [payload]: state.candidates[payload] + 1,
        },
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: payload,
      };
    case "SET_FILTER_CHECK":
      return {
        ...state,
        filterCheck: payload,
      };
    default:
      return state;
  }
};

const CandidatesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CandidatesContext.Provider value={{ state, dispatch }}>
      {children}
    </CandidatesContext.Provider>
  );
};

CandidatesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CandidatesProvider };
