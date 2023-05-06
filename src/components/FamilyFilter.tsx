import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const FamilyFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="col-sm-4">
      <select
        onChange={e => onSelectCategory(e.target.value)}
        className="form-select"
      >
        <option value="">All categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FamilyFilter;
