import Basket from "./components/basket";
import Header from "./components/header";
import Main from "./components/main";
import data from './data'

function App() {
  const { products } = data;
  return (
    <div>
     <Header />
     <div className="flex">
       <Basket products={products} />
       
       <Main />
     </div>
    </div>
  );
}

export default App;
