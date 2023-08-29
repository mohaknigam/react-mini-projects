import { v4 as uuidv4 } from "uuid";

const useAddContent = () => {
  const addContent = (tree, parentNodeId, item, isFolder) => {
    if (tree?.type === "folder" && tree?.id === parentNodeId) {
      tree.contents?.unshift({
        type: isFolder ? "folder" : "file",
        name: item,
        id: uuidv4(),
        contents: [],
      });

      return tree;
    }

    let newList = [];
    newList = tree.contents?.map((obj) => {
      return addContent(obj, parentNodeId, item, isFolder);
    });

    return { ...tree, contents: newList };
  };
  return { addContent };
};

export default useAddContent;
