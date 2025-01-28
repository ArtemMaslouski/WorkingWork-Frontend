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
    { name: "Курьерские услуги", icon: <IoIosCheckbox/>, link: "/courier" },
    { name: "Ремонт и строительство", icon: <MdConstruction/>, link: "/construction" },
    { name: "Разработка ПО", icon: <MdDeveloperMode/>, link: "/develop" },
    { name: "Уборка и помощь по дому", icon: <MdOutlineCleaningServices/>, link: "/cleaning" },
    { name: "Компьютерная помощь", icon: <MdOutlineComputer/>, link: "/computer-help" },
    { name: "Ремонт транспорта", icon: <MdOutlineCarRepair/>, link: "/transport-repair" },
    { name: "Фото, видео, аудио", icon: <FaCamera/>, link: "/photo-video" },
    { name: "Репетиторы и обучение", icon: <FaChalkboardTeacher/>, link: "/tutoring" },
    { name: "Дизайн", icon: <MdDesignServices/>, link: "/design" },
    { name: "Установка и ремонт техники", icon: <PiWashingMachine/>, link: "/installation" },
    { name: "Виртуальный помощник", icon: <GrVirtualMachine/>, link: "/Virtual_assistant" },
    { name: "Мероприятия", icon: <SlPresent/>, link: "/events" },
    { name: "Красота и здоровье", icon: <BsScissors/>, link: "/beauty-health" },
    { name: "Ремонт цифровой техники", icon: <LuMonitorSmartphone/>, link: "/digital-repair" },
    { name: "Грузоперевозки", icon: <GiCargoCrate/>, link: "/freight" },
    { name: "Животные", icon: <FaPaw/>, link: "/animals" },
    { name: "Спорт", icon: <MdOutlineSportsBasketball/>, link: "/sports" },
    { name: "Недвижимость", icon: <MdOutlineRealEstateAgent/>, link: "/real-estate" },
    { name: "Юридические и бухгалтерские услуги", icon: <GiScales/>, link: "/legal" },
]

export default services