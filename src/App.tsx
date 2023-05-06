import { useState } from "react";
import FamilyList from "./components/FamilyList";
import FamilyFilter from "./components/FamilyFilter";

const App = () => {
  const filterOptions = ["All Categories", "Father", "Mother", "Son"];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [person, setPerson] = useState([
    { id: 1, name: "Knoa", category: "Son" },
  ]);
  const visibleCategory = selectedCategory
    ? person.filter(e => e.category === selectedCategory)
    : person;

  return (
    <div>
      <FamilyFilter
        options={filterOptions}
        onSelectCategory={category => setSelectedCategory(category)}
      />
      <FamilyList
        person={visibleCategory}
        onDelete={id => setPerson(person.filter(p => p.id !== id))}
      />
    </div>
  );
};

export default App;
