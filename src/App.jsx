import ButtonGradient from "./assets/svg/ButtonGradient";

import Header from "./components/Header";
import Hero from "./components/Hero";

import ProductRow from "./components/ProductRow";
import ShowCase from "./components/ShowCase";
// import ProductCard from "./components/ShowCase";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ShowCase />
        <ProductRow />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
