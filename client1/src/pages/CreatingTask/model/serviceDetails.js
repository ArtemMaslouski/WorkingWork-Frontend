import Animals from '../../../shared/assets/photo/TasksPhoto/Animals.jpg'
import BeautyandHelth from '../../../shared/assets/photo/TasksPhoto/BeautyandHelth.jpg'
import Build from '../../../shared/assets/photo/TasksPhoto/Build.jpg'
import CargoTeansportation from '../../../shared/assets/photo/TasksPhoto/CargoTeansportation.jpg'
import cloth from '../../../shared/assets/photo/TasksPhoto/cloth.jpg'
import ComputerHelp from '../../../shared/assets/photo/TasksPhoto/ComputerHelp.jpg'
import Courier from '../../../shared/assets/photo/TasksPhoto/Courier.jpg'
import DigitalEquipmentRepair from '../../../shared/assets/photo/TasksPhoto/DigitalEquipmentRepair.jpg'
import HelpAndCeaning from '../../../shared/assets/photo/TasksPhoto/HelpAndCeaning.jpg'
import InstallationAndRepair from '../../../shared/assets/photo/TasksPhoto/InstallationAndRepair.jpg'
import Party from '../../../shared/assets/photo/TasksPhoto/Party.jpg'
import PhotoVideoAudio from '../../../shared/assets/photo/TasksPhoto/PhotoVideoAudio.jpg'
import Programming from '../../../shared/assets/photo/TasksPhoto/Programming.jpg'
import realEstate from '../../../shared/assets/photo/TasksPhoto/realEstate.jpg'
import Rep from '../../../shared/assets/photo/TasksPhoto/Rep.jpg'
import Sport from '../../../shared/assets/photo/TasksPhoto/Sport.jpg'
import TransporRepair from '../../../shared/assets/photo/TasksPhoto/TransporRepair.jpg'
import VirtualHelp from '../../../shared/assets/photo/TasksPhoto/VirtualHelp.jpg'
import { GiScales } from 'react-icons/gi'

