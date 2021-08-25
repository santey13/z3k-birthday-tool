import './App.css';
import { Box, Container } from '@material-ui/core'
import { UploadBirthdays } from "../UploadBirthdays/UploadBirthdays";
import { useState } from "react"
import { BirthdaysList } from "../BirthdaysList/BirthdaysList"

function App() {
  const [birthdays, setBirthdays] = useState([]);
  const hasBirthdays = birthdays.length > 0;

  return (
      <Container className="App" maxWidth="lg">
        <Box marginTop={5}>
          {hasBirthdays ? <BirthdaysList birthdays={birthdays} /> : <UploadBirthdays setBirthdays={setBirthdays}/>}
        </Box>
      </Container>
  );
}

export default App;
