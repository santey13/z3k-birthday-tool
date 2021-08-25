import { Box, Button } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import readXlsxFile from 'read-excel-file';
import { snakeToCamel } from "../../Helpers/snakeToCamel";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export const UploadBirthdays = ({setBirthdays}) => {
  const classes = useStyles();

  const handleFile = async (event) => {
    const data = await readXlsxFile(event.target.files[0]);

    const keys = data[0].map((key) => snakeToCamel(key.toLowerCase().replaceAll(' ', '_')));
    const birthdays = data.reduce((birthdays, user, index) => {
      if (index === 0) {
        return birthdays
      }
      const userInfo = user.reduce((userInfo, field, fieldIndex) => {
        userInfo[keys[fieldIndex]] = field;
        return userInfo;
      }, {})

      birthdays.push(userInfo)
      return birthdays
    }, []);

    setBirthdays(birthdays);
  };

  return (
    <Box component="div" m={1} className={classes.root} textAlign="center">
      <input
        accept=".xlsx"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleFile}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" startIcon={<CloudUploadIcon />}>
          Upload birthdays xls
        </Button>
      </label>
    </Box>
  );
}
