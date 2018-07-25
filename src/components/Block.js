import React, { Component } from 'react';


class Block extends Component {
  render(){
    return (
      <section className="block">
        <header className="block__header">
          <h2 className="block__title">{this.props.titulo}</h2>
          <button className="block__collapse">Click :)</button>
        </header>
        <div className="block__content">
          {this.props.children}
        </div>
    </section>
    );
  }
}

export default Block;