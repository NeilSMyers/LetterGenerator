import React, {Component} from 'react';
import {
  Col,
  Row,
  Card
}from 'reactstrap';

import _ from 'lodash';

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
          <Row>
            {
              _.map(this.inputData,(data, Key) => {
                return <LetterInput key={Key} placeholder={data.placeholder} state={data.state} prop={data.prop} onChange={this.handleChange({inputTitle: data.prop})}/>
              })
            }
            <Col>
              <input value="Submit" type="button" className="submit-button"/>
              <a value="Reset" type="button" className="reset-button"/>
            </Col>
          </Row>
      </div>
    );
  }
}

export default LetterForm;