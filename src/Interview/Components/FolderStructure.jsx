import closeFolderIcon from "../../images/close-folder.png";
import openFolderIcon from "../../images/open-folder.png";
import fileIcon from "../../images/files.png";
import { useState } from "react";

const FolderStructure = ({ explorerData, handleInsertNode }) => {
  const [expanded, setExpanded] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleButtonClick = (e, isFolder) => {
    e.stopPropagation();
    setExpanded(true);
    setShowInput({ visible: true, isFolder: isFolder });
  };

  const handleAdd = (e) => {
    if (e.key === "Enter" && e.target.value) {
      handleInsertNode(explorerData?.id, e.target.value, showInput?.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };
  return explorerData?.type === "folder" ? (
    <div className="tree">
      <div className="folder tile" onClick={handleClick}>
        <img
          src={expanded ? openFolderIcon : closeFolderIcon}
          alt="folder-logo"
        />
        <span>{explorerData.name}</span>
        <div className="btn-container">
          <button onClick={(e) => handleButtonClick(e, true)}>Folder +</button>
          <button onClick={(e) => handleButtonClick(e, false)}>File +</button>
        </div>
      </div>
      <div
        className="recursive-container tree"
        style={{ display: expanded ? "block" : "none" }}
      >
        {showInput.visible && (
          <div className="tile ">
            <img
              src={showInput.isFolder ? closeFolderIcon : fileIcon}
              alt="icons"
            />
            <input
              type="text"
              className="field"
              placeholder={`Enter ${
                showInput.isFolder ? "Folder" : "File"
              } Name`}
              onKeyDown={handleAdd}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              autoFocus
            />
          </div>
        )}
        {explorerData.contents?.map((item) => (
          <FolderStructure
            handleInsertNode={handleInsertNode}
            explorerData={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="file tile">
      <img src={fileIcon} alt="file-logo" />
      <span>{explorerData.name}</span>
    </div>
  );
};

export default FolderStructure;
