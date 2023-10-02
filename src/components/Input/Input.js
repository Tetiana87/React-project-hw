import "./Input.css";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div>
      <input
        className="Input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
