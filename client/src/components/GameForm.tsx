import { IonButton, IonInput } from '@ionic/react';
import { useForm } from "react-hook-form";
import {
  useMutation,
  useQuery,
  useQueryClient
} from '@tanstack/react-query'

const GameForm =()=>{
  const queryClient = useQueryClient();
  
  const { register, handleSubmit,reset, formState:{errors} } = useForm({
    defaultValues:{
      roomCode:'1',
      username: "johndoe",
      celebName: "johndoe"
    }
  });
  
  const onSubmit = async (data: any) =>{
      const res = await mutation.mutateAsync(data);
      console.log(res);
      return res;
  };
  
  const mutation = useMutation({
  mutationFn: async (data: any)=>{

      const res = await fetch("http://localhost:3000/game",{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        'roomCode': data.roomCode,
        'username': data.username,
        'celebrity': data.celebName
      })
      });
      return res.json();
    },
  })

  // const [userName, setName] = useState('');
    // const [roomCode, setRoom] = useState('');
    return<>
    <form onSubmit={handleSubmit(onSubmit)}>
          <IonInput 
          label="Room Code:" 
          {...register("roomCode", {required: "Please enter a room code."})}
          type='number'
          fill='outline'
          />
          <p>{errors.roomCode?.message}</p>

          <IonInput 
          label="User:"
          {...register("username", {required: "Enter a user name."})}
          fill='outline'
          />
          <p>{errors.username?.message}</p>

          <IonInput 
          label="Celebrity Name:" 
          {...register("celebName", {required: "Please enter celebrity"})}
          fill='outline'
          />
          <p>{errors.celebName?.message}</p>
          <IonButton type="submit">Submit!</IonButton>
        </form>
    </>;
}

export default GameForm;