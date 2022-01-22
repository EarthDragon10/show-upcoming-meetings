import react, { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  // console.log(people);

  return (
    <section>
      <div className="container">
        <h2 style={{ color: "var(--bg-blue)" }}>Prossimi incontri</h2>
        <div className="people-list">
          <List data={people} />
        </div>
        <div className="btn-group">
          <button className="btn btn-reset">Reload</button>
          <button className="btn btn-delete">Delete All</button>
        </div>
      </div>
    </section>
  );
}

export default App;
