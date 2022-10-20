import "./Filter.css";

export default function Filter({
  type,
  placeholder,
  name,
  value,
  onChange,
  requerid,
}) {
  return (
    <div className="filter__content">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={requerid}
      />
      <i className="js-fa-search fas fa-search"></i>
    </div>
  );
}
