import React from 'react'
import { useSelector } from 'react-redux';
import { useCalendarInStore } from '../../hooks'

export const FabDelete = () => {
    const {activeEvent} = useCalendarInStore();
    const{StartDeletingEvent, hasEventSelected}=useCalendarInStore();

    const {isDateModalOpen} = useSelector(state=> state.ui)
    
    const handleDelete= () =>{
      StartDeletingEvent(activeEvent);
    }
  return (
    <button
    className='btn btn-danger fab-danger'
    onClick={handleDelete}
    style={{
      display: hasEventSelected && isDateModalOpen === false ? '' :'none'
    }}
    >
        <i className='fas fa-trash-alt'>

        </i>
    </button>
  )
}
