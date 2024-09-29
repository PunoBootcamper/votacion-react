import { useContext } from "react";
import { CandidatesContext } from "../context/CandidatesContext";

export const useCandidates = () => useContext(CandidatesContext);
