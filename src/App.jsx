import VotoCandidato from "./components/VotoCandidato";
import Total from "./components/Total";
import "./App.css";
import FilteredVotes from "./components/FilteredVotes";
import Filter from "./components/Filter";
import { CandidatesProvider } from "./context/CandidatesContext";
import { useCandidates } from "./hooks/useCandidates";

function App() {
  const { state } = useCandidates();
  const { candidates } = state;

  return (
    <div className="container">
      <div className="container__candidates">
        {Object.keys(candidates).map((name) => (
          <VotoCandidato key={name} nombre={name} />
        ))}
      </div>

      <div className="container__main">
        <div className="container__filter">
          <Filter />
        </div>

        <div className="container__votes">
          <Total />
          <FilteredVotes />
        </div>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <CandidatesProvider>
      <App />
    </CandidatesProvider>
  );
}
