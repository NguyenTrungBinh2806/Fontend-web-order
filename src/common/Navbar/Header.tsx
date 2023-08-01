import { SearchIcon, TextInput, toaster } from "evergreen-ui";
import logo from "../../../src/logo.svg";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SearchInput } from "evergreen-ui";

function NavbarLine() {
  const [search, setSearch] = useState("");
  const handleAction = () => {
    if (search.length < 1) {
      toaster.warning("Please input something to search");
      return true;
    } else {
      toaster.success("Your search information is " + search);
      return false;
    }
  };
  return (
    // navbar có background màu xanh dương
    <Navbar
      style={{ backgroundColor: "#006699" }}
      expand="lg"
      variant="dark"
      // sticky="top"
      // className="bg-body-tertiary"
      // bg="primary"
    >
      <Container fluid>
        {/* <image href="https://rjshop.in/wp-content/uploads/2022/05/RJ-shop_ikon-e1651524409739.jpg"/> */}
        <Navbar.Brand
          href="#home"
          style={{ fontWeight: "bold", color: "#FFCC00" }}
        >
          <img
            src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-The-Gioi-Di-Dong-MWG.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />{" "}
          RJShopping
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" title="Menu" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "white" }}>
              Promotions
            </Nav.Link>
            <NavDropdown
              title="Categories"
              id="basic-nav-dropdown"
              style={{ color: "white" }}
            >
              <NavDropdown.Header>Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">footwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                fashion accessories
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Header>Services</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.4">
                Rental service
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                warranty service
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                return service
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* <Nav>
            <Navbar.Collapse>
              <Form className="d-flex">
                <TextInput
                  placeholder="Search..."
                  value={search}
                  onChange={(e: any) => setSearch(e.target.value)}
                  style={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  onKeyPress={(e: any) => {
                    if (e.key === "Enter") {
                      handleAction();
                    }
                  }}
                />
                <Button
                  variant="warning"
                  content="Search"
                  color="dark"
                  size="sm"
                  style={{
                    color: "#222222",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                  onClick={() => handleAction()}
                >
                  <SearchIcon />
                </Button>
              </Form>
            </Navbar.Collapse>
          </Nav> */}
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
          {/* <span style={{
                color: "white",
          }}>
              Signed in as: 
            </span> */}
          </Nav>
          <Nav className="justify-content-end">
            
            <NavDropdown
              title="Nguyen Binh"
              id="basic-nav-dropdown"
              // change color title
              style={{ color: "white" }}
            >
              <NavDropdown.Header>Account</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Order</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLine;
