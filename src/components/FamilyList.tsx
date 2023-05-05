interface PersonProps {
  id: number;
  name: string;
  category: string;
}

interface Props {
  person: PersonProps[];
  onDelete: (id: number) => void;
}

const FamilyList = ({ person, onDelete }: Props) => {
  if (person.length === 0) return null;
  return (
    <table className="table table-striped w-50">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
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
