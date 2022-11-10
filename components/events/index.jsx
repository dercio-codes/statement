import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";
import { Box, Grid, Button, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import { EventModal } from "./event-modal";
import { TableBookings } from "./table-bookings";
import Link from "next/link";

export const Events = (props) => {
  const { artist, text } = props;
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(max-width:900px)");
  const [openTableBooking, setOpenTableBooking] = useState(false);
  const [openEvent, setopenEvent] = useState("");

  const events = [
    {
      title:"X-Fest",
      img:"x.jpg"
    }
  ]

  const handleEventClick = (item) => {
    setOpen(true);
    setopenEvent(item);
  };

  const handleTableBookingClick = (item) => {
    setOpenTableBooking(true);
    setopenEvent(item);
  };

  return (
    <Box
      id="events"
      sx={{
        padding: { lg: artist ? "0" : "105px 0" },
        height: { xs: "fit-content" , md:'100vh' },
        background: artist ? "" : "#111",
        width: "100%",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            padding: { xs: "12px 8px" },
            textAlign: { xs: "center" },
            margin: { xs: "12px 0", md: "32px 0" },
          }}
        >
          <Typography
            variant="h4"
            width={"100%"}
            color={"#eee"}
            // sx={{ fontSize: { xs: "32px", md: "40px" } }}
            fontWeight={"600"}
          >
            {text}{" "}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            marginBottom: "54px",
            alignItems: "center",
            background: "",
            padding: { xs: "0 12px", md: "0 48px" },
          }}
        >
          <Box sx={{ display:'flex' , alignItems:'center' , width:'100%' }}
          >
            {events.map((item, index) => {
              return (
                <Box sx={{ margin:'0 auto' , display:'flex' , alignItems:'center' , flexDirection:'column' }} data-zoomable key={index}>
                  <Typography sx={{ textAlign:'center',fontWeight:600 ,color:'#eee' , fontSize:'32px' , margin:'21px 0'  }}>{item.title}</Typography>
                  <Box
                    onClick={() => handleEventClick(item)}
                    sx={{
                      height: { xs: "350px", md: "300px" },
                      cursor:'pointer',
                      width: { xs: "100%", md: "300px" },
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${item.img})`,
                    }}
                  />
                  <Typography
                    fontWeight={"500"}
                    fontSize={"12px"}
                    sx={{ margin: "8px 0" }}
                    color={"#eee"}
                  >
                    Click to zoom
                  </Typography>
                  {artist ? (
                    <></>
                  ) : (
                    <>
                      <Button
                        sx={{
                          width: { xs: "100%", md: "300px" },
                          fontWeight: "500",
                          fontSize: { xs: "16px", sm: "16px" },
                          padding: { xs: "12px 0", md: "16px 0" },
                          margin: "18px auto",
                          background: "#eee",
                          color: "#111",
                          "&:hover": { color: "#eee" },
                        }}
                        onClick={() => handleTableBookingClick(item)}
                      >
                        Book Table
                      </Button>

                      <Link href="https://www.howler.co.za/events/x-fest-c86d/tickets" legacyBehavior>
                        <a style={{width:'100%' , margin:'0 auto' , display:'flex' , alignItems:'center'}} >
                          <Button
                            sx={{
                              width: { xs: "100%", md: "300px" },
                              fontWeight: "500",
                              fontSize: { xs: "16px", sm: "16px" },
                              padding: { xs: "12px 0", md: "16px 0" },
                              margin: "18px auto",
                              background: "#eee",
                              color: "#111",
                              "&:hover": { color: "#eee" },
                            }}
                          >
                            Buy Tickets
                          </Button>
                        </a>
                      </Link>
                    </>
                  )}
                </Box>
              );
            })}
          </Box>
          <EventModal openEvent={openEvent} state={{ open, setOpen }} />
          <TableBookings
            openEvent={openEvent}
            state={{ openTableBooking, setOpenTableBooking }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
