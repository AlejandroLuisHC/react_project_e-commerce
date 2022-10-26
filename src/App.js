import { useState } from 'react';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { notBuy } from './utils/functions';

function App() {
  const purchaseList = document.getElementById('purchaseList');

  const [count, setCount] = useState();

  const countFunc = (productname, price) => {
      if (isNaN(count)) {
          setCount(1);
          let item = document.createElement('li');
          item.style.display = 'flex';
          item.style.gap = '5px';
          item.className = 'dropdown-item';
          item.textContent = `${productname} - ${price}€`
          
          let eraseItem = document.createElement('button');
          let eraseFunc = () => notBuy(this);
          eraseItem.onClick = eraseFunc;
          eraseItem.innerHTML = <i class="bi bi-trash"></i>;
          item.append(eraseItem);

          purchaseList.prepend(item);


      } else {
          setCount(parseInt(count) + 1);
      }
          
    }

  const deleteFunc = () => {
      setCount();
      while (purchaseList.childNodes.length > 1) {
          purchaseList.removeChild(purchaseList.firstChild);
      }
      localStorage.removeItem('cartItems');
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

