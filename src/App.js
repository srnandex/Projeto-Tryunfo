import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange(event) {
    const check = (event.target.type === 'checkbox')
      ? event.target.checked : event.target.value;
    this.setState({
      [event.target.name]: check,
    }, () => {
      const { state } = this;
      const numAr = [state.cardAttr3, state.cardAttr2, state.cardAttr1];
      const tagAr = [state.cardName, state.cardDescription, state.cardImage];
      const result = numAr.map((parseNum) => parseInt(parseNum, 10))
        .reduce((num1, num2) => num1 + num2);
      const veriComplete = tagAr.every((comple) => comple !== '');
      const lintChato = 90;
      const veriNum = numAr.every((num) => num >= 0 && num <= lintChato);
      const maxValue = 210;
      if (result <= maxValue
        && veriComplete === true
        && veriNum === true) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  onSaveButtonClick() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  render() {
    const { state } = this;
    return (
      <main>
        <h1>Tryunfo</h1>
        <div id="formCard">
          <Form
            cardName={ state.cardName }
            cardDescription={ state.cardDescription }
            cardAttr1={ state.cardAttr1 }
            cardAttr2={ state.cardAttr2 }
            cardAttr3={ state.cardAttr3 }
            cardImage={ state.cardImage }
            cardRare={ state.cardRare }
            cardTrunfo={ state.cardTrunfo }
            isSaveButtonDisabled={ state.isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ state.cardName }
            cardDescription={ state.cardDescription }
            cardAttr1={ state.cardAttr1 }
            cardAttr2={ state.cardAttr2 }
            cardAttr3={ state.cardAttr3 }
            cardImage={ state.cardImage }
            cardRare={ state.cardRare }
            cardTrunfo={ state.cardTrunfo }
          />
        </div>
      </main>
    );
  }
}

export default App;
