"use client"
import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons'
import { Button, Flex, Text } from '@radix-ui/themes'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
interface Props{
  itemCount:number,
pageSize:number,
currentPage:number,
}
const Pagination = ({itemCount,pageSize,currentPage}:Props) => {
 const router= useRouter()
  const searchparams=useSearchParams()

  const pageCount=Math.ceil(itemCount/pageSize)
  if(pageCount<=1)return null;
  const ChangePage=(page:number)=>{
    const params=new URLSearchParams(searchparams)
    console.log(params);
    params.set("page",page.toString());
    router.push('?'+params.toString());
  }
  return (
    <Flex align='center'gap="2">
    <Text size="2">page {currentPage} of {pageCount}</Text>
    <Button color='gray' variant='soft' disabled={currentPage===1} onClick={()=>ChangePage(1)}>
      <DoubleArrowLeftIcon/>
    </Button>
    <Button color='gray' variant='soft' disabled={currentPage===1}onClick={()=>ChangePage(currentPage+1)}>
      <ChevronLeftIcon/>
    </Button>
    <Button color='gray' variant='soft' disabled={currentPage===pageCount}onClick={()=>ChangePage(currentPage+1)}>
      <ChevronRightIcon/>
    </Button>
    <Button color='gray' variant='soft' disabled={currentPage===pageCount} onClick={()=>ChangePage(pageCount)}>
      <DoubleArrowRightIcon/>
    </Button>
    </Flex>
  )
}

export default Pagination