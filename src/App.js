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
import FolderStructure from "./Interview/Components/FolderStructure";
import { useState } from "react";
import useAddItems from "./Interview/utils/useAddItem";

function App() {
  const [explorerData, setExplorerData] = useState(nestedFileStructure);
  const { insertNode } = useAddItems();
  const handleInsertNode = (folderId, item, isFolder) => {
    const newTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(newTree);
  };
  return (
    <div className="App">
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
      <FolderStructure
        explorerData={explorerData}
        handleInsertNode={handleInsertNode}
      />
    </div>
  );
}

export default App;
