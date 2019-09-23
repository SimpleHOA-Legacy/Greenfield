import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import firebase from "./firebase";
import { Container, Row, Col } from "reactstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    firebase
      .loginWithGoogle()
      .then(data => {
        // data also has idToken and sessionToken properties
        const firebaseId = data.user.uid;
        // console.log('--------------------------fireBasedID', firebaseId);
        localStorage.setItem("uid", firebaseId);
        axios
          .get(`/checkForUser/${firebaseId}`)
          .then(res => {
            console.log("========data", res.data);
            if (res.data.registered) {
              localStorage.setItem("hoaId", res.data.hoaInfoFromDb.id);
              localStorage.setItem(
                "hoaInfo",
                JSON.stringify(res.data.hoaInfoFromDb)
              );
              this.props.history.push("/");
              return Swal.fire(`Welcome to SimpleHoa!`);
            } else {
              this.props.history.push("/InputInfo");
              return Swal.fire(`Please signup for an account.`);
            }
          })
          .catch(err => {
            console.error("Error checking user status", err);
          });
      })
      .catch(err => {
        console.error("=======error", err);
      });
  }

  render() {
    console.log("LOGIN PROPS", this.props);
    return (
      <Container>
        <Row className="mt-5">
          <Col sm={{ size: 4, offset: 4 }}>
            <h1>SimpleHOA</h1>
            <hr />
            <button className="btn btn-primary" onClick={this.handleClick}>
              Login with Google
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}
