import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
      btnExcluirCarta } = this.props;
    return (
      <section className="sectionCard">
        <div className="greencard">
          <div className="nameCard">
            <h1 data-testid="name-card">{ cardName }</h1>
          </div>
          <div className="cardimage">
            <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          </div>
          <div className="descriptioncard">
            <p data-testid="description-card">{ cardDescription }</p>
          </div>
          <div className="att">
            <h3 className="atticons" data-testid="attr1-card">
              Attr01...............................
              <span className="numberatt">{ cardAttr1 }</span>
            </h3>
            <h3 className="atticons" data-testid="attr2-card">
              Attr02...............................
              <span className="numberatt">{ cardAttr2 }</span>
            </h3>
            <h3 className="atticons" data-testid="attr3-card">
              Attr03...............................
              <span className="numberatt">{ cardAttr3 }</span>
            </h3>
            <p className="raridade" data-testid="rare-card">{cardRare}</p>
            { (cardTrunfo === true)
              ? (
                <p className="trunf" data-testid="trunfo-card">
                  Super Trunfo
                </p>) : undefined }
          </div>
        </div>
        { btnExcluirCarta && (
          <button type="button" data-testid="delete-button">Excluir</button>) }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  btnExcluirCarta: PropTypes.bool,
}.isRequired;

export default Card;
