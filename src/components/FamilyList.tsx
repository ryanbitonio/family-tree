interface PersonProps {
  id: number;
  name?: string;
  category?: string;
}

interface Props {
  person: PersonProps[];
  onDelete: (id: number) => void;
}

const FamilyList = ({ person, onDelete }: Props) => {
  const [{ id, ...rest }] = person;

  if (person.length === 0 || Object.values(rest).every(value => value === ""))
    return null;
  return (
    <table className="table table-striped w-50">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {person.map(details => (
          <tr key={details.id}>
            <td>{details.name}</td>
            <td>{details.category}</td>
            <td>
              <button
                onClick={() => onDelete(details.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FamilyList;
