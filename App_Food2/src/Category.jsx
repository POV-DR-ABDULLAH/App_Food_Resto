import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { GiNoodles } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
export const Categories=[
    {
        id: 1,
        name: "semua",
        img: <TiThSmallOutline className="w-[60px] h-[60px] text-blue-300"/>
    },
    {
        id: 2,
        name: "sarapan",
        img: <MdFreeBreakfast className="w-[60px] h-[60px] text-blue-300"/>
    },
    {
        id: 3,
        name: "sup",
        img: <LuSoup className="w-[60px] h-[60px] text-blue-300"/>
    },
    {
        id: 4,
        name: "mie",
        img: <GiNoodles className="w-[60px] h-[60px] text-blue-300"/>
    },
    {
        id: 5,
        name: "menu_utama",
        img: <MdFoodBank className="w-[60px] h-[60px] text-blue-300"/>
    },
    {
        id: 6,
        name: "pitzza",
        img: <GiFullPizza className="w-[60px] h-[60px] text-blue-300"/>
    },
    {
        id: 7,
        name: "burger",
        img: <GiHamburger className="w-[60px] h-[60px] text-blue-300"/>
    }
]

export default Categories;