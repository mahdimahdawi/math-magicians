const UI = () => {
  return (
    <div className="calculator">
      <div className="calc">
        <div className="row1">
          <h2 className="result">0</h2>
        </div>
        <div className="row">
          <button className="btn-wrapper">AC</button>
          <button className="btn-wrapper">+/-</button>
          <button className="btn-wrapper">%</button>
          <button className="btn-wrapper btn-color">+</button>
        </div>
        <div className="row">
          <button className="btn-wrapper">7</button>
          <button className="btn-wrapper">8</button>
          <button className="btn-wrapper">9</button>
          <button className="btn-wrapper btn-color">x</button>
        </div>
        <div className="row">
          <button className="btn-wrapper">4</button>
          <button className="btn-wrapper">5</button>
          <button className="btn-wrapper">6</button>
          <button className="btn-wrapper btn-color">-</button>
        </div>
        <div className="row">
          <button className="btn-wrapper">1</button>
          <button className="btn-wrapper">2</button>
          <button className="btn-wrapper">3</button>
          <button className="btn-wrapper btn-color">+</button>
        </div>
        <div className="row">
          <button className="btn-wrapper zero">0</button>
          <button className="btn-wrapper">.</button>
          <button className="btn-wrapper btn-color">=</button>
        </div>
      </div>
    </div>
  );
};

export default UI;
