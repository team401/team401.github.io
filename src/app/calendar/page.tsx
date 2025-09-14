"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { EventClickArg } from "@fullcalendar/core/index.js";
import { EventImpl } from "@fullcalendar/core/internal";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
} from "@mui/material";
import React, { useMemo } from "react";
import moment from "moment";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./bootstrap.min.css";
import Page from "../components/Page";

export default function Calendar() {
  const [selectedEvent, setSelectedEvent] = React.useState<EventImpl | null>(
    null
  );
  const [open, setOpen] = React.useState(false);

  const handleOpen = (info: EventClickArg) => {
    info.jsEvent.preventDefault();
    setSelectedEvent(info.event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  const plugins = useMemo(
    () => [
      dayGridPlugin,
      timeGridPlugin,
      interactionPlugin,
      googleCalendarPlugin,
      bootstrap5Plugin,
    ],
    []
  );

  const eventSources = useMemo(
    () => [
      {
        googleCalendarId:
          "nnjousubqta8t6i1cgggohrkmo@group.calendar.google.com",
      },
    ],
    []
  );

  return (
    <Page>
      <Box
        sx={{
          backgroundColor: "white",
          p: 2,
          m: 0,
        }}
      >
        <FullCalendar
          plugins={plugins}
          themeSystem="bootstrap5"
          height={"calc(95vh - 103px - 64px)"}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          googleCalendarApiKey={process.env.NEXT_PUBLIC_CALENDAR_KEY}
          eventSources={eventSources}
          eventClick={handleOpen}
          eventBackgroundColor="#861f41"
          eventDisplay="block"
        />
      </Box>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{selectedEvent?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {moment(selectedEvent?.startStr).format("LL")}
          </DialogContentText>
          <DialogContentText>
            {moment(selectedEvent?.startStr).format("LT")} -{" "}
            {moment(selectedEvent?.endStr).format("LT")}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            component="a"
            variant="contained"
            href={selectedEvent?.url}
            target="_blank"
          >
            Event Link
          </Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
}
