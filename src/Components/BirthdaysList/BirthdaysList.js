import { parseDate } from "../../Helpers/parseDate";
import { parseDepartment } from "../../Helpers/parseDepartment";
import { Grid } from "@material-ui/core"
import './BirthdaysList.css';

export const BirthdaysList = ({birthdays}) => {
  return (
      <Grid container={12} spacing={10} justifyContent="center" className="BirthdaysList">
        {
          birthdays
            .sort((a, b) => {
              return parseDate(a.birthdate).getDate() - parseDate(b.birthdate).getDate()
            })
            .map(({name, birthdate, orgUnit, parentOrgUnit, avatarUrl}) =>
              (
                <Grid item xs={3} key={name} className="BirthdaysListItem" justifyContent="center">
                  <img src={avatarUrl} title={name} alt={name} style={{ width: '100%', height: 'auto' }}/>
                  <div>
                    <strong>
                      {parseDate(birthdate).toLocaleString('default', { month: 'long' })}, {parseDate(birthdate).getDate()}
                    </strong>
                  </div>
                  <div>{name}</div>
                  <div>{parseDepartment(orgUnit, parentOrgUnit)}</div>
                </Grid>
              )
         )}
      </Grid>
  )
}
