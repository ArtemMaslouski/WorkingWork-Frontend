import { IoIosCheckbox } from "react-icons/io";
import { MdConstruction } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { MdOutlineCarRepair } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { PiWashingMachine } from "react-icons/pi";
import { GrVirtualMachine } from "react-icons/gr";
import { SlPresent } from "react-icons/sl";
import { BsScissors } from "react-icons/bs";
import { LuMonitorSmartphone } from "react-icons/lu";
import { GiCargoCrate } from "react-icons/gi";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { GiScales } from "react-icons/gi";
import { FaPaw } from "react-icons/fa6";
import { MdOutlineSportsBasketball } from "react-icons/md";

const services =[
    { name: "Курьерские услуги", icon: <IoIosCheckbox/> },
    { name: "Ремонт и строительство", icon: <MdConstruction/> },
    { name: "Разработка ПО", icon: <MdDeveloperMode/>},
    { name: "Уборка и помощь по дому", icon: <MdOutlineCleaningServices/>},
    { name: "Компьютерная помощь", icon: <MdOutlineComputer/>},
    { name: "Ремонт транспорта", icon: <MdOutlineCarRepair/>},
    { name: "Фото, видео, аудио", icon: <FaCamera/> },
    { name: "Репетиторы и обучение", icon: <FaChalkboardTeacher/>},
    { name: "Дизайн", icon: <MdDesignServices/>},
    { name: "Установка и ремонт техники", icon: <PiWashingMachine/>},
    { name: "Виртуальный помощник", icon: <GrVirtualMachine/>},
    { name: "Мероприятия", icon: <SlPresent/>},
    { name: "Красота и здоровье", icon: <BsScissors/>},
    { name: "Ремонт цифровой техники", icon: <LuMonitorSmartphone/>},
    { name: "Грузоперевозки", icon: <GiCargoCrate/>},
    { name: "Животные", icon: <FaPaw/>},
    { name: "Спорт", icon: <MdOutlineSportsBasketball/>},
    { name: "Недвижимость", icon: <MdOutlineRealEstateAgent/>},
    { name: "Юридические и бухгалтерские услуги", icon: <GiScales/>},
]

export default services