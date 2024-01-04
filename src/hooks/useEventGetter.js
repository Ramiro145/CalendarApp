import { useAuthStore } from "./useAuthStore"


export const useEventGetter = () =>{

  const {user} = useAuthStore()

  const eventStyleGetter = (event) =>{
    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid);

    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }

    return {
      style
    }
  }

  
    return{
      eventStyleGetter
    }
  }

  