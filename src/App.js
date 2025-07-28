import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="bg-[#fefefe] h-[100vw]">
        <Body />
      </div>
    </Provider>
  );
};

export default App;
