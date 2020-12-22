import React from "react"
import Fontisto from "react-native-vector-icons/Fontisto";
 import AntDesign from "react-native-vector-icons/AntDesign"
 import FontAwesome from "react-native-vector-icons/FontAwesome"
 import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export const icons=[
  {
    title:"monthly" ,
    icon: <FontAwesome5 name="calendar-alt" size={45} color="black" /> ,
    color:"blue"

  },
   {
     title:"importance",
     icon:<FontAwesome name="exclamation" size={45} color="black" />,
     color:"white"
   },
  {
    title:"necessary",
    icon:<AntDesign name="pushpin" size={45} color="black" />,
    color:"white"
  },
  {
    title:"price",
    icon:<Fontisto name="wallet" size={45} color="black" />,
    color:"white"
  }
]

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const position = [
  0,
  0,
  110.18181610107422,
  226.5454559326172 ,
  347.2727355957031,
  466.5454406738281,
  583.6363525390625,
  682.1818237304688,
  818.5454711914062,
  934.5454711914062,
  1047.272705078125,
  1047.272705078125,
];

export const important = ["high", " average","low"];
export const necessary = ["yes", "maybe"," no"];
export const price = ["Highest to Lowest", "Lowest to highest "];



export const list = [
  {
    label: "beauty",
    value: "beauty",
    avatar:
      "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/d851018c9eb1ef46ea5b96b72500b553/beauty.PNG",
  },
  {
    label: "clothes",
    value: "clothes",
    avatar:
      "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/cbf4201711d43f539d2329690f6dfc64/clothes.PNG",
  },
  {
    label: "food",
    value: "food",
    avatar:
      "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/3795d64d953a7fd614799f0c005ffa38/food.PNG",
  },
  {
    label: "health",
    value: "health",
    avatar:
      "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/853a0dbcd16955f700ff8000814e65fc/health.PNG",
  },
  {
    label: "pets",
    value: "pets",
    avatar:
      "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/6424fdb7ce7859c6d6db5d2343ca737f/pet.png",
  },
  {
    label: "games",
    value: "games",
    avatar:
      "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/c5100bdd6697525011a02e8cd6a6766f/game.PNG",
  },
  {
    label: "essentials",
    value: "essentials",
    avatar:
      "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/413fe0062708bdd3cec55a6dd053e43a/alimentation_-_supermarket.PNG",
  },
  {
    label: "education",
    value: "education",
    avatar:
      "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/2a3f1df4d53ac9c7950eb3d23434a2f7/Education.PNG",
  },
  {
    label: "others",
    value: "others",
    avatar:
      "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/f82234345b15940f97eebef361f10dc1/others.PNG",
  },
];
