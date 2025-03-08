import { useEffect } from "react";
import Modal from "react-modal";
import { Bars } from "react-loader-spinner";
import { actions } from "../components/slice/generalSlice";
import { useSelector, useDispatch } from "react-redux";
import { generalSelector } from "../components/slice/generalSlice";

Modal.setAppElement("#root");

const Loader = () => {
  const dispatch = useDispatch();
  const { loading, delayedShowLoader } = useSelector(generalSelector);

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => {
        dispatch(actions.setDelayedShowLoader(true));
      }, 200); // This will ensure the loader is shown only after 200ms
    } else {
      clearTimeout(timer);
      dispatch(actions.setDelayedShowLoader(false));
    }

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <Modal
      isOpen={delayedShowLoader} // Show modal when either general loading or uploading is true
      style={{
        overlay: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000, // Ensure the modal sits on top of all elements
        },
        content: {
          position: "relative",
          top: "auto",
          left: "auto",
          right: "auto",
          bottom: "auto",
          border: "none",
          background: "transparent",
          overflow: "hidden",
          WebkitOverflowScrolling: "touch",
          borderRadius: "0px",
          outline: "none",
          padding: "0px",
        },
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ flexDirection: "column" }}
      >
        <Bars
          height="80"
          width="80"
          color="lightblue"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loading}
        />
      </div>
    </Modal>
  );
};

export default Loader;
