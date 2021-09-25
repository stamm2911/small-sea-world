function Button({ action, icon }) {
  return (
    <button className="waves-effect waves-light btn indigo" onClick={action}>
      <i className="material-icons left">{icon}</i>
    </button>
  );
}

export default Button;
