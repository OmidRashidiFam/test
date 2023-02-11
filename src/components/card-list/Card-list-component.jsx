import React from "react";
import "./card-list-style.css";

import Card from '../card/card-component';

class CardList extends React.Component {
  // initial state
  state = {};

  render() {
    // destructure variables from props
    const { monsters } = this.props;

    return (
      <div className="card_list">
        {monsters.map((monster) => {
          // destructure variables from monster
          const { id, name, email } = monster

          return (
            <Card key={id} id={id} name={name} email={email} />
            // <div className="card_container" key={id}>
            //   <img
            //     src={`https://robohash.org/${id}?set=set2&size=250x250`}
            //     alt="Monster"
            //     className="card_img"
            //   />
            //   <h2>{name}</h2>
            //   <p>{email}</p>
            // </div>
          )
        })}
      </div>
    );
  }
}

export default CardList;
