
"use client";
import React, { useState } from "react";
// import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { TextField, Button, Callout ,Text} from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";


import axios from "axios";
import { useRouter } from "next/navigation";
import {zodResolver} from "@hookform/resolvers/zod"
import { IssuseSchema } from "@/app/validationschema";
import {z} from "zod"
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { Issue } from "@prisma/client";
import SimpleMDE from 'react-simplemde-editor';
// import SimpleMDE from 'react-simple-code-editor';


//   interface IssueForm {
//     title: string;
//     description: string;
//   }
interface Props{
  issue?:Issue
}
const IssueForm = ({issue}:{issue?:Issue}) => {
    type IssueFormData= z.infer<typeof IssuseSchema>;
  
   const router=useRouter()
     const { register, control, handleSubmit,formState:{errors} } = useForm<IssueFormData>({
       resolver:zodResolver(IssuseSchema)
     });
   const [error, setError] = useState('');
   const [isSubmitting,setSubmitting]= useState(false);
  return (
    <div className="max-w-xl">
    {error&&(<Callout.Root color="red">
<Callout.Text>
{error}
</Callout.Text>
</Callout.Root>)}
<form
  className="max-w-xl space-y-3"
  onSubmit={handleSubmit(async(data) => {
    try {
        setSubmitting(true)
        if(issue)
       await axios.patch('/api/issues/'+issue.id,data)
       else await  axios.post('/api/issues',data)
       router.push('/issues/list');
        router.refresh()
    } catch (error) {
        setError('an expected error occurred')
     
    }

  })}
>
  <TextField.Root>
    <TextField.Input defaultValue={issue?.title} placeholder="Title" {...register("title")} />
  </TextField.Root>
  {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
  <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
{errors.description && <ErrorMessage>{errors.description?.message}</ErrorMessage>}
  {issue?'update Issue':'submit new issue'}{' '}<Button disabled={isSubmitting}>Submit New Issue {isSubmitting&&<Spinner/>}</Button>
</form>
</div>
  )
}

export default IssueForm