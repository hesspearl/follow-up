import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export const defaultTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background:'rgb(255,255,255)',
    text:'rgb(0,0,0)',
  },
};

export const darkTheme = {
  dark: true,
  colors:{
    ...DarkTheme.colors,
    background:'rgb(0,0,0)',
    text:'rgb(255,255,255)',
  },
};
