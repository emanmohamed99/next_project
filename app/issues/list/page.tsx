import {  Flex, Link, Table } from "@radix-ui/themes";

import IssueActions from "./IssueActions";
import { IssueStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import NextLink from 'next/link';
import { ArrowUpIcon } from "@radix-ui/react-icons";
import Pagination from "@/app/components/Pagination";
import IssueTable, { IssueQuery, columnNames } from "./IssueTable";
import { Metadata } from "next";

const IssuesPage = async ({
  searchParams,
}: {
  searchParams:IssueQuery
}
) => {

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
    const orderBy = columnNames
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: 'asc' }
    : undefined;
    const page=parseInt(searchParams.page)||1;
    const pageSize=10;
  const issues = await prisma.issue.findMany({
    where: {
      status},
      orderBy,
      skip:(page-1)*pageSize,
      take:pageSize
  });
const issueCount=await prisma.issue.count({where:{status}})
  return (
    <Flex direction="column" gap="3">
      <IssueActions />
<IssueTable searchParams={searchParams} issues={issues}/>
      <div className="mb-5">
        <div className="mb-5"></div>
      
        <Pagination pageSize={pageSize} currentPage={page} itemCount={issueCount}/>
      </div>
    </Flex>
  );
};
export const metadata: Metadata = {
  title: 'Issue Tracker - Issue List',
  description: 'View all project issues'
};
export default IssuesPage;
