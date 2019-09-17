import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import DBFinancials from "./DBFinancials.jsx";
import DBMaintenenceTicket from "./DBMaintenenceTicket.jsx";
import DBCalendar from "./DBCalendar.jsx";
import DBTenantsTable from "./DBTenantsTable.jsx";
import DBBoardTable from "./DBBoardTable.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 6 }}>
            <DBFinancials />
            <DBMaintenenceTicket />
          </Col>
          <Col md={{ size: 6 }}>
            <DBCalendar />
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 9 }}>
            <DBTenantsTable />
          </Col>
          <Col md={{ size: 3 }}>
            <DBBoardTable />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
