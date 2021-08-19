import './App.css';
import { Box, Container } from '@material-ui/core'
import { UploadBirthdays } from "../UploadBirthdays/UploadBirthdays";
import { useContext } from "react";
import { BirthdaysContext } from "../../Context/BirthdaysContext";
import { BirthdaysList } from "../BirthdaysList/BirthdaysList"

function App() {
  const { birthdays } = useContext(BirthdaysContext);
  const hasBirthdays = birthdays.length > 0;

  return (
      <Container className="App" maxWidth="lg">
        <Box marginTop={5}>
          {hasBirthdays ? <BirthdaysList birthdays={birthdays} /> : <UploadBirthdays />}

        </Box>
      </Container>
  );
}

export default App;
