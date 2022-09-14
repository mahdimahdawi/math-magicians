import React, { useState } from "react";

import calculate from '../logic/calculate'

const UI = () => {
  const [state, setStat] = useState({
    total: 0,
    operation: null,
    next: null
  });

  const onClickHandler = (event) => {
    const Result = calculate(state, event.target.innerHTML)
    setStat(Result)
  }
  const {total, operation, next} = state;
  return (
    <div className="calculator">
      <div className="calc">
        <div className="row1">
          <h2 className="result">
            { total }
            { operation }
            { next }
            </h2>
        </div>
        <div className="row">
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper">
            AC
          </button>
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper">
            +/-
          </button>
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper">
            %
          </button>
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper btn-color">
            +
          </button>
        </div>
        <div className="row">
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper">
            7
          </button>
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper">
            8
          </button>
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper">
            9
          </button>
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper btn-color">
            x
          </button>
        </div>
        <div className="row">
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper">
            4
          </button>
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper">
            5
          </button>
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper">
            6
          </button>
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper btn-color">
            -
          </button>
        </div>
        <div className="row">
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper">
            1
          </button>
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper">
            2
          </button>
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper">
            3
          </button>
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper btn-color">
            +
          </button>
        </div>
        <div className="row">
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper zero">
            0
          </button>
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper">
            .
          </button>
          <button type="button" onClick={(event) => {onClickHandler(event)}} className="btn-wrapper btn-color">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default UI;
