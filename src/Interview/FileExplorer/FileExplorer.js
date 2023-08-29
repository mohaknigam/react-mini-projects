import { useState } from "react";
import { nestedFileStructure } from "../Constants";
import Folder from "./Folder";
import useAddContent from "../utils/useAddContent";
const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(nestedFileStructure);
  const { addContent } = useAddContent();
  const handleInsertNode = (parentNodeId, item, isFolder) => {
    const updatedData = addContent(explorerData, parentNodeId, item, isFolder);
    setExplorerData(updatedData);
  };
  return (
    <Folder explorerData={explorerData} handleInsertNode={handleInsertNode} />
  );
};

export default FileExplorer;
