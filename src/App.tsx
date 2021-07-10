import React from "react";

import { IoTrash, IoSave } from "react-icons/io5";
import Button from "./components/Button/Button";


const App = () => {

  return (
    <main>
      <section>
        <h2>Primary</h2>
        <ul>
          <li>

            <Button text="Save as..." buttonType="primary" onClick={() => alert("Primary button clicked or Spacebar/Enter Key Pressed")}>
              <IoSave />
            </Button>
          </li>
          <li>
            <Button text="Delete" disabled buttonType="primary" onClick={() => alert("Primary button Disabled clicked or Spacebar/Enter Key Pressed")} >
              <IoTrash />
            </Button>
          </li>
        </ul>
      </section>
      <section>
        <h2>Secondary</h2>
        <ul>
          <li>
            <Button text="Save as...">
              <IoSave />
            </Button>
          </li>
          <li>
            <Button text="Save as..." disabled>
              <IoSave />
            </Button>
          </li>
        </ul>
      </section>
    </main>
  );
}
export default App;