import { IssueStatusBadge } from '@/app/components'
import { Issue } from '@prisma/client'
import { Box, Heading, Flex, Card } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const IssueDetails = ({issue}:{issue:Issue}) => {
  return (
    <Box>
    <Heading>{issue.title}</Heading>
    <Flex className="space-x-3" my="2">
      <IssueStatusBadge status={issue.states} />
    </Flex>
    <Card className="Prose">
      <ReactMarkdown>{issue.description}</ReactMarkdown>
    </Card>
    <p>{issue.status}</p>
    <p>{issue.createdAt.toDateString()}</p>
  </Box>
  )
}

export default IssueDetails