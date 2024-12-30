import { v4 as uuidv4 } from "uuid";

export const tenureData = [12, 24, 36, 48, 60];

export const myGithubAPI = "https://api.github.com/users/mohaknigam";

export const dummyList = [
  "apple",
  "mango",
  "anaar",
  "appple",
  "maanga",
  "apple",
  "dinosaur",
];

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

export const images = [
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
  {
    id: uuidv4(),
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvO0cl-KzT0dDmlLnWYih2Dp-9wThS4lphYA&s",
    title: "Item 4",
    description: "Description of item 4",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mMpvRHYlX5CePKZji6gM-mIcoJTUhsx5mQ&s",
    title: "Item 5",
    description: "Description of item 5",
  },
];

export const api_url = "https://reqres.in/api/users";

export const dummy_api_url = "https://dummyjson.com/products?limit=100";

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

export const MEME_API_URL = "https://meme-api.com/gimme/20";

export const accordianData = [
  {
    id: uuidv4(),
    title: "Accordian Item # 1",
    description:
      "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    id: uuidv4(),
    title: "Accordian Item # 2",
    description:
      "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    id: uuidv4(),
    title: "Accordian Item # 3",
    description:
      "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];
