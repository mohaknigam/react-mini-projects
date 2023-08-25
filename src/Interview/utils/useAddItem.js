import { v4 as uuidv4 } from "uuid";

const useAddItems = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.type === "folder") {
      tree.contents?.unshift({
        type: isFolder ? "folder" : "file",
        name: item,
        id: uuidv4(),
        contents: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree?.contents?.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });

    return { ...tree, contents: latestNode };
  };

  return { insertNode };
};

export default useAddItems;
