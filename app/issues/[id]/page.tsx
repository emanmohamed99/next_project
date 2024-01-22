import { IssueStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./issueDetails";
interface Props {
  params: { id: string };
}
const IssueDetailsPage = async ({ params }: Props) => {
  // if (typeof params.id !== 'number')  notFound();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
      <IssueDetails issue={issue}/>
      </Box>
      <Box>
        <EditIssueButton issueId={issue.id}/>
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
