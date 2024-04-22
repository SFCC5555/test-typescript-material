const Question = ({ question }) => {
  const responses = ["Nada", "Poco", "A veces", "A menudo", "Siempre"];

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
  };

  return (
    <div className="flex items-center h-16 gap-4 border-b border-gray-300">
      <p className="flex items-center w-3/5 h-full text-sm font-normal text-gray-800 min-w-72 pl-8 ">
        {question.id}. {question.content}
      </p>
      <div className="flex items-center gap-1 flex-grow h-full min-w-64">
        {responses.map((r) => (
          <div
            key={r}
            className="flex items-center justify-center h-full flex-1"
          >
            <input
              type="radio"
              name={question.id}
              value={r}
              onChange={handleChange}
              className="h-5 w-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Question };
