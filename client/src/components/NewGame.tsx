import { IonButton, IonInput } from '@ionic/react';
import { useForm } from "react-hook-form";
import {
  useMutation,
  useQueryClient
} from '@tanstack/react-query'

const NewGame = ()=>{
  const { register, handleSubmit,reset, formState:{errors} } = useForm({
    defaultValues:{
      celeb: ""
    }
  });

  const mutation = useMutation({
  mutationFn: async (data: any)=>{

      const res = await fetch("http://localhost:3000/game",{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        'roomcode': data.roomCode,  
        'celebrity': data.celebName
      })
      });
      return res.json();
    },
  })

  const onSubmit = async (data: any) =>{


  }

  return<>
  <form onSubmit={handleSubmit(onSubmit)}>
  <IonInput
  label='Enter Celebrity:'
  {...register("celeb", {required: "Enter a celebrity to start the game"})}
  fill='outline'
  />
  <p>{errors.celeb?.message}</p>

  <IonButton type='submit'>Create!</IonButton>
  </form>
  </>;
}

export default NewGame;