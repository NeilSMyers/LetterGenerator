import React, {Component} from 'react';
import {
  Col,
  Row,
  Card
}from 'reactstrap';
import _ from 'lodash';

import LetterContent from './letter_content';

function LetterInput(props) {
  return (
    <Row>
      <Col>
        <input placeholder={props.placeholder} value={props.state} type="text" className="list-input" onChange={props.onChange}/>
      </Col>
    </Row>
  );
}

class LetterForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      completedForm: false,
      name: '',
      presentOne: '',
      presentTwo: '',
      presentThree: '',
      goodDeed: '',
      favoriteReindeer: ''
    }
  }

  handleChange = function(props) {
    return function(event) {
      console.log(`value for input ${props.inputTitle} is: ${event.target.value}`);
      this.setState({[props.inputTitle]: event.target.value});
      console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
    }.bind(this);
  }

  handleSubmit = function(event) {
    this.setState({completedForm: true});
    event.preventDefault();
  }.bind(this);

  handleClick = function() {
    this.setState({
      completedForm: false,
      name: '',
      presentOne: '',
      presentTwo: '',
      presentThree: '',
      goodDeed: '',
      favoriteReindeer: ''
    })
  }.bind(this)

  renderButton = function() {
    if(this.state.completedForm) {
      return <a className="reset-button" onClick={this.handleClick}>Reset</a>
    }
    return <input type="submit" className="submit-button" value="Submit"/>

  }

  render() {

      this.inputData = [
        {placeholder: 'Name', prop: 'name', state: this.state.name},
        {placeholder: 'Present', prop: 'presentOne', state: this.state.presentOne},
        {placeholder: 'Present', prop: 'presentTwo', state: this.state.presentTwo},
        {placeholder: 'Present', prop: 'presentThree', state: this.state.presentThree},
        {placeholder: 'Good Deed', prop: 'goodDeed', state: this.state.goodDeed},
        {placeholder: 'Favorite Reindeer', prop: 'favoriteReindeer', state: this.state.favoriteReindeer}
      ]

    return (
      <div className="card-wrapper">
          <Card>
            <form onSubmit={this.handleSubmit} id="madlib-form">
              <Row>
                {
                  _.map(this.inputData,(data, Key) => {
                    return <LetterInput key={Key} placeholder={data.placeholder} state={data.state} prop={data.prop} onChange={this.handleChange({inputTitle: data.prop})}/>
                  })
                }
              </Row>
              <Row>
                <Col md="12" className="button-wrapper">
                  {this.renderButton()}
                </Col>
              </Row>
            </form>
            <LetterContent data={this.state}/>
          </Card>
      </div>
    );
  }
}

export default LetterForm;