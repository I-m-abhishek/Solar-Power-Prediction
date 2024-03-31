'use client';
import React from 'react'

function aboutnew() {
  return (
    <div>
      <div className="flipCard perspective-800">
  <div className="boxes grid transform-style-3d duration-[1.5s] ">
    <div className="box row-start-1 row-end-1 col-start-1 col-end-1 border-2 border-yellow-300 bg-red-500 front">
      <h2>Box 1</h2>
      <ul>
        <li>List Item 01</li>
        <li>List Item 02</li>
        <li>List Item 03</li>
      </ul>
    </div>
    <div className="box row-start-1 row-end-1 col-start-1 col-end-1 back">
      <h2>Box 2</h2>
      <ul>
        <li>List Item 01</li>
        <li>List Item 02</li>
        <li>List Item 03</li>
        <li>List Item 04</li>
        <li>List Item 05</li>
        <li>List Item 06</li>
      </ul>
    </div>
  </div>
</div>
<style jsx>{`
        body {
          background: #1339ac;
          padding: 50px;
        }
        
        .flipCard {
          // perspective: 1000px;
        }
        .flipCard .boxes {
          // display: grid;
          // transition-duration: 0.6s;
          // // transition-timing-function: ease-in-out;
          // transform-style: preserve-3d;
        }
        .flipCard .boxes .box {
          // background: red;
          // padding: 1rem;
          // border: 2px solid #000;
          /*---------*/
          // grid-row: 1;
          // grid-column: 1;
          -webkit-backface-visibility: hidden;
                  backface-visibility: hidden;
        }
        .flipCard .boxes .box.front {
          transform: rotateX(0deg);
        }
        .flipCard .boxes .box.back {
          transform: rotateX(-180deg);
          // -webkit-backface-visibility: visible;
                  // backface-visibility: visible;
        }
        .flipCard:hover .boxes {
          transform: rotateX(-180deg);
        }
      `}</style>
    </div>
  )
}

export default aboutnew