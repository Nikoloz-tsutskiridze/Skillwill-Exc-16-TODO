import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <TodoWrapper />
      </LanguageProvider>
    </div>
  );
}

export default App;
