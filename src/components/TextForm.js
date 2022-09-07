import React, { useState } from "react";

export default function TextForm() {
  const toUpperCase = () => {
    //console.log("clicked uper case");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const toLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  };

  const removeExtraSpace = () => {
    const newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  const copyText = () => {
    const text = document.getElementById("textArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Text copied successfully");
  };

  const clearText = () => {
    setText("");
  };

  const [text, setText] = useState("");

  return (
    <div className="container">
      <h3 className="my-3">Enter your Text Here</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="textArea"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={toUpperCase}>
        To Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={toLowerCase}>
        To LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>
        Remove Extra Space
      </button>
      <button className="btn btn-primary mx-2" onClick={copyText}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2" onClick={clearText}>
        Clear Text
      </button>
      <p className="my-3">
        <b>
          Text has{" "}
          {text.length === 0
            ? 0
            : text.replace(/\s+/g, " ").trim().split(" ").length}{" "}
          words and {text.length} character
        </b>
      </p>
      <p className="my-3">
        <b>
          Time required to read:-{" "}
          {Math.floor(
            (text.length === 0
              ? 0
              : text.replace(/\s+/g, " ").trim().split(" ").length) *
              0.008 *
              60
          )}
          {" Sec"}
        </b>
      </p>
    </div>
  );
}
