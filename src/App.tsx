import React from 'react';
import SearchBar from "./components/TopBar/SearchBar";
import BottomBar from "./components/BottomBar";
import CardsWrapper from "./components/Cards/CardsWrapper";
import SelectBar from "./components/TopBar/SelectBar";
import './App.css';
import 'antd/dist/reset.css';


const App = () => {
  return (
      <div className="container">
          <header>pokemons</header>

          <div className="grid-wrapper">
              <article className="half-left">
                  <SelectBar />
              </article>
              <article className="half-right">
                  <SearchBar />
              </article>
          </div>

          <div className="content">
              <CardsWrapper />
          </div>

          <footer>
              <BottomBar />
          </footer>
      </div>
  );
}

export default App;
