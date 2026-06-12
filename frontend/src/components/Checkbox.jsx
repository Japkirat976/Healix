function Checkbox({
  label,
  checked,
  onChange
}) {
  return (
    <div className="checkbox-group">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      <label>{label}</label>
    </div>
  );
}

export default Checkbox;