import { Table } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from '@/app/components';
const LoadingIssuePage = () => {
  const issues = [1, 2, 3, 4, 5];
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Issue
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Status
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Created
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue: any) => (
          <Table.Row key={issue}>
            <Table.Cell>
            <Skeleton/>
              <div className="block md:hidden">
                {" "}
                <Skeleton/>
              </div>
            </Table.Cell>
            <Table.Cell>
              {" "}
              <Skeleton/>
            </Table.Cell>
            <Table.Cell>
               {" "}
               <Skeleton/>
               </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default LoadingIssuePage;
