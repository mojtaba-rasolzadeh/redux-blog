import { useState } from "react";
import BlogList from "./components/BlogList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BlogList/> 
    </>
  );
}

export default App;
