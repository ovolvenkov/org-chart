import React from 'react';
import {ThemeProvider} from "styled-components";

const Theme = (props: {isBlackTheme: boolean, children: React.ReactNode}) => {
  const { children, isBlackTheme } = props;

  const theme = {
    colors: {
      mainColor: isBlackTheme ? "#212121" : "#f5f5f5",
      fontColor: isBlackTheme ? "#e6e6e6 !important" : "#000 !important",
      blackSecondColor: isBlackTheme  && '#414141 !important',
      blackThirdColor: isBlackTheme  && '#212121 !important',
      silverColor: isBlackTheme && '#e6e6e6',
      silverColor2: isBlackTheme && '#898989',
      silverColor3: isBlackTheme && '#0f1619',
      silverColor4: isBlackTheme && '#cac9ca',
      silverColor5: isBlackTheme && '#A0A0A0',
    }
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

export default Theme;