const serviceDetails = {
  "services.courier": {
      image: Courier,
      links: [
        { name: "services.subcategories.courier.pedestrian", path:"/OrderForm" },
        { name: "services.subcategories.courier.car", path:"/OrderForm" },
        { name: "services.subcategories.courier.buy", path:"/OrderForm" },
        { name: "services.subcategories.courier.urgent", path:"/OrderForm" },
        { name: "services.subcategories.courier.groceries", path:"/OrderForm" },
        { name: "services.subcategories.courier.food", path:"/OrderForm" },
        { name: "services.subcategories.courier.day", path:"/OrderForm" },
        { name: "services.subcategories.courier.other", path:"/OrderForm" },
      ],
    },

    "services.construction": {
      image: Build,
      links: [
        { name: "services.subcategories.construction.plumbing", path:"/OrderForm" },
        { name: "services.subcategories.construction.electrical", path:"/OrderForm" },
        { name: "services.subcategories.construction.doors", path:"/OrderForm" },
        { name: "services.subcategories.construction.roof", path:"/OrderForm" },
        { name: "services.subcategories.construction.major", path:"/OrderForm" },
        { name: "services.subcategories.construction.furniture", path:"/OrderForm" },
        { name: "services.subcategories.construction.finishing", path:"/OrderForm" },
        { name: "services.subcategories.construction.tiles", path:"/OrderForm" },
        { name: "services.subcategories.construction.floors", path:"/OrderForm" },
        { name: "services.subcategories.construction.security", path:"/OrderForm" },
        { name: "services.subcategories.construction.heating", path:"/OrderForm" },
        { name: "services.subcategories.construction.ceilings", path:"/OrderForm" },
        { name: "services.subcategories.construction.windows", path:"/OrderForm" },
        { name: "services.subcategories.construction.insulation", path:"/OrderForm" },
        { name: "services.subcategories.construction.locks", path:"/OrderForm" },
        { name: "services.subcategories.construction.other", path:"/OrderForm" },
      ],
    },

    "services.software": {
      image: Programming,
      links: [
        { name: "services.subcategories.software.website", path:"/OrderForm" },
        { name: "services.subcategories.software.mobile", path:"/OrderForm" },
        { name: "services.subcategories.software.programming", path:"/OrderForm" },
        { name: "services.subcategories.software.support", path:"/OrderForm" },
        { name: "services.subcategories.software.1c", path:"/OrderForm" },
        { name: "services.subcategories.software.landing", path:"/OrderForm" },
        { name: "services.subcategories.software.scripts", path:"/OrderForm" },
        { name: "services.subcategories.software.other", path:"/OrderForm" },
      ],
    },

    "services.cleaning": {
      image: HelpAndCeaning,
      links: [
        { name: "services.subcategories.cleaning.maintenance", path:"/OrderForm" },
        { name: "services.subcategories.cleaning.general", path:"/OrderForm" },
        { name: "services.subcategories.cleaning.windows", path:"/OrderForm" },
        { name: "services.subcategories.cleaning.garbage", path:"/OrderForm" },
        { name: "services.subcategories.cleaning.sewing", path:"/OrderForm" },
        { name: "services.subcategories.cleaning.cooking", path:"/OrderForm" },
        { name: "services.subcategories.cleaning.ironing", path:"/OrderForm" },
        { name: "services.subcategories.cleaning.drycleaning", path:"/OrderForm" },
        { name: "services.subcategories.cleaning.pets", path:"/OrderForm" },
        { name: "services.subcategories.cleaning.caregiver", path:"/OrderForm" },
        { name: "services.subcategories.cleaning.nanny", path:"/OrderForm" },
        { name: "services.subcategories.cleaning.sanitary", path:"/OrderForm" },
        { name: "services.subcategories.cleaning.garden", path:"/OrderForm" },
        { name: "services.subcategories.cleaning.other", path:"/OrderForm" },
      ],
    },

    "services.computerHelp": {
      image: ComputerHelp,
      links: [
        { name: "services.subcategories.computerHelp.repair", path:"/OrderForm" },
        { name: "services.subcategories.computerHelp.internet", path:"/OrderForm" },
        { name: "services.subcategories.computerHelp.office", path:"/OrderForm" },
        { name: "services.subcategories.computerHelp.os", path:"/OrderForm" },
        { name: "services.subcategories.computerHelp.data", path:"/OrderForm" },
        { name: "services.subcategories.computerHelp.consultation", path:"/OrderForm" },
        { name: "services.subcategories.computerHelp.viruses", path:"/OrderForm" },
        { name: "services.subcategories.computerHelp.components", path:"/OrderForm" },
        { name: "services.subcategories.computerHelp.other", path:"/OrderForm" },
      ],
    },

    "services.carRepair": {
      image: TransporRepair,
      links: [
        { name: "services.subcategories.carRepair.maintenance", path:"/OrderForm" },
        { name: "services.subcategories.carRepair.body", path:"/OrderForm" },
        { name: "services.subcategories.carRepair.tires", path:"/OrderForm" },
        { name: "services.subcategories.carRepair.engine", path:"/OrderForm" },
        { name: "services.subcategories.carRepair.electrical", path:"/OrderForm" },
        { name: "services.subcategories.carRepair.wash", path:"/OrderForm" },
        { name: "services.subcategories.carRepair.ac", path:"/OrderForm" },
        { name: "services.subcategories.carRepair.glass", path:"/OrderForm" },
        { name: "services.subcategories.carRepair.tuning", path:"/OrderForm" },
        { name: "services.subcategories.carRepair.other", path:"/OrderForm" },
      ],
    },

    "services.photoVideo": {
      image: PhotoVideoAudio,
      links: [
        { name: "services.subcategories.photoVideo.photography", path:"/OrderForm" },
        { name: "services.subcategories.photoVideo.editing", path:"/OrderForm" },
        { name: "services.subcategories.photoVideo.video", path:"/OrderForm" },
        { name: "services.subcategories.photoVideo.videography", path:"/OrderForm" },
        { name: "services.subcategories.photoVideo.fullvideo", path:"/OrderForm" },
        { name: "services.subcategories.photoVideo.digitization", path:"/OrderForm" },
        { name: "services.subcategories.photoVideo.audio", path:"/OrderForm" },
        { name: "services.subcategories.photoVideo.models", path:"/OrderForm" },
        { name: "services.subcategories.photoVideo.other", path:"/OrderForm" },
      ],
    },

    "services.teaching": {
      image: Rep,
      links: [
        { name: "services.subcategories.teaching.russian", path:"/OrderForm" },
        { name: "services.subcategories.teaching.german", path:"/OrderForm" },
        { name: "services.subcategories.teaching.math", path:"/OrderForm" },
        { name: "services.subcategories.teaching.geography", path:"/OrderForm" },
        { name: "services.subcategories.teaching.music", path:"/OrderForm" },
        { name: "services.subcategories.teaching.sport", path:"/OrderForm" },
        { name: "services.subcategories.teaching.english", path:"/OrderForm" },
        { name: "services.subcategories.teaching.spanish", path:"/OrderForm" },
        { name: "services.subcategories.teaching.biology", path:"/OrderForm" },
        { name: "services.subcategories.teaching.informatics", path:"/OrderForm" },
        { name: "services.subcategories.teaching.students", path:"/OrderForm" },
        { name: "services.subcategories.teaching.driving", path:"/OrderForm" },
        { name: "services.subcategories.teaching.french", path:"/OrderForm" },
        { name: "services.subcategories.teaching.other_languages", path:"/OrderForm" },
        { name: "services.subcategories.teaching.history", path:"/OrderForm" },
        { name: "services.subcategories.teaching.school", path:"/OrderForm" },
        { name: "services.subcategories.teaching.speech", path:"/OrderForm" },
        { name: "services.subcategories.teaching.junior", path:"/OrderForm" },
        { name: "services.subcategories.teaching.other", path:"/OrderForm" },
      ],
    },

    "services.design": {
      image: cloth,
      links: [
        { name: "services.subcategories.design.branding", path:"/OrderForm" },
        { name: "services.subcategories.design.web", path:"/OrderForm" },
        { name: "services.subcategories.design.infographics", path:"/OrderForm" },
        { name: "services.subcategories.design.clothing", path:"/OrderForm" },
        { name: "services.subcategories.design.print", path:"/OrderForm" },
        { name: "services.subcategories.design.social", path:"/OrderForm" },
        { name: "services.subcategories.design.outdoor", path:"/OrderForm" },
        { name: "services.subcategories.design.illustration", path:"/OrderForm" },
        { name: "services.subcategories.design.3d", path:"/OrderForm" },
        { name: "services.subcategories.design.architecture", path:"/OrderForm" },
        { name: "services.subcategories.design.other", path:"/OrderForm" },
      ],
    },

    "services.applianceRepair": {
      image: InstallationAndRepair,
      links: [
        { name: "services.subcategories.applianceRepair.fridge", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.stove", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.hood", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.sewing", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.coffee", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.health", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.washer", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.gas", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.climate", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.vacuum", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.microwave", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.garden", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.dishwasher", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.oven", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.water", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.iron", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.kitchen", path:"/OrderForm" },
        { name: "services.subcategories.applianceRepair.other", path:"/OrderForm" },
      ],
    },

    "services.virtualAssistant": {
      image: VirtualHelp,
      links: [
        { name: "services.subcategories.virtualAssistant.text", path:"/OrderForm" },
        { name: "services.subcategories.virtualAssistant.data", path:"/OrderForm" },
        { name: "services.subcategories.virtualAssistant.ads", path:"/OrderForm" },
        { name: "services.subcategories.virtualAssistant.calls", path:"/OrderForm" },
        { name: "services.subcategories.virtualAssistant.translation", path:"/OrderForm" },
        { name: "services.subcategories.virtualAssistant.presentation", path:"/OrderForm" },
        { name: "services.subcategories.virtualAssistant.smm", path:"/OrderForm" },
        { name: "services.subcategories.virtualAssistant.assistant", path:"/OrderForm" },
        { name: "services.subcategories.virtualAssistant.research", path:"/OrderForm" },
        { name: "services.subcategories.virtualAssistant.transcription", path:"/OrderForm" },
        { name: "services.subcategories.virtualAssistant.promotion", path:"/OrderForm" },
        { name: "services.subcategories.virtualAssistant.other", path:"/OrderForm" },
      ],
    },

    "services.events": {
      image: Party,
      links: [
        { name: "services.subcategories.events.help", path:"/OrderForm" },
        { name: "services.subcategories.events.worker", path:"/OrderForm" },
        { name: "services.subcategories.events.promo", path:"/OrderForm" },
        { name: "services.subcategories.events.distribution", path:"/OrderForm" },
        { name: "services.subcategories.events.promoter", path:"/OrderForm" },
        { name: "services.subcategories.events.merchandiser", path:"/OrderForm" },
        { name: "services.subcategories.events.mystery", path:"/OrderForm" },
        { name: "services.subcategories.events.host", path:"/OrderForm" },
        { name: "services.subcategories.events.packer", path:"/OrderForm" },
        { name: "services.subcategories.events.other", path:"/OrderForm" },
      ],
    },

    "services.beautyHealth": {
      image: BeautyandHelth,
      links: [
        { name: "services.subcategories.beautyHealth.tattoo", path:"/OrderForm" },
        { name: "services.subcategories.beautyHealth.stylist", path:"/OrderForm" },
        { name: "services.subcategories.beautyHealth.nurse", path:"/OrderForm" },
        { name: "services.subcategories.beautyHealth.hairdresser", path:"/OrderForm" },
        { name: "services.subcategories.beautyHealth.massage", path:"/OrderForm" },
        { name: "services.subcategories.beautyHealth.trainer", path:"/OrderForm" },
        { name: "services.subcategories.beautyHealth.nails", path:"/OrderForm" },
        { name: "services.subcategories.beautyHealth.psychologist", path:"/OrderForm" },
        { name: "services.subcategories.beautyHealth.sport", path:"/OrderForm" },
        { name: "services.subcategories.beautyHealth.other", path:"/OrderForm" },
      ],
    },

    "services.digitalEquipmentRepair": {
      image: DigitalEquipmentRepair,
      links: [
        { name: "services.subcategories.digitalEquipmentRepair.mobile", path:"/OrderForm" },
        { name: "services.subcategories.digitalEquipmentRepair.car", path:"/OrderForm" },
        { name: "services.subcategories.digitalEquipmentRepair.gaming", path:"/OrderForm" },
        { name: "services.subcategories.digitalEquipmentRepair.audio", path:"/OrderForm" },
        { name: "services.subcategories.digitalEquipmentRepair.photo", path:"/OrderForm" },
        { name: "services.subcategories.digitalEquipmentRepair.antenna", path:"/OrderForm" },
        { name: "services.subcategories.digitalEquipmentRepair.tv", path:"/OrderForm" },
        { name: "services.subcategories.digitalEquipmentRepair.watches", path:"/OrderForm" },
        { name: "services.subcategories.digitalEquipmentRepair.other", path:"/OrderForm" },
      ],
    },

    "services.cargoTeansportation": {
      image: CargoTeansportation,
      links: [
        { name: "services.subcategories.cargoTeansportation.moving", path:"/OrderForm" },
        { name: "services.subcategories.cargoTeansportation.garbage", path:"/OrderForm" },
        { name: "services.subcategories.cargoTeansportation.loaders", path:"/OrderForm" },
        { name: "services.subcategories.cargoTeansportation.other_cargo", path:"/OrderForm" },
        { name: "services.subcategories.cargoTeansportation.passenger", path:"/OrderForm" },
        { name: "services.subcategories.cargoTeansportation.tow", path:"/OrderForm" },
        { name: "services.subcategories.cargoTeansportation.food", path:"/OrderForm" },
        { name: "services.subcategories.cargoTeansportation.construction", path:"/OrderForm" },
        { name: "services.subcategories.cargoTeansportation.intercity", path:"/OrderForm" },
        { name: "services.subcategories.cargoTeansportation.manipulator", path:"/OrderForm" },
        { name: "services.subcategories.cargoTeansportation.other", path:"/OrderForm" },
      ],
    },

    "services.animals": {
      image: Animals,
      links: [
        { name: "services.subcategories.animals.grooming", path:"/OrderForm" },
        { name: "services.subcategories.animals.walking", path:"/OrderForm" },
        { name: "services.subcategories.animals.transport", path:"/OrderForm" },
        { name: "services.subcategories.animals.sitting", path:"/OrderForm" },
        { name: "services.subcategories.animals.care", path:"/OrderForm" },
        { name: "services.subcategories.animals.training", path:"/OrderForm" },
        { name: "services.subcategories.animals.vet", path:"/OrderForm" },
        { name: "services.subcategories.animals.aquarium", path:"/OrderForm" },
        { name: "services.subcategories.animals.rodents", path:"/OrderForm" },
        { name: "services.subcategories.animals.photo", path:"/OrderForm" },
        { name: "services.subcategories.animals.meetings", path:"/OrderForm" },
        { name: "services.subcategories.animals.other", path:"/OrderForm" },
      ],
    },

    "services.sport": {
      image: Sport,
      links: [
        { name: "services.subcategories.sport.fitness", path:"/OrderForm" },
        { name: "services.subcategories.sport.swimming", path:"/OrderForm" },
        { name: "services.subcategories.sport.boxing", path:"/OrderForm" },
        { name: "services.subcategories.sport.yoga", path:"/OrderForm" },
        { name: "services.subcategories.sport.crossfit", path:"/OrderForm" },
        { name: "services.subcategories.sport.dance", path:"/OrderForm" },
        { name: "services.subcategories.sport.kids", path:"/OrderForm" },
        { name: "services.subcategories.sport.nutrition", path:"/OrderForm" },
        { name: "services.subcategories.sport.diet", path:"/OrderForm" },
        { name: "services.subcategories.sport.cycling", path:"/OrderForm" },
        { name: "services.subcategories.sport.recovery", path:"/OrderForm" },
        { name: "services.subcategories.sport.tournaments", path:"/OrderForm" },
        { name: "services.subcategories.sport.games", path:"/OrderForm" },
        { name: "services.subcategories.sport.riding", path:"/OrderForm" },
        { name: "services.subcategories.sport.volleyball", path:"/OrderForm" },
        { name: "services.subcategories.sport.football", path:"/OrderForm" },
        { name: "services.subcategories.sport.tabletennis", path:"/OrderForm" },
        { name: "services.subcategories.sport.hockey", path:"/OrderForm" },
        { name: "services.subcategories.sport.other", path:"/OrderForm" },
      ],
    },

    "services.realEstate": {
      image: realEstate,
      links: [
        { name: "services.subcategories.realEstate.realtor", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.lawyer", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.investment", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.analysis", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.selection", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.valuation", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.expertise", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.preparation", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.photo", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.online", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.rent", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.moving", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.management", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.storage", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.seminars", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.land", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.repair", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.tax", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.financial", path:"/OrderForm" },
        { name: "services.subcategories.realEstate.other", path:"/OrderForm" },
      ],
    },

    "services.legal": {
      image: GiScales,
      links: [
        { name: "services.subcategories.legal.tax", path:"/OrderForm" },
        { name: "services.subcategories.legal.documents", path:"/OrderForm" },
        { name: "services.subcategories.legal.complaints", path:"/OrderForm" },
        { name: "services.subcategories.legal.personnel", path:"/OrderForm" },
        { name: "services.subcategories.legal.accounting", path:"/OrderForm" },
        { name: "services.subcategories.legal.lawyer", path:"/OrderForm" },
        { name: "services.subcategories.legal.contracts", path:"/OrderForm" },
        { name: "services.subcategories.legal.tenders", path:"/OrderForm" },
        { name: "services.subcategories.legal.notary", path:"/OrderForm" },
        { name: "services.subcategories.legal.registration", path:"/OrderForm" },
        { name: "services.subcategories.legal.support", path:"/OrderForm" },
        { name: "services.subcategories.legal.property", path:"/OrderForm" },
        { name: "services.subcategories.legal.other", path:"/OrderForm" },
      ],
    },
};

export default serviceDetails;