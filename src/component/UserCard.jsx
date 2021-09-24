import { Component } from "react";
import "./data.js";
import data from "./data.js";
import"./style.css"


class UserCard extends Component {

  
  render() {
    const { firstName, lastName, profilePicture } = this.props;
 
    return (
      <div className="cardWrapper">
         <img className="imgWrapper"   src={profilePicture}   alt = {`${firstName} ${lastName}`} />
        <h2>
          {firstName}
          {lastName}
        </h2>
      
      </div>
    );
  }
}

function CardRender() {
  return (
    <div className="CardSpase">
      {data.map((user) => (
        <UserCard
          firstName={user.firstName}
          lastName={user.lastName}
          profilePicture={user.profilePicture}
          contacts={user.contacts}
        />
      ))}
    </div>
  );
}

export default CardRender;
