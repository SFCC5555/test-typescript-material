import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../components/NavBar";
import studentImage from "../assets/images/student.jpg";
import { Question } from "../components/Question";
import { Button } from "../components/Button";
import { useState } from "react";
import { changeWrittenResponse } from "../redux/dataSlice";

const SurveyPage = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);

  const responses = ["Nada", "Poco", "A veces", "A menudo", "Siempre"];

  const [writtenResponseValue, setWrittenResponseValue] = useState("");

  const handleChange = (event) => {
    setWrittenResponseValue(event.target.value);
    console.log(writtenResponseValue)
  };

  const handleSubmit = () => {
    dispatch(changeWrittenResponse(writtenResponseValue));
    console.log(data);
  };

  return (
    <>
      <NavBar />
      <main className="flex items-center justify-between p-8 gap-4 bg-gray-200">
        <img
          src={studentImage}
          alt="Student Image"
          className="image rounded h-full"
        />
        <section className="flex flex-col justify-between flex-grow h-full gap-4 py-4 px-8 rounded bg-white">
          <div className="flex pb-4 border-b border-gray-300">
            <span className="logo" />
          </div>
          <section className="overflow-auto flex flex-col flex-grow border-2 border-gray-300 rounded">
            <div className="flex items-center min-h-16 gap-4 bg-gray-200 border-b border-gray-300">
              <div className="w-3/5 h-full pl-8" />
              <div className="flex items-center h-full flex-grow gap-1 pr-8">
                {responses.map((response) => (
                  <div
                    key={response}
                    className="flex items-center justify-center h-full flex-1 text-xs font-semibold"
                  >
                    {response}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-grow overflow-auto">
              {data.questions?.multipleChoice.map((question) => (
                <Question key={question.id} question={question} />
              ))}

              <div className="flex flex-col pl-8 pr-4 text-sm font-bold">
                <p className="h-16 flex items-center">
                  {data.questions?.writtenResponse.id}.{" "}
                  {data.questions?.writtenResponse.content}
                </p>
                <textarea
                  value={writtenResponseValue}
                  onChange={handleChange}
                  className="w-full border h-32 border-gray-300 rounded p-4 mb-4"
                />
                <p>TEST: {data.questions?.writtenResponse.response}</p>
                <p>TEST: {writtenResponseValue}</p>
              </div>
            </div>
          </section>
          <div className="self-end flex justify-center items-center gap-4">
            <Button type="secondary" text="LIMPIAR" />
            <Button type="primary" text="ENVIAR" func={handleSubmit} />
          </div>
        </section>
      </main>
    </>
  );
};

export { SurveyPage };
