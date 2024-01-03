import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarInStore = () => {
    const {events, activeEvent} = useSelector((state)=> state.calendar)
    const {user} = useSelector(state=> state.auth)
    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) =>{
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent) =>{
        //todo update event
        try {
            if(calendarEvent.id){
                const {data} = await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent)
                dispatch(onUpdateEvent({...calendarEvent, user}))
                return;
            }
            const {data} = await calendarApi.post('/events',calendarEvent);
             dispatch(onAddNewEvent({...calendarEvent, id:data.evento.id, user}));
        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }

        
        
    }

    const StartDeletingEvent = () =>{


        dispatch(onDeleteEvent());
    }

    const startLoadingEvents = async() =>{
        try {
            
            const {data} = await calendarApi.get('/events');
            const events = convertEventsToDateEvents(data.eventos);
            dispatch(onLoadEvents(events))

        } catch (error) {
            console.log('Error cargando eventos')
            console.log(error)
        }
    }
    return{
        events,
        activeEvent,
        hasEventSelected:!!activeEvent,

        setActiveEvent,
        startSavingEvent,
        StartDeletingEvent,
        startLoadingEvents
    }
}