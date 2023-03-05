import { useEffect, useState } from "react";
import {
  Wrapper,
  Container,
  UserContainer,
  User,
  Title,
  SearchContainer,
  Footer,
  ModalData,
  ModalHeader,
} from "./styles";
import CoreService from "../../services/core";
import x from "../../assets/x.png";
import xModal from "../../assets/x2.png";
import ChevronRight from "../../assets/chevron-right.png";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    with: "100vw",
    background: "#FFFFF9",
  },
};

function Dashboard() {
  const [userList, setUserList] = useState();
  const [displayList, setDisplayList] = useState();
  const [search, setSearch] = useState();
  const service = { CoreService: new CoreService() };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function getAvatars() {
    try {
      const response = await service.CoreService.getAvatars();
      console.log(response.data.data);
      setUserList(response.data.data);
      return setDisplayList(response.data.data);
    } catch (err) {
      console.log(err);
      return;
    }
  }

  function clearInput() {
    const input = document.getElementById("input-search");
    setDisplayList(userList);
    return setSearch("");
  }

  useEffect(() => {
    getAvatars();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>Search name</Title>
        <SearchContainer>
          <div>
            <input
              type="text"
              id="input-search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                const filteredArray = userList.filter((user) => {
                  console.log(e.target.value);
                  const filter = user.first_name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase());

                  const array = [];
                  console.log("Filter: ", filter);
                  if (filter === true) {
                    array.push(user);
                    console.log("Array:", array);
                    console.log("Tipo: ", typeof displayList);
                    setDisplayList(array);
                    console.log("Display:", displayList);
                    //return setDisplayList({ ...array });
                  }
                  if (e.target.value.length < 1) {
                    setDisplayList(userList);
                  }
                  return;
                });
              }}
              className="input"
            ></input>
          </div>
          <div onClick={() => clearInput()}>
            <img src={x} alt="" className="btn-clear" />
          </div>
        </SearchContainer>
        <UserContainer>
          {displayList &&
            displayList.map((user) => {
              return (
                <User key={user.id}>
                  <img src={user.avatar} alt="" className="avatar" />
                  <div>
                    <div className="name">{user.first_name}</div>
                    <div className="email">{user.email}</div>
                  </div>
                  <div
                    className="icon"
                    onClick={() => {
                      setDataModal(user);
                      openModal();
                    }}
                  >
                    <img src={ChevronRight} alt="" />
                  </div>
                </User>
              );
            })}
        </UserContainer>
        <Footer>
          Total contacts <span className="total">{displayList?.length}</span>
        </Footer>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          ariaHideApp={false}
          style={customStyles}
        >
          <ModalHeader>
            <img
              src={xModal}
              alt=""
              className="btn-close"
              onClick={closeModal}
            />
          </ModalHeader>

          <ModalData>
            {dataModal && (
              <>
                <div>
                  <img src={dataModal.avatar} className="avatar" alt="" />
                </div>
                <div> ID: {dataModal.id}</div>
                <div>First name: {dataModal.first_name}</div>
                <div>Last name: {dataModal.last_name}</div>
                <div>Email: {dataModal.email}</div>
              </>
            )}
          </ModalData>
        </Modal>
      </Container>
    </Wrapper>
  );
}

export default Dashboard;
