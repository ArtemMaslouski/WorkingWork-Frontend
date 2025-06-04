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
  { key: "services.courier", icon: <IoIosCheckbox /> },
  { key: "services.construction", icon: <MdConstruction /> },
  { key: "services.software", icon: <MdDeveloperMode /> },
  { key: "services.cleaning", icon: <MdOutlineCleaningServices /> },
  { key: "services.computerHelp", icon: <MdOutlineComputer /> },
  { key: "services.carRepair", icon: <MdOutlineCarRepair /> },
  { key: "services.photoVideo", icon: <FaCamera /> },
  { key: "services.teaching", icon: <FaChalkboardTeacher /> },
  { key: "services.design", icon: <MdDesignServices /> },
  { key: "services.applianceRepair", icon: <PiWashingMachine /> },
  { key: "services.virtualAssistant", icon: <GrVirtualMachine /> },
  { key: "services.events", icon: <SlPresent /> },
  { key: "services.beautyHealth", icon: <BsScissors /> },
  { key: "services.digitalEquipmentRepair", icon: <LuMonitorSmartphone /> },
  { key: "services.cargoTeansportation", icon: <GiCargoCrate /> },
  { key: "services.animals", icon: <FaPaw /> },
  { key: "services.sport", icon: <MdOutlineSportsBasketball /> },
  { key: "services.realEstate", icon: <MdOutlineRealEstateAgent /> },
  { key: "services.legal", icon: <GiScales /> },
];

export default services;
