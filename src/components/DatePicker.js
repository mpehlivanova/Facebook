import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialDatePicker() {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Date picker inline"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );

}





















// export default function ViewsDatePicker() {
//     // const [value, setValue] = React.useState(new Date());
//     // const [selectedDate, handleDateChange] = useState(new Date());
    
//     return (
//       <>
//         <DateOfBirthPicker
//           // className={classes.formInput}
//           label="Date of birth"
//           onChange={(date) => {
//             // eslint-disable-next-line no-undef
//             setDateOfBirth(date);
//           }}
//           // disabled={!editMode}
//           // value={dateOfBirth}
//         ></DateOfBirthPicker>

//         {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
//           {/* <DatePicker value={selectedDate} onChange={handleDateChange} /> */}
//         {/* <Calendar date={selectedDate} /> */}
//         {/* </MuiPickersUtilsProvider>  */}
//       </>
//     );
// }

  

  // <LocalizationProvider dateAdapter={AdapterDateFns}>
  //   <Stack spacing={3}>
  //     <DatePicker
  //       openTo="year"
  //       views={["year", "month", "day"]}
  //       label="Year, month and date"
  //       value={value}
  //       onChange={(newValue) => {
  //         setValue(newValue);
  //       }}
  //       renderInput={(params) => <TextField {...params} helperText={null} />}
  //     />

  //   </Stack>
  // </LocalizationProvider>
  // );
// }
