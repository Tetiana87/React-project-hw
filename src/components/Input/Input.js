import "./Input.css";

function Input() {
  return (
    <div>
      <input
        className="Input"
        type="text"
        placeholder="User name"
        id="contact-name"
        name="username"
      />
      <input
        className="Input"
        type="password"
        placeholder="Password"
        id="pass"
        name="password"
      />
    </div>
  );
}

export default Input;
