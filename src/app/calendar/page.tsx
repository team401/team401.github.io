"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";

import "./bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Page from "../components/Page";
import { Box } from "@mui/material";

export default function Calendar() {
  return (
    <Page>
      <Box sx={{ backgroundColor: "white", p: 2 }}>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            googleCalendarPlugin,
            bootstrap5Plugin,
          ]}
          themeSystem="bootstrap5"
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          googleCalendarApiKey={process.env.NEXT_PUBLIC_CALENDAR_KEY}
          events={{
            googleCalendarId:
              "nnjousubqta8t6i1cgggohrkmo@group.calendar.google.com",
          }}
        />
      </Box>
    </Page>
  );
}
