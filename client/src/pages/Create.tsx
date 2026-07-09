import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar
} from '@ionic/react';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import NewGame from '../components/NewGame';

const Create: React.FC = ()=>{
  const queryClient = new QueryClient()

  return(
  <QueryClientProvider client={queryClient}>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Make a New Game!</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <NewGame/>
    </IonContent>
  </IonPage>
  </QueryClientProvider>
  );
};

export default Create;