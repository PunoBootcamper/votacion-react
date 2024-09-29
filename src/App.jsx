import { useState } from "react";
import VotoCandidato from "./components/VotoCandidato";
import Total from "./components/Total";
import "./App.css";
import FilteredVotes from "./components/FilteredVotes";
import Filter from "./components/Filter";

function App() {
  const candidates = {
    "John Doe": 0,
    "Jane Doe": 0,
    "John Smith": 0,
    "Jane Smith": 0,
  };

  const [votes, setVotes] = useState(candidates);

  const [filter, setFilter] = useState("PERCENTAGE");

  const [filterCheck, setFilterCheck] = useState(Object.keys(candidates));

  const handleVote = (name) => {
    setVotes((prevVotes) => {
      return {
        ...prevVotes,
        [name]: prevVotes[name] + 1,
      };
    });
  };
  return (
    <div className="container">
      <div className="container__candidates">
        {Object.keys(votes).map((name) => (
          <VotoCandidato key={name} nombre={name} votar={handleVote} />
        ))}
      </div>

      <div className="container__main">
        <div className="container__filter">
          <Filter
            filter={filter}
            setFilter={setFilter}
            filterCheck={filterCheck}
            setFilterCheck={setFilterCheck}
            candidates={Object.keys(candidates)}
          />
        </div>

        <div className="container__votes">
          <Total votes={votes} />
          <FilteredVotes
            votes={votes}
            filter={filter}
            filterCheck={filterCheck}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
