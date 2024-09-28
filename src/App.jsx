import { useState } from "react";
import VotoCandidato from "./VotoCandidato";

function App() {
  const candidates = {
    "John Doe": 0,
    "Jane Doe": 0,
    "John Smith": 0,
    "Jane Smith": 0,
  };

  const [votes, setVotes] = useState(candidates);

  const handleVote = (name) => {
    setVotes((prevVotes) => {
      return {
        ...prevVotes,
        [name]: prevVotes[name] + 1,
      };
    });
  };

  return (
    <div>
      {votes.map((vote, index) => (
        <VotoCandidato
          key={index}
          nombre={vote}
          votar={() => handleVote(vote)}
        />
      ))}
    </div>
  );
}

export default App;
