import { IoHome, IoMap, IoLanguage, IoPin } from "react-icons/io5";

export const navigationMenu = [
    {
        id: 1,
        name: "Home",
        root: "/",
        icon: IoHome
    },
    {
        id: 2,
        name: "Find By Map",
        root: "/map",
        icon: IoMap
    },
    {
        id: 3,
        name: "Find By Language",
        root: "/languages",
        icon: IoLanguage
    },
    {
        id: 4,
        name: "Pins",
        root: "/pins",
        icon: IoPin
    },
]

const thisYear = new Date().getFullYear()
export const threeYears =[]
for(let i = 1; i <= 3; ++i){
    const year = thisYear - i
    threeYears.push(year)
}


const devYear = 2024