import react, { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);

  const reloadAllItem = () => {
    setPeople(data);
  };

  const removeItem = (id) => {
    setPeople((prevValue) => {
      return prevValue.filter((value) => value.id !== id);
    });
  };

  return (
    <section>
      <div className="container">
        <h2 style={{ color: "var(--bg-blue)" }}>Prossimi incontri</h2>
        <div className="people-list">
          <List data={people} removeItem={removeItem} />
        </div>
        <div className="btn-group">
          <button className="btn btn-reset" onClick={reloadAllItem}>
            Reload
          </button>
          <button className="btn btn-delete" onClick={() => setPeople([])}>
            Delete All
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
