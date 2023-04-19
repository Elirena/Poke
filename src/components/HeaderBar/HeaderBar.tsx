import React from 'react';
import './header.css';

export const HeaderBar = () => {
    return (
      <div className="btn-bg Pokemon">
        <div className="btn-group">
          <div className="btn ball">
            <button>
              <div className="pokemon-ball"></div>
                <a>Pokémon <span data-letters="Go!"></span>
                  <span data-letters="Go!"></span>
                </a>
            </button>
          </div>
       </div>
      </div>
    );
};