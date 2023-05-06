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
  if (person.length === 0)
    return (
      <div className="col-sm-4">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  return (
    <div className="col-sm-4">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Action</th>
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
    </div>
  );
};

export default FamilyList;
