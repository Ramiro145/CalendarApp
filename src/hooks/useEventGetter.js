export const useEventGetter = (event, start, end, isSelected) =>{

  const eventStyleGetter = () =>{

    const style = {
      backgroundColor: '#347CF7',
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