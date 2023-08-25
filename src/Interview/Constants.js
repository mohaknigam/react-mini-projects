import { v4 as uuidv4 } from "uuid";

export const dummyList = [
  "apple",
  "mango",
  "anaar",
  "appple",
  "maanga",
  "apple",
  "dinosaur",
];

export const items = [
  {
    id: uuidv4(),
    imageUrl:
      "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 1",
    description: "Description of item 1",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 2",
    description: "Description of item 2",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 3",
    description: "Description of item 3",
  },
];

export const api_url = "https://reqres.in/api/users";

export const nestedFileStructure = {
  type: "folder",
  name: "root",
  id: uuidv4(),
  contents: [
    {
      type: "folder",
      name: "Documents",
      id: uuidv4(),
      contents: [
        {
          type: "folder",
          name: "Work",
          id: uuidv4(),
          contents: [
            { type: "file", name: "report.docx", id: uuidv4() },
            {
              type: "folder",
              name: "presentation.pptx",
              id: uuidv4(),
              contents: [
                { type: "file", name: "resume.pdf", id: uuidv4() },
                { type: "file", name: "cover-letter.docx", id: uuidv4() },
              ],
            },
          ],
        },
        {
          type: "folder",
          name: "Personal",
          id: uuidv4(),
          contents: [
            { type: "file", name: "resume.pdf", id: uuidv4() },
            { type: "file", name: "cover-letter.docx", id: uuidv4() },
          ],
        },
      ],
    },
    {
      type: "folder",
      name: "Pictures",
      id: uuidv4(),
      contents: [
        { type: "file", name: "vacation.jpg", id: uuidv4() },
        { type: "file", name: "family.jpg", id: uuidv4() },
      ],
    },
    { type: "file", name: "notes.txt", id: uuidv4() },
  ],
};
