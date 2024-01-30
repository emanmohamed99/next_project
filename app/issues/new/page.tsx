
import dynamic from 'next/dynamic';
import IssueFormSkeleton from './Loading';
// import IssueForm from '../_components/IssueForm'
interface Props{
    params:{
id:string
    }
}
const IssueForm = dynamic(
    () => import('@/app/issues/_components/IssueForm'),
    { 
      ssr: false,
     loading:()=><IssueFormSkeleton/>
    }
  );
const NewIssuePage = ({params}:Props) => {

  return (
    <IssueForm/>
  )
}

export default NewIssuePage