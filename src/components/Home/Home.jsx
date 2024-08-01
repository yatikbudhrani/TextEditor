import { useContext, useState } from "react";
import "./Home.css";
import UserContext from "../../context/context";
import { MdDoubleArrow } from "react-icons/md";

const Home = () => {
  const { light, toast } = useContext(UserContext);
  const [textareavalue, setTextAreaValue] = useState("");

  let btnStyle = {
    cursor: textareavalue.length == 0 ? "default" : "pointer",
  };

  let extraSpace = () => {
    let str = textareavalue.trim();
    let centerSpace = "";
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] == " " && str[i + 1] == " ") {
        console.log("space");
      } else {
        centerSpace += str[i];
      }
    }
    centerSpace += str[str.length - 1];
    setTextAreaValue(centerSpace);
    toast.success("Extra whitespaces removed");
  };

  let styles = light ? "home-cont light-home" : "home-cont dark-home";

  return (
    <div className={styles}>
      <h1 className="heading">
        Text Editor - Word Counter, Character Counter, Remove Extra Space
      </h1>
      <div className="textarea-cont">
        <label htmlFor="textarea">
          Enter Your Notes Below <MdDoubleArrow />
        </label>
        <textarea
          name=""
          id="textarea"
          rows="8"
          value={textareavalue}
          onChange={(e) => setTextAreaValue(e.target.value)}
        ></textarea>
      </div>
      <div className="buttons">
        <button
          className="bluebg"
          disabled={textareavalue.length == 0 ? true : false}
          style={btnStyle}
          onClick={() => {
            setTextAreaValue(textareavalue.toUpperCase());
            toast.success("Transformed to UpperCase");
          }}
        >
          To UpperCase
        </button>

        <button
          className="bluebg"
          disabled={textareavalue.length == 0 ? true : false}
          style={btnStyle}
          onClick={() => {
            setTextAreaValue(textareavalue.toLowerCase());
            toast.success("Transformed to LowerCase");
          }}
        >
          To LowerCase
        </button>

        <button
          className="orangebg"
          disabled={textareavalue.length == 0 ? true : false}
          style={btnStyle}
          onClick={() => {
            setTextAreaValue("");
            toast.success("Cleared Text");
          }}
        >
          Clear Text
        </button>

        <button
          className="greenbg"
          disabled={textareavalue.length == 0 ? true : false}
          style={btnStyle}
          onClick={() => {
            navigator.clipboard.writeText(textareavalue);
            toast.success(`Copied to Clipboard : ${textareavalue}`);
          }}
        >
          Copy To Clipboard
        </button>

        <button
          className="bluebg"
          disabled={textareavalue.length == 0 ? true : false}
          style={btnStyle}
          onClick={() => extraSpace()}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="summary">
        <h1>Summery Of Your Notes</h1>
        <div className="functionality">
          <p>
            Number of words :{" "}
            {textareavalue.length == 0
              ? 0
              : textareavalue.trim().split(" ").length}{" "}
          </p>
          <p>Number of characters : {textareavalue.length}</p>
          <p>
            Reading Time:{" "}
            {(textareavalue.length == 0
              ? 0
              : textareavalue.trim().split(" ").length) * 0.008}
          </p>
        </div>
      </div>

      <div className="preview">
        <h1>Preview Notes</h1>
        <div className="textarea">
          <textarea
            name=""
            id="textarea"
            rows="4"
            value={textareavalue}
            readOnly
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Home;
