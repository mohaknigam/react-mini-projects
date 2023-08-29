import openFolderIcon from "../../images/open-folder.png";
import closeFolderIcon from "../../images/close-folder.png";
import fileIcon from "../../images/files.png";
import { useState } from "react";

const Folder = ({ explorerData, handleInsertNode }) => {
  const [expanded, setExpanded] = useState(false);
  const [inputText, setInputText] = useState("");
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: true,
  });

  const handleTileClick = () => {
    setExpanded(!expanded);
  };

  const handleAdd = (e, isFolder) => {
    setShowInput({ isVisible: true, isFolder: isFolder });
    setExpanded(true);
    e.stopPropagation();
  };

  const handleBlurr = () => {
    setShowInput({ ...showInput, isVisible: false });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleInsertNode(explorerData?.id, e.target.value, showInput?.isFolder);
      setInputText("");
      setShowInput({ ...showInput, isVisible: false });
    }
  };

  return explorerData?.type === "folder" ? (
    <div>
      <div className="tile" onClick={handleTileClick}>
        <img
          src={expanded ? openFolderIcon : closeFolderIcon}
          alt="folder icon"
        />
        <span>{explorerData?.name}</span>
        <div className="btn-container">
          <button onClick={(e) => handleAdd(e, false)}>+ File</button>
          <button onClick={(e) => handleAdd(e, true)}>+ Folder</button>
          <button>Rename</button>
          <button>Delete</button>
        </div>
      </div>
      <div
        className="recursive-container"
        style={{ display: expanded ? "block" : "none" }}
      >
        {showInput.isVisible && (
          <div className="tile">
            <img
              src={showInput.isFolder ? closeFolderIcon : fileIcon}
              alt="icon"
            />
            <input
              type="text"
              placeholder={`Enter ${
                showInput.isFolder ? "Folder" : "File"
              } Name`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              onBlur={handleBlurr}
            />
          </div>
        )}
        {explorerData.contents.map((item, index) => {
          return (
            <Folder
              explorerData={item}
              key={item.id}
              handleInsertNode={handleInsertNode}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div className="tile">
      <img src={fileIcon} alt="folder icon" />
      <span>{explorerData?.name}</span>
    </div>
  );
};

export default Folder;
