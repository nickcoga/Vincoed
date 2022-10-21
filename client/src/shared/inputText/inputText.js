import "./inputText.css";

export default function InputText({
  label = "",
  type = "",
  placeholder = "",
  name = "",
  value = "",
  onChange,
  required,
}) {
  return (
    <div className="fieldContainer">
      {label && <label htmlFor="name">{label}</label>}
      <div className="fieldContainer__content">
        <input
          className="fieldContainer__styledInput"
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
}
