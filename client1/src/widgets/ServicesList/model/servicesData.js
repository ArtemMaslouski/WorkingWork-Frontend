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

const services = [
  { name: "Курьерские услуги", key: "services.courier", icon: <IoIosCheckbox /> },
  { name: "Ремонт и строительство", key: "services.construction", icon: <MdConstruction /> },
  { name: "Разработка ПО", key: "services.software", icon: <MdDeveloperMode /> },
  { name: "Уборка и помощь по дому", key: "services.cleaning", icon: <MdOutlineCleaningServices /> },
  { name: "Компьютерная помощь", key: "services.computerHelp", icon: <MdOutlineComputer /> },
  { name: "Ремонт транспорта", key: "services.carRepair", icon: <MdOutlineCarRepair /> },
  { name: "Фото, видео, аудио", key: "services.photoVideo", icon: <FaCamera /> },
  { name: "Репетиторы и обучение", key: "services.teaching", icon: <FaChalkboardTeacher /> },
  { name: "Дизайн", key: "services.design", icon: <MdDesignServices /> },
  { name: "Установка и ремонт техники", key: "services.applianceRepair", icon: <PiWashingMachine /> },
  { name: "Виртуальная помощь", key: "services.virtualAssistant", icon: <GrVirtualMachine /> },
  { name: "Организация праздников", key: "services.events", icon: <SlPresent /> },
  { name: "Красота и здоровье", key: "services.beautyHealth", icon: <BsScissors /> },
  { name: "Ремонт цифровой техники", key: "services.digitalRepair", icon: <LuMonitorSmartphone /> },
  { name: "Грузоперевозки", key: "services.cargo", icon: <GiCargoCrate /> },
  { name: "Уход за животными", key: "services.pets", icon: <FaPaw /> },
  { name: "Спорт", key: "services.sports", icon: <MdOutlineSportsBasketball /> },
  { name: "Недвижимость", key: "services.realEstate", icon: <MdOutlineRealEstateAgent /> },
  { name: "Юридические и бухгалтерские услуги", key: "services.legalAccounting", icon: <GiScales /> },
];

export default services;
