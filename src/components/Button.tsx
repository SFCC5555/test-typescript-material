const Button = ({ type, text, func }) => {
  return (
    <button
      type={type === "primary" ? "submit" : "button"}
      onClick={func}
      className={`button text-sm font-semibold py-1 rounded ${
        type === "primary" ? "bg-blue-700 text-white" : "text-blue-700"
      }`}
    >
      {text}
    </button>
  );
};

export { Button };
