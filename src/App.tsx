import { useState } from "react";
import FamilyList from "./components/FamilyList";

const App = () => {
  const [person, setPerson] = useState([{ id: 1, name: "", category: "" }]);
  return (
    <div>
      <FamilyList
        person={person}
        onDelete={id => setPerson(person.filter(p => p.id !== id))}
      />
    </div>
  );
};

export default App;
