
import IssueForm from '../_components/IssueForm'
interface Props{
    params:{
id:string
    }
}
const NewIssuePage = ({params}:Props) => {

  return (
    <IssueForm/>
  )
}

export default NewIssuePage