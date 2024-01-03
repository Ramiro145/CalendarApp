import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../'
import { addHours } from 'date-fns'
import { localizer, getMessagesES} from '../../helpers/'
import { useEventGetter, useUiStore, useCalendarInStore } from '../../hooks/'
import { useEffect, useState } from 'react'








export const CalendarPage = () => {
  const {openDateModal} = useUiStore();
  const {events, setActiveEvent, startLoadingEvents} = useCalendarInStore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView')||'week');

  const {eventStyleGetter} = useEventGetter()

  const onDoubleClick = () =>{
    openDateModal();
  }
  const onSelect = (event) =>{
    setActiveEvent(event);
  }
  const onViewChanged = (event) =>{
    localStorage.setItem('lastView', event)
    setLastView(event)
  }

  useEffect(() => {
    startLoadingEvents()
  }, [])
  

  return (
    <>
      <Navbar/>
      <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      defaultView={lastView}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
      messages={getMessagesES()}
      eventPropGetter = {eventStyleGetter}
      components = {{
        event: CalendarEvent
      }}
      onDoubleClickEvent={onDoubleClick}
      onSelectEvent={onSelect}
      onView={onViewChanged}
    />
    <CalendarModal/>
    <FabAddNew/>
    <FabDelete/>
    </>
  )
}
