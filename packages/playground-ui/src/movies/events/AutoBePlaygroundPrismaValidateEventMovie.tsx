import { AutoBePrismaValidateEvent } from "@autobe/interface";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Card, CardActions, CardContent, Chip } from "@mui/material";
import StackBlitzSDK from "@stackblitz/sdk";

import { ErrorUtil } from "../../utils/ErrorUtil";

export function AutoBePlaygroundPrismaValidateEventMovie(
  props: AutoBePlaygroundPrismaValidateEventMovie.IProps,
) {
  const openStackBlitz = () =>
    StackBlitzSDK.openProject(
      {
        files: {
          ...props.event.schemas,
          ...(props.event.compiled.type === "failure"
            ? {
                "compile-failure-reason.log": props.event.compiled.reason,
              }
            : props.event.compiled.type === "exception"
              ? {
                  "compile-error.json": JSON.stringify(
                    ErrorUtil.toJSON(props.event.compiled.error),
                    null,
                    2,
                  ),
                }
              : {}),
          "result.json": JSON.stringify(props.event.result, null, 2),
        },
        title: "AutoBE Prisma Validate Report",
        description: "Report of Prisma Validate Event (Compilation Error)",
        template: "node",
      },
      {
        newWindow: true,
      },
    );
  return (
    <Card
      elevation={3}
      style={{
        marginTop: 15,
        marginBottom: 15,
        marginRight: "15%",
      }}
    >
      <CardContent>
        <Chip
          icon={<ErrorOutlineIcon />}
          label={"Prisma Compilation Error"}
          variant="outlined"
          color="warning"
        />
        <br />
        <br />
        AI wrote invalid Prisma schema, so compilation error occurred.
        <br />
        <br />
        Trying to recover the compile error by studying the AI agent.
        <br />
        <br />
        Please wait for a while.
      </CardContent>
      <CardActions style={{ textAlign: "right" }}>
        <Button startIcon={<ExpandMoreIcon />} onClick={() => openStackBlitz()}>
          Open Validation Details
        </Button>
      </CardActions>
    </Card>
  );
}
export namespace AutoBePlaygroundPrismaValidateEventMovie {
  export interface IProps {
    event: AutoBePrismaValidateEvent;
  }
}
