import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const DBBoardTable = ({ boardMembers }) => {
  // console.log('bbbbbbb', boardMembers);
  const emperor = boardMembers.find(
    boardmember => boardmember.position === "Emperor"
  );
  const president = boardMembers.find(
    boardmember => boardmember.position === "President"
  );
  const vicePresident = boardMembers.find(
    boardmember => boardmember.position === "Vice President"
  );
  const secretary = boardMembers.find(
    boardmember => boardmember.position === "Secretary"
  );
  const treasurer = boardMembers.find(
    boardmember => boardmember.position === "Treasurer"
  );
  return (
    <div className="dashboard-card p-4 mb-4" Style="height:400px width: 100%">
      <h5>HOA Board</h5>
      <hr />
      {/* <ul>
        {boardMembers.map(member => {
          <li>
            {member.position}
            <br />
            {`${member.firstName} ${member.lastName}`}
          </li>;
        })}
      </ul> */}

      <h6>President</h6>
      <p>
        {president &&
          `${president.homeOwner.firstName} ${president.homeOwner.lastName}`}
      </p>
      <hr />

      <h6>Vice President</h6>
      <p>
        {vicePresident &&
          `${vicePresident.homeOwner.firstName} ${vicePresident.homeOwner.lastName}`}
      </p>
      <hr />

      <h6>
        {" "}
        <b>Secretary</b>
      </h6>
      <p>
        {secretary &&
          `${secretary.homeOwner.firstName} ${secretary.homeOwner.lastName}`}
      </p>
      <hr />

      <h6>Treasurer</h6>
      <p>
        {treasurer &&
          `${treasurer.homeOwner.firstName} ${treasurer.homeOwner.lastName}`}
      </p>
      <hr />
      <Button tag={Link} to="/board" size="sm" className="btn-custom">
        Edit Board
      </Button>
    </div>
  );
};

export default DBBoardTable;
