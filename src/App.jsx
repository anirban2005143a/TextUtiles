import Textarea from "./component/textArea";
import Navbar from "./component/navbar";
import { useState } from "react";
import Alert from "./component/alert";
import About from "./component/about";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  function changemode() {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#131331";
      showalert("Dark mode is enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode is enabled", "success");
    }
  }

  function showalert(message, type) {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar mode={mode} changemode={changemode} showalert={showalert} />
          <div style={{height:"50px"}}><Alert alert={alert} showalert={showalert} /></div>
          <div className="container" style={{ padding: "20px" }}>
            <Textarea
              alert={alert}
              showalert={showalert}
              mode={mode}
            />
          </div>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar mode={mode} changemode={changemode} showalert={showalert} />
          <div style={{height:"50px"}}><Alert alert={alert} showalert={showalert} /></div>
          <div className="container">
            {" "}
            <About mode = {mode}/>
          </div>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
