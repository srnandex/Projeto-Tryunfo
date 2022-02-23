import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <input data-testid="name-input" type="text" />
        <textarea data-testid="description-input" name="" id="" cols="30" rows="10" />
        <input data-testid="attr1-input" type="number" />
        <input data-testid="attr2-input" type="number" />
        <input data-testid="attr3-input" type="number" />
        <input data-testid="image-input" type="text" />
        <select data-testid="rare-input" name="cardOption" id="cardOption">
          <option id="normal" value="normal">normal</option>
          <option id="raro" value="raro">raro</option>
          <option id="muito raro" value="muito raro">muito raro</option>
        </select>
        <input data-testid="trunfo-input" type="checkbox" />
        <input data-testid="save-button" type="button" value="Salvar" />
      </div>
    );
  }
}

export default Form;
