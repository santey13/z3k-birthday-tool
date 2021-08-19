import React, {useState} from 'react';

export const BirthdaysContext = React.createContext({
  birthdays: [],
  setBirthdays: () => {}
});

export const BirthdaysContextProvider = ({children}) => {
  const [birthdays, setBirthdays] = useState([]);
  return (<BirthdaysContext.Provider value={{birthdays, setBirthdays}}>{children}</BirthdaysContext.Provider>);
};
