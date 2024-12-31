import logo from "./logo.svg";
import "./App.css";
import { nestedFileStructure } from "./Interview/Constants";
import ForceUpdateClass from "./Interview/Components/ForceUpdateClass";
import StateUpdate from "./Interview/Components/StateUpdate";
import RandomNumber from "./Interview/Components/RandomNumber";
import Clock from "./Interview/Components/Clock";
import Timer from "./Interview/Components/Timer";
import CountDown from "./Interview/Components/CountDown";
import Sample from "./Interview/Components/Sample";
import DBPage from "./Interview/EmployeeDB/DBPage";
import StarRating from "./Interview/Components/StarRating";
import SearchFeature from "./Interview/Components/SearchFeature";
import Carousel from "./Interview/Components/Carousel";
import ApiTask from "./Interview/Components/ApiTask";
import Todo from "./Interview/Components/Todo";
import FileExplorer from "./Interview/FileExplorer/FileExplorer";
import InfiniteScroll from "./Interview/Low_Level_Design/InfiniteScroll/InfiniteScroll";
import Pagination from "./Interview/Pagination/Pagination";
import Calculator from "./Interview/Calculator/Calculator";
import Parent from "./Interview/Hooks/ReactDotMemo/Parent";
import UseMemoHook from "./Interview/Hooks/MemoizationHooks/UseMemoHook";
import UseState from "./Interview/Hooks/OtherHooks/UseState";
import UseRef from "./Interview/Hooks/OtherHooks/UseRef";
import ParentComponent from "./Interview/Hooks/OtherHooks/ContextAPI/ParentComponent";
import UseReducerBasic from "./Interview/Hooks/OtherHooks/ReducerHook/UseReducerBasic";
import UseReducerInterMediate from "./Interview/Hooks/OtherHooks/ReducerHook/UseReducerInterMediate";
import UseCallbackHook from "./Interview/Hooks/MemoizationHooks/UseCallbackHook";
import ModalParent from "./Interview/ModalPopup/ModalParent";
import HomePage from "./Interview/ReduxToolkit/HomePage";
import { Provider } from "react-redux";
import store from "./Interview/ReduxToolkit/store";
import Debounce from "./Interview/Javascript/Debounce";
import Throttling from "./Interview/Javascript/Throttling";
import Bubbling from "./Interview/Javascript/Bubbling";
import Accordian from "./Interview/Low_Level_Design/Accordian/Accordian.jsx";
import CommentsSection from "./Interview/Low_Level_Design/RedditComments/CommentsSection.jsx";
import Carousal from "./Interview/Low_Level_Design/Carousal/Carousal.jsx";
import MainPagination from "./Interview/Low_Level_Design/Pagination/MainPagination.jsx";
import BlockSelector from "./Interview/Low_Level_Design/BlockSelector/BlockSelector.jsx";
import Scroller from "./Interview/Low_Level_Design/IntersectionObserver/Scroller.jsx";

function App() {
  return (
    <div className="h-screen">
      {/* <ForceUpdateClass /> */}
      {/* <StateUpdate /> */}
      {/* <RandomNumber /> */}
      {/* <Clock /> */}
      {/* <Timer /> */}
      {/* <CountDown /> */}
      {/* <Sample /> */}
      {/* <DBPage /> */}
      {/* <StarRating /> */}
      {/* <SearchFeature /> */}
      {/* <Carousel /> */}
      {/* <ApiTask /> */}
      {/* <Todo /> */}
      {/* <FileExplorer /> */}
      {/* <InfiniteScroll /> */}
      {/* <Pagination /> */}
      {/* <Calculator /> */}
      {/* <Parent /> */}
      {/* <UseMemoHook /> */}
      {/* <UseState /> */}
      <UseRef />
      {/* <ParentComponent /> */}
      {/* <UseReducerBasic /> */}
      {/* <UseReducerInterMediate /> */}
      {/* <UseCallbackHook /> */}
      {/* <ModalParent /> */}
      {/* <Provider store={store}>
        <HomePage />
      </Provider> */}
      {/* <Debounce /> */}
      {/* <Throttling /> */}
      {/* <Bubbling /> */}
      {/* <InfiniteScroll /> */}
      {/* <Accordian /> */}
      {/* <CommentsSection /> */}
      {/* <Carousal /> */}
      {/* <MainPagination /> */}
      {/* <BlockSelector /> */}
      {/* <Scroller /> */}
    </div>
  );
}

export default App;
