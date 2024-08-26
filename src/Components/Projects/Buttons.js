import React from 'react';
import '../../Style/Buttons.scss';

const CreativeButtons = () => {
  return (
    <div className="creative-buttons">
        <h2>Button Styles</h2>
      <button className="btn btn-pulse">
        Pulse
      </button>

      <button className="btn btn-shiny">
        Shiny
      </button>

      <button className="btn btn-3d">
        3D Effect
      </button>

      <button className="btn btn-gradient">
        Gradient
      </button>
    </div>
  );
};

export default CreativeButtons;
