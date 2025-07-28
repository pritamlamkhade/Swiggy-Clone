import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="bg-[#fefefe] h-[100vw] flex flex-col">
        <Header />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
