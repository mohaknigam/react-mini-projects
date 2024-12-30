import React from "react";
import Comment from "./Comment";
import { v4 as uuidv4 } from "uuid";

const CommentsSection = () => {
  const comments = [
    {
      id: uuidv4(),
      username: "Mohak",
      description:
        "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
      replies: [
        {
          id: uuidv4(),
          username: "Mohak 1",
          description:
            "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
          replies: [
            {
              id: uuidv4(),
              username: "Mohak",
              description:
                "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
              replies: [
                {
                  id: uuidv4(),
                  username: "Mohak",
                  description:
                    "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
                  replies: [
                    {
                      id: uuidv4(),
                      username: "Mohak 1",
                      description:
                        "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
                      replies: [
                        {
                          id: uuidv4(),
                          username: "Mohak",
                          description:
                            "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
                          replies: [
                            {
                              id: uuidv4(),
                              username: "Mohak",
                              description:
                                "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          username: "Mohak 21",
          description:
            "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
          replies: [
            {
              id: uuidv4(),
              username: "Mohak 1",
              description:
                "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
              replies: [
                {
                  id: uuidv4(),
                  username: "Mohak",
                  description:
                    "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
                  replies: [
                    {
                      id: uuidv4(),
                      username: "Mohak",
                      description:
                        "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          username: "Mohak 3",
          description:
            "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
        },
      ],
    },
    {
      id: uuidv4(),
      username: "Kalpesh",
      description:
        "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
      replies: [
        {
          id: uuidv4(),
          username: "Mohak",
          description:
            "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
          replies: [
            {
              id: uuidv4(),
              username: "Mohak 1",
              description:
                "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
            },
            {
              id: uuidv4(),
              username: "Mohak 21",
              description:
                "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
            },
            {
              id: uuidv4(),
              username: "Mohak 3",
              description:
                "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      username: "Neeraj",
      description:
        "So hard to explain to non-Test-Cricket-lovers why a day where the runrate never climbs above two and change can be riveting start to finish, but this is truly when cricket is at its very best.",
    },
  ];
  return (
    <div>
      <Comment comments={comments} />
    </div>
  );
};

export default CommentsSection;
