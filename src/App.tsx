import { useState } from "react";
import FamilyList from "./components/FamilyList";
import FamilyFilter from "./components/FamilyFilter";
import FamilyForm from "./components/FamilyForm";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [person, setPerson] = useState([
    { id: 1, name: "Ryan", category: "Son" },
    { id: 2, name: "Kevin", category: "Son" },
    { id: 3, name: "Rowena", category: "Mother" },
    { id: 4, name: "Ferdimar", category: "Father" },
  ]);
  const visibleCategory = selectedCategory
    ? person.filter(e => e.category === selectedCategory)
    : person;

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center gap-5">
      <FamilyForm
        onSubmit={data =>
          setPerson([...person, { ...data, id: person.length + 1 }])
        }
      />
      <FamilyFilter
        onSelectCategory={category => setSelectedCategory(category)}
      />
      <FamilyList
        person={visibleCategory}
        onDelete={id => setPerson(person.filter(e => e.id !== id))}
      />
    </div>
  );
};

export default App;
