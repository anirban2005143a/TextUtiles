import React, { useState } from "react";

const textArea = (props) => {
  const [text, settext] = useState("");

  function changeToUP() {
    let newtext = text.toUpperCase();
    settext(newtext);
    let textarea = document.querySelector("textarea");
    if (textarea.value) {
      {
        props.showalert("Text is converted to uppercase", "success");
      }
    } else {
      {
        props.showalert("Textarea is empty", "warning");
      }
    }
  }

  function changeToLW() {
    let newtext = text.toLowerCase();
    settext(newtext);
    let textarea = document.querySelector("textarea");
    if (textarea.value) {
      {
        props.showalert("Text is converted to lowercase", "success");
      }
    } else {
      {
        props.showalert("Textarea is empty", "warning");
      }
    }
  }

  function changeText(e) {
    settext(e.target.value);
  }

  function cleartext() {
    settext("");
    let textarea = document.querySelector("textarea")
    if(textarea.value){
      {props.showalert("Text is cleaned" , "success")}
    }
    else{
      {props.showalert("Textarea is empty" , "warning")}
    }
  }

  function copytext() {
    let text = document.getElementById("floatingTextarea");
    // text.select()
    navigator.clipboard.writeText(text.value);
    let textarea = document.querySelector("textarea")
    if(textarea.value){
      {props.showalert("Text is copied" , "success")}
    }
    else{
      {props.showalert("Textarea is empty" , "warning")}
    }
  }


  return (
    <>
      <div className="form-floating">
        <h3 className="mb-3"
          style={
            props.mode == "dark"
              ? { color: "white", marginTop: "20px" }
              : { color: "black", marginTop: "20px" }
          }
        >
          Try TextUtiles - UpperCase to Lowercase | LowerCase to UpperCase 
        </h3>
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          style={
            props.mode == "dark"
              ? {
                  backgroundColor: "rgb(40 39 85)",
                  minHeight: "150px",
                  marginBottom: "20px",
                  color: "white",
                }
              : {
                  backgroundColor: "#e2e4ff",
                  minHeight: "150px",
                  marginBottom: "20px",
                  color: "black",
                }
          }
          onChange={changeText}
          value={text}
        ></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2 " onClick={changeToUP}>
          Convert to Uppercase
        </button>
        <button  
          disabled={text.length===0}
          className="btn btn-primary my-2 mx-2"
          onClick={changeToLW}
        >
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={cleartext}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={copytext}>
          Copy Text
        </button>
      </div>

      <h3 className="mt-4"
        style={props.mode == "dark" ? { color: "white" } : { color: "black" }}
      >
        Your Text Summery
      </h3>
      <p style={props.mode == "dark" ? { color: "white" } : { color: "black" }}>
        {text.split(/\s+/).filter((item)=>{return item.length !== 0}).length} words and {text.length} charecters
      </p>

      <h2
        style={props.mode == "dark" ? { color: "white" } : { color: "black" }}
      >
        Preview
      </h2>
      <p style={props.mode == "dark" ? { color: "white" } : { color: "black" }}>
        {text.length===0?"Nothing to preview": text}
      </p>
    </>
  );
};

export default textArea;
