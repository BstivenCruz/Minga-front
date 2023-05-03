import "./App.css";
import Main from "./layouts/Main";
import Drawer from "./components/Drawer";
function App() {
  return (
    <>
      <Main>
      <div className="min-h-[90vh]">
        <Drawer />
      </div>
      </Main>
    </>
  );
}

export default App;
