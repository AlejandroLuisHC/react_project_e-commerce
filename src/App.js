import { useState } from 'react';
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App({ nItems = 0 }) {
  const [count, setCount] = useState(nItems);

  const countFunc = () => {
    setCount(count + 1);
  }
  const deleteFunc = () => {
    setCount(0);
  }

  return (
      <>
        <Header 
          count={count}
          deleteFunc={deleteFunc}
        />
        <Main 
          countFunc={countFunc}
        />
      </>
  );
}

export default App;
