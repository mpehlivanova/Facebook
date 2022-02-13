// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DatePicker from "@mui/lab/DatePicker";
// import Stack from "@mui/material/Stack";
// // date-fns



// export default function ViewsDatePicker() {
//   const [value, setValue] = React.useState(new Date());

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Stack spacing={3}>
//         <DatePicker
//           openTo="year"
//           views={["year", "month", "day"]}
//           label="Year, month and date"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} helperText={null} />}
//         />
        
//       </Stack>
//     </LocalizationProvider>
//   );
// }
