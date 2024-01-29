import "./App.css";
import { gql, useQuery } from "@apollo/client";

const DOGS = gql`
  query Dogs {
    dogs {
      id
      name
      description
      thumbnail {
        url
      }
    }
  }
`;

function App() {
  console.log(useQuery(DOGS));
  return <div className="App"></div>;
}

export default App;
