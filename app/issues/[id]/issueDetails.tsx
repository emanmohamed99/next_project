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
      <IssueStatusBadge status={issue.status} />
    </Flex>
    <Card className="Prose max-w-full">
      <ReactMarkdown>{issue.description}</ReactMarkdown>
    </Card>
 
    <p>{issue.createdAt.toDateString()}</p>
  </Box>
  )
}

export default IssueDetails