function Select({
  label,
  name,
  value,
  onChange,
  options
}) {
  return (
    <div className="input-group">
      <label>{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">
          Select an option
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;