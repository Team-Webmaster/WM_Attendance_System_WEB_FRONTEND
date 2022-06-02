import React from "react";
// import "./styles.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction'
// import timeGridPlugin from "@fullcalendar/timegrid";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

import events from "./events";

const clickDateHandler = (arg)=>{
  console.log(arg);
}

const Calendar = ()=>{
  return (
    <React.Fragment>
      <FullCalendar
        height="100vh"
        initialView="dayGridMonth"
        themeSystem="Simplex"
        headerToolbar={{
          left: "",
          center: "title",
          right: "prev,next",
        }}
        plugins={[dayGridPlugin, interactionPlugin]}
        events={events}
        displayEventEnd="true"
        eventColor="purple"
        dateClick={clickDateHandler}
        eventClick={clickDateHandler}
      />
    </React.Fragment>
  );
}

export default Calendar;
