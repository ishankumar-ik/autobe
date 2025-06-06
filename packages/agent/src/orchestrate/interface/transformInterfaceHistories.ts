import { IAgenticaHistoryJson } from "@agentica/core";

import { AutoBeState } from "../../context/AutoBeState";

export const transformInterfaceHistories = (
  state: AutoBeState,
  systemMessage: string,
): Array<
  IAgenticaHistoryJson.IAssistantMessage | IAgenticaHistoryJson.ISystemMessage
> => {
  if (state.analyze === null)
    return [
      {
        type: "systemMessage",
        text: [
          "Requirement analysis is not yet completed.",
          "Don't call the any tool function,",
          "but say to process the requirement analysis.",
        ].join(" "),
      },
    ];
  else if (state.prisma === null)
    return [
      {
        type: "systemMessage",
        text: [
          "Prisma DB schema generation is not yet completed.",
          "Don't call the any tool function,",
          "but say to process the Prisma DB schema generation.",
        ].join(" "),
      },
    ];
  else if (state.analyze.step !== state.prisma.step)
    return [
      {
        type: "systemMessage",
        text: [
          "Prisma DB schema generation has not been updated",
          "for the latest requirement analysis.",
          "Don't call the any tool function,",
          "but say to re-process the Prisma DB schema generation.",
        ].join(" "),
      },
    ];
  else if (state.prisma.compiled.type !== "success")
    return [
      {
        type: "systemMessage",
        text: [
          "Prisma DB schema generation has not been updated",
          "for the latest requirement analysis.",
          "Don't call the any tool function,",
          "but say to re-process the Prisma DB schema generation.",
        ].join(" "),
      },
    ];
  return [
    {
      type: "systemMessage",
      text: systemMessage,
    },
    {
      type: "assistantMessage",
      text: [
        "Requirement analysis and Prisma DB schema generation are ready.",
        "",
        "Call the provided tool function to generate the OpenAPI document",
        "referencing below requirement analysis and Prisma DB schema.",
        "",
        // User Request
        `## User Request`,
        "",
        state.analyze.reason,
        "",
        // Requirement Analysis Report
        `## Requirement Analysis Report`,
        "",
        "```json",
        JSON.stringify(state.analyze.files),
        "```",
      ].join("\n"),
    },
    {
      type: "assistantMessage",
      text: [
        "Database schema and entity relationship diagrams are ready.",
        "",
        "## Prisma DB Schema",
        "```json",
        JSON.stringify(state.prisma.schemas),
        "```",
        "",
        "## Entity Relationship Diagrams",
        "```json",
        JSON.stringify(state.prisma.compiled.diagrams),
        "```",
      ].join("\n"),
    },
  ];
};
