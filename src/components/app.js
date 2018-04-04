import React, { Component } from 'react';
import LetterForm from './letter_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="background">
          <div className="letter-heading">
            <h1>My Letter from Santa:</h1>
            <div className="letter-subheading">
              Fill out the boxes below and we'll get your letter straight from the Big Guy!
            </div>
          </div>
        </div>
        <LetterForm/>
      </div>
    );
  }
}