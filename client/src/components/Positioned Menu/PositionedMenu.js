// import React, { useState } from "react";
// import "./PositionedMenu.css";
// import { AppBar, Tabs, Toolbar, useMediaQuery } from "@mui/material";
// import { ThemeProvider } from "@mui/material/styles";
// import { theme } from "../Navbar";
// import { CustomTab } from "../Navbar";

// export default function PositionedMenu({ isActive, props }) {
//   const label = [{ label: "Episode Archive" }, { label: "Recent Episodes" }];
//   //active nav underline effect values
//   const [value, setValue] = useState();
//   //media query
//   const matches = useMediaQuery(theme.breakpoints.down("md"));
//   console.log(matches);
//   //change nav color when scrolling
//   const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 90) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   window.addEventListener("scroll", changeColor);

//   return (
//     <ThemeProvider theme={theme}>
//       <React.Fragment>
//         {matches ? (
//           <>{null}</>
//         ) : (
//           <>
//             <AppBar
//               component="div"
//               color="primary"
//               id="positioned-menu"
//               className={isActive ? "showing" : ""}
//               sx={{
//                 marginBottom: "1px",
//                 padding: "0rem 0 0rem 0",
//                 boxShadow: "none",
//                 zIndex: "100",
//               }}
//             >
//               <Toolbar>
//                 <Tabs
//                   sx={{
//                     mr: "auto",
//                     display: "flex",
//                     justifyContent: "center",
//                   }}
//                   value={value}
//                   onChange={(e, value) => setValue(value)}
//                   indicatorColor="secondary"
//                   textColor="secondary"
//                 >
//                   {label.map((label, index) => (
//                     <CustomTab
//                       sx={{
//                         fontSize: "0.8rem",
//                         padding: "0 2rem 0 2rem",
//                         fontWeight: 800,
//                         color: "#F3FAFF",
//                       }}
//                       key={index}
//                       label={label.label}
//                       to="/"
//                     />
//                   ))}
//                 </Tabs>
//               </Toolbar>
//             </AppBar>
//           </>
//         )}
//       </React.Fragment>
//     </ThemeProvider>
//   );
// }
