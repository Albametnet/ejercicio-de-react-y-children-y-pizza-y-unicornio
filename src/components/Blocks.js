import React, { Component } from 'react';
import Block from './Block';


class Blocks extends Component {
  render(){
    return (
      <ul>
        <li>
          <Block titulo="Pizza y unicornio">
            <p>🍕🦄😱</p>
          </Block>
        </li>
        <li>
          <Block titulo="Gritito">
            <p>😱😱😱😱😱😱</p>
          </Block>
        </li>
        <li>
          <Block titulo="Sosicon">
            <p>:)</p>
          </Block>
        </li>
      </ul>
    );
  }
}

export default Blocks;