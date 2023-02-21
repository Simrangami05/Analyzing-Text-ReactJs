import React, { useState } from "react";

export default function TextForm(props) {
  // converting the texts to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase!", "Success");
  };

  // converting the texts to lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase!", "Success");
  };

  // clearing the texts
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "Success");
  };

  // onChange function
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // capitalizing first letter
  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((element) => element.charAt(0).toUpperCase() + element.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("First letter of a word has been capitalized!", "Success");
  };

  // reversing the word
  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Text reversed!", "Success");
  };

  // to copy the text
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);  
    props.showAlert("Text copied to clipboard!", "Success");
  };

  // to paste the text
  const handlePaste = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText(clipboardText);
      props.showAlert("Text pasted from clipboard!", "Success");
    });
  };

  // to clear extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Unnecessary spaces cleared!", "Success");
  };

  // to reload the page
  const handleButtonClick = () => {
    window.location.reload();
    props.showAlert("Page reload!", "Success");
  };

  const [text, setText] = useState(" ");

  return (
    <>
      {/* adding heading */}
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          {/* building textarea */}
          <textarea
            className="form-control"
            style={{
              fontSize: 28,
              fontFamily: "Itim, cursive",
              border: "4px solid skyblue",
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
          ></textarea>
        </div>

        {/* Adding buttons */}
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
          style={{ flexWrap: "wrap" }}
        >
          {/* button to transform word to uppercase */}
          <button
            disabled={text.length === 0}
            type="button"
            onClick={handleUpClick}
            className="btn btn-outline-info  mx-2 my-2"
          >
            Convert to Uppercase
          </button>

          {/* button to transform word to lowercase */}
          <button
            disabled={text.length === 0}
            type="button"
            onClick={handleLoClick}
            className="btn btn-outline-info mx-2 my-2"
          >
            Convert to Lowercase
          </button>

          {/* button to capitalize  */}
          <button
            disabled={text.length === 0}
            type="button"
            onClick={handleCapitalize}
            className="btn btn-outline-info mx-2 my-2"
          >
            Capitalize
          </button>

          {/* button to reverse words */}
          <button
            disabled={text.length === 0}
            type="button"
            onClick={handleReverse}
            className="btn btn-outline-info mx-2 my-2"
          >
            Reverse
          </button>

          {/* Button to clear all the texts */}
          <button
            disabled={text.length === 0}
            type="button"
            onClick={handleClearClick}
            className="btn btn-outline-info mx-2 my-2"
          >
            Clear Text
          </button>

          {/* button to copy all */}
          <button
            disabled={text.length === 0}
            type="button"
            onClick={handleCopyText}
            className="btn btn-outline-info mx-2 my-2"
          >
            Copy Text
          </button>

          {/* button to paste the text */}
          <button
            type="button"
            onClick={handlePaste}
            className="btn btn-outline-info mx-2 my-2"
          >
            Paste Text
          </button>

          {/* button to remove extra spaces */}
          <button
            disabled={text.length === 0}
            type="button"
            onClick={handleExtraSpaces}
            className="btn btn-outline-info mx-2 my-2"
          >
            Remove Extra Spaces
          </button>

          {/* button to reload the page */}
          <button
            disabled={text.length === 0}
            type="button"
            onClick={handleButtonClick}
            className="btn btn-outline-info mx-2 my-2"
          >
            Reload Page
          </button>
        </div>
      </div>
      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>

        {/* showing total words and characters */}
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and{" "}
          {text.length}
          characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          mins to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 1 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
