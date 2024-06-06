import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>React is working. Count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}

window.onload = () => {
  const root = createRoot(document.getElementById("react-root"));

  root.render(
    <React.StrictMode>
      <Counter />
    </React.StrictMode>
  );
};
