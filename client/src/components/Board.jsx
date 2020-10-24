import React from "react";
import AddBoardMemberModal from "./AddBoardMemberModal.jsx";
import axios from "axios";
import Swal from "sweetalert2";
import { Container, Col, Row, Table, Button } from "reactstrap";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoaId: localStorage.getItem("hoaId"),
      tenant: null,
      positions: [],
      position: null,
      showAddModal: false,
      homeowners: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.addBoardMember = this.addBoardMember.bind(this);
  }

  componentDidMount() {
    const { hoaId } = this.state;
    axios.get(`/api/getHomeowners/${hoaId}`).then(homeowners =>
      this.setState({
        homeowners: homeowners.data
      })
    );
  }

  handleDelete(selectedBoardMember) {
    return axios
      .delete(
        `api/deleteBoardMember/${selectedBoardMember.id}/${selectedBoardMember.homeOwner.id}`
      )
      .then(res => {
        if (res.data.isDeleted) {
          this.props.getAllBoardMembers();
        }
        return Swal.fire(`The ${selectedBoardMember.position} was fired.`);
      })
      .catch(err => console.error("The Homeowner was not removed.", err));
  }

  toggleModal(state) {
    this.setState(prevState => ({ [state]: !prevState[state] }));
  }

  addBoardMember(boardMemberData) {
    delete boardMemberData.homeowners;

    axios
      .post("/api/addBoardMember", boardMemberData)
      .then(res => {
        if (res.data.isAdded) {
          this.setState({ showAddModal: false }, () =>
            this.props.getAllBoardMembers()
          );
        }
        return Swal.fire(`The home owner was added to the Board.`);
      })
      .catch(err => console.error("error adding homeowner", err));
  }

  render() {
    const { showAddModal, homeowners } = this.state;
    const { boardMembers } = this.props;
    return (
      <Container className="mt-4">
        <AddBoardMemberModal
          addBoardMember={this.addBoardMember}
          homeowners={homeowners}
          showModal={showAddModal}
          toggleModal={this.toggleModal}
        />
        <h1>Board Members</h1>

        <Button
          className="float-right mb-4 btn-custom"
          size="sm"
          color="success"
          onClick={() => this.toggleModal("showAddModal")}
        >
          Add Board Member
        </Button>

        <Row>
          <Col>
            <Table
              responsive
              hover
              color="white"
              bordered
              size="sm"
              sm={{ size: 12 }}
              md={{ size: 10, offset: 1 }}
            >
              <thead className="bg-green">
                <tr>
                  <th className="th-sm th-text">Position</th>
                  <th className="th-sm th-text">Name</th>
                  <th className="th-sm th-text">Address</th>
                  <th className="th-sm th-text">Phone</th>
                  <th className="th-sm th-text">Email</th>
                  <th className="th-sm th-text"></th>
                </tr>
              </thead>
              <tbody>
                {boardMembers.map(boardMember => {
                  return (
                    <tr key={boardMember.homeOwner.id}>
                      <td className="td-sm td-text">{boardMember.position}</td>
                      <td className="td-sm td-text">{`${boardMember.homeOwner.firstName} ${boardMember.homeOwner.lastName}`}</td>
                      <td className="td-sm td-text">
                        {boardMember.homeOwner.address}
                      </td>
                      <td className="td-sm td-text">
                        {boardMember.homeOwner.phone}
                      </td>
                      <td className="td-sm td-text">
                        {boardMember.homeOwner.email}
                      </td>
                      {/* <td className="td-sm td-text">Board Member</td> */}
                      <td>
                        <Button
                          color="danger"
                          onClick={() => this.handleDelete(boardMember)}
                          size="sm"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Board;
