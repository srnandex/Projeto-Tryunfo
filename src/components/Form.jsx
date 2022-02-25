import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form id="formulario">
        <label htmlFor="name-input">
          Nome
          <input
            name="cardName"
            data-testid="name-input"
            id="name-input"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input
            data-testid="attr1-input"
            id="attr1-input"
            type="number"
            name="cardAttr1"
            min="0"
            max="90"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input
            data-testid="attr2-input"
            id="attr2-input"
            type="number"
            name="cardAttr2"
            min="0"
            max="90"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input
            data-testid="attr3-input"
            id="attr3-input"
            type="number"
            name="cardAttr3"
            min="0"
            max="90"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            id="image-input"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardOption">
          Raridade
          <select
            data-testid="rare-input"
            name="cardRare"
            id="cardOption"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option id="normal" value="normal">normal</option>
            <option id="raro" value="raro">raro</option>
            <option id="muito raro" value="muito raro">muito raro</option>
          </select>
        </label>
        {(hasTrunfo() === false)
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <label htmlFor="trunfo-input">
              Super Trybe Trunfo
              <input
                data-testid="trunfo-input"
                id="trunfo-input"
                type="checkbox"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>)}

        <input
          data-testid="save-button"
          id="save-button"
          type="button"
          value="Salvar"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
