import { Modal, Spinner } from "react-bootstrap";

export const Loading = ({isShow}: {isShow: boolean}) => {
  return (
    <Modal show={isShow} centered size="sm">
      <Modal.Body
        className="text-center"
        style={{ backgroundColor: "#006699" }}
      >
        <Spinner
          animation="border"
          variant="warning"
          role="status"
          style={{ width: "100px", height: "100px", borderWidth: "10px" }}
        ></Spinner>
        <h3 className="sr-only" style={{ color: "#FFCC00" }}>
          Loading...
        </h3>
      </Modal.Body>
    </Modal>
  );
};
