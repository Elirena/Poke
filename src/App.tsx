import React from 'react';
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import CardsWrapper from "./components/Cards/CardsWrapper";
import './App.css';
import 'antd/dist/reset.css';

const App = () => {
  return (
      <div className="container">
          <header>pokemons</header>

          <div className="grid-wrapper">
              <article className="half-left">
                  <span>типы покемонов теги</span>
              </article>
              <article className="half-right">
                  <TopBar />
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
