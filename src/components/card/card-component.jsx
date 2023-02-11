import React from 'react';

class Card extends React.Component {

  render() {
    // destructure variables from props
    const { id, name, email } = this.props

    return (
      <div className="card_container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=250x250`}
          alt="Monster"
          className="card_img"
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;