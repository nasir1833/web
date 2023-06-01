import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import CustomRoutes from "./Routes";

function App() {
  const style = {
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    position: "fixed",
    bottom: "1rem",
    right: "2rem",
    fontSize: "2rem",
    border: "1px solid black",
    borderRadius: "50%",
    height: "40px",
    width: "40px",
    cursor:"pointer"
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
    <AuthContextProvider>
      <CustomRoutes />
      <div className="top__btn" onClick={handleScrollToTop} style={style} title="Go to Top">
        <i className="fa-solid fa-caret-up" style={{color:"grey"}} ></i>
      </div>
    </AuthContextProvider>
    </>
  );
}

export default App;
