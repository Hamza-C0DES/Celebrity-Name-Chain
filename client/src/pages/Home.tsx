import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonInput,
  IonButton } from '@ionic/react';

import { useForm } from "react-hook-form";
//import GameForm from './components/GameForm';

//object for recording user input
// let user ={
//   username: "",
//   celebAnswer: "",
//   roomCode:""
// }

const Home: React.FC = () => {
  const { register, handleSubmit,reset, formState:{errors} } = useForm({
    defaultValues:{
      roomCode:'1',
      userName: "johndoe",
      celebName: "johndoe"
    }
  }
  );
  const onSubmit = (data: any) =>{
    console.log(data);
    reset({

    });
    return(data);
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Celebrity Name Chain</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonInput 
          label="Room Code" 
          {...register("roomCode", {required: "Please enter a room c"})}
          type='number'
          fill='outline'
          />
          <IonInput 
          label="User"
          {...register("userName", {required: true})}
          fill='outline'
          />
          <IonInput 
          label="Celebrity Name" 
          {...register("celebName", {required: true})}
          fill='outline'
          />
          <IonButton type="submit">Submit!</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Home;
