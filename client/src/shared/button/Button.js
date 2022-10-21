import "./Button.css";

function Button({ children, onClick, showarrow }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

export default Button;
