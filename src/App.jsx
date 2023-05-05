import "./App.css";
import Main from "./layouts/Main";
import Signin from "./pages/Signin";
function App() {
  return (
    <>
      <Main>
      <div className="min-h-[100vh] ">
      <Signin />
      </div>
      </Main>
    </>
  );
}

export default App;
