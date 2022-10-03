import { GlobalStyle } from "./styles/reset";
import ToDoList from "./components/todolist";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
};

export default App;
