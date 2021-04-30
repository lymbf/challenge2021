import "./App.css";

import Header from "./View/Header/header";
import Objective from "./View/Objective/objective";
import Leader from "./View/Leader/leader";
import Modal from "./View/Assets/modal";
import Error from "./View/Assets/error";
import Loading from "./View/Assets/loading";
import Progress from "./View/Progress/progress";

import useAppController from "./Controller/appController";

function App() {
  const { user_stats, error, leader, user_activities } = useAppController();
  return (
    <div className="App">
      <div className="app-shadow">
        <Header />
        <Modal header="Our Objective" class="margin-bottom">
          <Objective />
        </Modal>
        {leader ? (
          <Modal header="Current Leader" class="margin-bottom">
            <Leader leader={leader} />
          </Modal>
        ) : (
          <Loading />
        )}
        {user_stats ? (
          <Modal header = 'Our Progress'>
            <Progress user_stats = {user_stats}/>
          </Modal>
        ) : <Loading />}
      </div>
    </div>
  );
}

export default App;
