interface Props {
  options: string[];
  onSelectCategory: (category: string) => void;
}

const FamilyFilter = ({ options, onSelectCategory }: Props) => {
  return (
    <select
      onChange={e => onSelectCategory(e.target.value)}
      className="form-select"
    >
      {options.map(option => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default FamilyFilter;
