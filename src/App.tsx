import { useState } from "react";
import FamilyList from "./components/FamilyList";
import FamilyFilter from "./components/FamilyFilter";
import FamilyForm from "./components/FamilyForm";

const App = () => {
  const filterOptions = ["All Categories", "Father", "Mother", "Son"];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [person, setPerson] = useState([
    { id: 1, name: "Knoa", category: "Son" },
    { id: 1, name: "Knoa", category: "Son" },
    { id: 1, name: "Knoa", category: "Son" },
    { id: 1, name: "Knoa", category: "Son" },
  ]);
  const visibleCategory = selectedCategory
    ? person.filter(e => e.category === selectedCategory)
    : person;

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center gap-5">
      <FamilyForm
        onSubmit={expense =>
          setPerson([...person, { ...expense, id: person.length + 1 }])
        }
      />
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
