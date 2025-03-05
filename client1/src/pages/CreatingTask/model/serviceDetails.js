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

const serviceDetails = {
  "Курьерские услуги": {
      image: Courier,
      links: [
        { name: "Услуги пешшего курьера", path:"/OrderForm" },
        { name: "Услуги курьера на легковом авто", path:"/OrderForm" },
        { name: "Купить и доставить", path:"/OrderForm" },
        { name: "Срочная доставка", path:"/OrderForm" },
        { name: "Доставка продуктов", path:"/OrderForm" },
        { name: "Доставка еды и ресторанов", path:"/OrderForm" },
        { name: "Курьер на день", path:"/OrderForm" },
        { name: "Что-то другое", path:"/OrderForm" },
      ],
    },

    "Ремонт и строительство": {
      image: Build,
      links: [
        { name: "Сантехнические работы", path:"/OrderForm" },
        { name: "Электромонтажные работы", path:"/OrderForm" },
        { name: "Установка и ремонт дверей, замков" , path:"/OrderForm"},
        { name: "Кровельные и фасадные работы", path:"/OrderForm" },
        { name: "Крупное строительство", path:"/OrderForm" },
        { name: "Сборка и ремонт мебели", path:"/OrderForm" },
        { name: "Отделочные работы", path:"/OrderForm" },
        { name: "Плиточные работы", path:"/OrderForm" },
        { name: "Полы", path:"/OrderForm" },
        { name: "Охранные системы" , path:"/OrderForm"},
        { name: "Отопление, водоснабжение, конализация", path:"/OrderForm" },
        { name: "Потолки" , path:"/OrderForm"},
        { name: "Окна, стекление, балконы" , path:"/OrderForm"},
        { name: "Изоляционные работы", path:"/OrderForm" },
        { name: "Вскрытие замков", path:"/OrderForm" },
        { name: "Что-то другое" , path:"/OrderForm"},
      ],
    },

    "Разработка ПО": {
      image: Programming,
      links: [
        { name: "Сайт под ключ", path:"/OrderForm" },
        { name: "Разработка мобильных приложений", path:"/OrderForm" },
        { name: "Программирование", path:"/OrderForm" },
        { name: "Доработка и поддержка сайта" , path:"/OrderForm"},
        { name: "Доработка и настройка 1C", path:"/OrderForm" },
        { name: "Создание лендингов", path:"/OrderForm" },
        { name: "Сайт под ключ", path:"/OrderForm" },
        { name: "Скрипты и боты", path:"/OrderForm" },
        { name: "Что-то другое" , path:"/OrderForm"},

      ],
    },

    "Уборка и помощь по дому": {
      image: HelpAndCeaning,
      links: [
        { name: "Поддерживающая уборка", path:"/OrderForm" },
        { name: "Генеральная уборка" , path:"/OrderForm"},
        { name: "Мытье окон", path:"/OrderForm" },
        { name: "ВВынос мусора" , path:"/OrderForm"},
        { name: "Помощь швеи" , path:"/OrderForm"},
        { name: "Приготовление еды" , path:"/OrderForm"},
        { name: "Глажение белья", path:"/OrderForm" },
        { name: "Химчистка" , path:"/OrderForm"},
        { name: "Уход за животными", path:"/OrderForm" },
        { name: "Сиделки" , path:"/OrderForm"},
        { name: "Няни" , path:"/OrderForm"},
        { name: "Санитарные работы" , path:"/OrderForm"},
        { name: "Работы в саду, участке", path:"/OrderForm" },
        { name: "Что-то другое" , path:"/OrderForm"},
      ],
    },

    "Компьютерная помощь": {
      image: ComputerHelp,
      links: [
        { name: "Ремонт компьютерная помощь", path:"/OrderForm" },
        { name: "Настройка интернета и WI-FI" , path:"/OrderForm"},
        { name: "Настройка и ремонт оргтехники" , path:"/OrderForm"},
        { name: "Установка и настройка операцю систем, программ", path:"/OrderForm" },
        { name: "Восттановление данных" , path:"/OrderForm"},
        { name: "Консультация и обучение" , path:"/OrderForm"},
        { name: "Удаление вирусов" , path:"/OrderForm"},
        { name: "Ремонт и замена комплектующих" , path:"/OrderForm"},
        { name: "Что-то другое", path:"/OrderForm" },
      ],
    },

    "Ремонт транспорта": {
      image: TransporRepair,
      links: [
        { name: "Техническое обслуживание авто", path:"/OrderForm" },
        { name: "Кузовной ремонт", path:"/OrderForm" },
        { name: "Шиномонтаж", path:"/OrderForm" },
        { name: "Диагностика и ремонт двгателя, КПП ", path:"/OrderForm" },
        { name: "Автоэлектрика" , path:"/OrderForm"},
        { name: "Мойка и химчистка", path:"/OrderForm" },
        { name: "Обслуживание системы кондиционировани", path:"/OrderForm" },
        { name: "Автостекла и тонировка", path:"/OrderForm" },
        { name: "Тюнинг (внешний и внутренний)", path:"/OrderForm" },
        { name: "Что-то другое", path:"/OrderForm" },
      ],
    },

    "Фото, видео, аудио": {
      image: PhotoVideoAudio,
      links: [
        { name: "Фотосъемка" , path:"/OrderForm"},
        { name: "Обработка фотографий", path:"/OrderForm" },
        { name: "Монтаж и цветокоррекция" , path:"/OrderForm"},
        { name: "Видеосъемка" , path:"/OrderForm"},
        { name: "Создание видео под ключ" , path:"/OrderForm"},
        { name: "Оцифровка" , path:"/OrderForm"},
        { name: "Запись аудио" , path:"/OrderForm"},
        { name: "Модели для съемок" , path:"/OrderForm"},
        { name: "Что-то другое" , path:"/OrderForm"},
      ],
    },

    "Репетиторы и обучение": {
      image: Rep,
      links: [
        { name: "Русский язык и литература", path:"/OrderForm" },
        { name: "Немецкий язык", path:"/OrderForm" },
        { name: "Математика и физика", path:"/OrderForm" },
        { name: "География и экономика", path:"/OrderForm" },
        { name: "Музыка, танцы, арт" , path:"/OrderForm"},
        { name: "Спорт" , path:"/OrderForm"},
        { name: "Английский язык" , path:"/OrderForm"},
        { name: "Испанский язык" , path:"/OrderForm"},
        { name: "Биология и химия", path:"/OrderForm" },
        { name: "Информатика и программировнаие", path:"/OrderForm" },
        { name: "Помощь студентам" , path:"/OrderForm"},
        { name: "Автоинструкторы", path:"/OrderForm" },
        { name: "Французский язык" , path:"/OrderForm"},
        { name: "Другие иностранные языки" , path:"/OrderForm"},
        { name: "История и обществознание", path:"/OrderForm" },
        { name: "Подготовка к школе", path:"/OrderForm" },
        { name: "Логопеды" , path:"/OrderForm"},
        { name: "Помощь младшие классы", path:"/OrderForm" },
        { name: "Что-то другое" , path:"/OrderForm"},
      ],
    },

    "Дизайн": {
      image: cloth,
      links: [
        { name: "Фирменный стиль, логотипы, визитки", path:"/OrderForm" },
        { name: "Дизайн сайтов и приложений", path:"/OrderForm" },
        { name: "Инографика, презентация, иконки", path:"/OrderForm" },
        { name: "Дизайн одежды", path:"/OrderForm" },
        { name: "Полиграфический дизайн" , path:"/OrderForm"},
        { name: "Интернет-баннеры, оформление соц. сетей", path:"/OrderForm" },
        { name: "Наружная реклама, стенды", path:"/OrderForm" },
        { name: "Иллюстрации, живопись, граффити", path:"/OrderForm" },
        { name: "3-d - графика, анимация", path:"/OrderForm" },
        { name: "Архитектура, интервью, ландшафт", path:"/OrderForm" },
        { name: "Чтото другое" , path:"/OrderForm"},
      ],
    },

    "Установка и ремонт техники": {
      image: InstallationAndRepair,
      links: [
        { name: "Холодильники и морозильные камеры", path:"/OrderForm" },
        { name: "Электрические плиты и пнели" , path:"/OrderForm"},
        { name: "Вытяжки" , path:"/OrderForm"},
        { name: "Швейные машины" , path:"/OrderForm"},
        { name: "Кофемашины", path:"/OrderForm" },
        { name: "Уход за телом и здоровьем", path:"/OrderForm" },
        { name: "Стиральные и сушильные машины", path:"/OrderForm" },
        { name: "Газовые плиты" , path:"/OrderForm"},
        { name: "Климатическая техника" , path:"/OrderForm"},
        { name: "Пылесосы и очистители" , path:"/OrderForm"},
        { name: "СВЧ печи", path:"/OrderForm" },
        { name: "Строительная и садовая техника", path:"/OrderForm" },
        { name: "Посудомоечные машины", path:"/OrderForm" },
        { name: "Духовые шкафы" , path:"/OrderForm"},
        { name: "Водонагреватели, бойлеры, котлы, колонки", path:"/OrderForm" },
        { name: "Утюги и уход за одеждой" , path:"/OrderForm"},
        { name: "Мелкая кухонная техника", path:"/OrderForm" },
        { name: "Что-то другое" , path:"/OrderForm"},
      ],
    },
    
    "Виртуальный помощник": {
      image: VirtualHelp,
      links: [
        { name: "Работа с текстом", path:"/OrderForm" },
        { name: "Работа с числовыми данными", path:"/OrderForm" },
        { name: "Размещение на рекламных площадок", path:"/OrderForm" },
        { name: "Обзвон по базе", path:"/OrderForm" },
        { name: "Услуги переводчика" , path:"/OrderForm"},
        { name: "Подготовка презентаций" , path:"/OrderForm"},
        { name: "Помощь SMM-специалиста", path:"/OrderForm" },
        { name: "Услуги личного помощника", path:"/OrderForm" },
        { name: "Поиск и обработка информации" , path:"/OrderForm"},
        { name: "Расшифровка аудио- и видеозаписей", path:"/OrderForm" },
        { name: "Реклама и продвижение", path:"/OrderForm" },
        { name: "Что-то другое" , path:"/OrderForm"},
      ],
    },

    "Мероприятия": {
      image: Party,
      links: [
        { name: "Помощь в проведении мероприятий" , path:"/OrderForm"},
        { name: "Разнорабочий" , path:"/OrderForm"},
        { name: "Промо-модель" , path:"/OrderForm"},
        { name: "Раздача промо-материалов", path:"/OrderForm" },
        { name: "Промоутер", path:"/OrderForm" },
        { name: "Мерчандайзеры" , path:"/OrderForm"},
        { name: "Тайный покупатель" , path:"/OrderForm"},
        { name: "Тамада, ведущий, аниматор" , path:"/OrderForm"},
        { name: "Комплектовщики" , path:"/OrderForm"},
        { name: "Что-то другое" , path:"/OrderForm"},
      ],
    },

    "Красота и здоровье": {
      image: BeautyandHelth,
      links: [
        { name: "Тату и пирсинг", path:"/OrderForm" },
        { name: "Стилисты и имиджмейкеры", path:"/OrderForm" },
        { name: "Услуги медсестры", path:"/OrderForm" },
        { name: "Парикмахерские услуги", path:"/OrderForm" },
        { name: "Массаж" , path:"/OrderForm"},
        { name: "Персональный тренер" , path:"/OrderForm"},
        { name: "Ногтевой сервис", path:"/OrderForm" },
        { name: "Психологи" , path:"/OrderForm"},
        { name: "Спорт" , path:"/OrderForm"},
        { name: "Что-то другое", path:"/OrderForm" },
      ],
    },

    "Ремонт цифровой техники": {
      image: DigitalEquipmentRepair,
      links: [
        { name: "Планшеты и телефоны", path:"/OrderForm" },
        { name: "Автомобильная электроника" , path:"/OrderForm"},
        { name: "Игровые приставки" , path:"/OrderForm"},
        { name: "Аудиотехника и системы" , path:"/OrderForm"},
        { name: "Видео/фототекника" , path:"/OrderForm"},
        { name: "Спутниковые и эфирные антены" , path:"/OrderForm"},
        { name: "Телевизоры и мониторы", path:"/OrderForm" },
        { name: "Часы и хронометры" , path:"/OrderForm"},
        { name: "Что-то другое" , path:"/OrderForm"},
      ],
    },

    "Грузоперевозки": {
      image: CargoTeansportation,
      links: [
        { name: "Перевозка вещей, переезды", path:"/OrderForm" },
        { name: "Вывоз мусора", path:"/OrderForm" },
        { name: "Услуги грузчиков" , path:"/OrderForm"},
        { name: "Другой груз" , path:"/OrderForm"},
        { name: "Пассажирские перевозки", path:"/OrderForm" },
        { name: "Эвакуаторы" , path:"/OrderForm"},
        { name: "Перевозка продуктов", path:"/OrderForm" },
        { name: "Строительные грузы и оборудование", path:"/OrderForm" },
        { name: "Междугородные перевозки", path:"/OrderForm" },
        { name: "Услуги манипулятора", path:"/OrderForm" },
        { name: "Что-то другое" , path:"/OrderForm"},
      ],
    },

    "Животные": {
      image: Animals,
      links: [
        { name: "Груминг", path:"/OrderForm" },
        { name: "Выгул" , path:"/OrderForm"},
        { name: "Перевозка", path:"/OrderForm" },
        { name: "Передержка питомцев", path:"/OrderForm" },
        { name: "Услуги ухода на дому", path:"/OrderForm" },
        { name: "Обучение и дрессировка", path:"/OrderForm" },
        { name: "Ветеринарные услуги" , path:"/OrderForm"},
        { name: "Услуги по уходу за аквариумами", path:"/OrderForm" },
        { name: "Услуги по уходу за грызунами и птицами", path:"/OrderForm" },
        { name: "Фотосессии для домашних животных" , path:"/OrderForm"},
        { name: "Тематические прогулки и встречи с другими питомцами", path:"/OrderForm" },
        { name: "Что-то другое" , path:"/OrderForm"},
      ],
    },

    "Спорт": {
      image: Sport,
      links: [
        { name: "Личный тренер по фитнесу", path:"/OrderForm" },
        { name: "Инструктор по плаванию" , path:"/OrderForm"},
        { name: "Персональный тренер по боксу" , path:"/OrderForm"},
        { name: "Йога и пилатес", path:"/OrderForm" },
        { name: "Занятия по кроссфиту", path:"/OrderForm" },
        { name: "Танцы" , path:"/OrderForm"},
        { name: "Спортивные секции для детей" , path:"/OrderForm"},
        { name: "Персонализированные планы питания" , path:"/OrderForm"},
        { name: "Услуги по составлению диет для набора или похудения массы" , path:"/OrderForm"},
        { name: "Велосипедные тренировки" , path:"/OrderForm"},
        { name: "Программы восстановления после травм", path:"/OrderForm" },
        { name: "Организация спортивных турниров и соревнований", path:"/OrderForm" },
        { name: "Соревнования по настольным играм", path:"/OrderForm" },
        { name: "Обучение верховой езде" , path:"/OrderForm"},
        { name: "Волейбол", path:"/OrderForm" },
        { name: "Футбол", path:"/OrderForm" },
        { name: "Настольный теннис", path:"/OrderForm" },
        { name: "Хоккей/фигурное катание" , path:"/OrderForm"},
        { name: "Что-то другое", path:"/OrderForm" },
      ],
    },

    "Недвижимость": {
      image: realEstate,
      links: [
        { name: "Услуги риелтора", path:"/OrderForm" },
        { name: "Юрист по недвижимости" , path:"/OrderForm"},
        { name: "Консультация по инвестиции", path:"/OrderForm" },
        { name: "Анализ рынка", path:"/OrderForm" },
        { name: "Подбор объектов для инвестирования", path:"/OrderForm" },
        { name: "Оценка рыночной стоимости", path:"/OrderForm" },
        { name: "Экспертиза состояния объектов", path:"/OrderForm" },
        { name: "Подготовка к продаже" , path:"/OrderForm"},
        { name: "Фотосессии и видеопрезентации ", path:"/OrderForm" },
        { name: "Онлайн-консультации" , path:"/OrderForm"},
        { name: "Услуги аренды" , path:"/OrderForm"},
        { name: "Организация переезда" , path:"/OrderForm"},
        { name: "Обслуживание и управление" , path:"/OrderForm"},
        { name: "Услуги хранения вещей" , path:"/OrderForm"},
        { name: "Семинары по покупке и продаже", path:"/OrderForm" },
        { name: "Консультации по земельным вопросам", path:"/OrderForm" },
        { name: "Ремонт и отделка" , path:"/OrderForm"},
        { name: "Консультации по налоговым вопросам" , path:"/OrderForm"},
        { name: "Финансовое планирование", path:"/OrderForm" },
        { name: "Что-то другое" , path:"/OrderForm"},
      ],
    },

    "Юридические и бухгалтерские услуги": {
      image: realEstate,
      links: [
        { name: "Консультация специалиста по налогам" , path:"/OrderForm"},
        { name: "Оформление документов", path:"/OrderForm" },
        { name: "Составление и подача жалоб, исков", path:"/OrderForm" },
        { name: "Делопроизводство и работа с кадрами", path:"/OrderForm" },
        { name: "Бухгалтерские услуги" , path:"/OrderForm"},
        { name: "Услуги адвоката" , path:"/OrderForm"},
        { name: "Составление и проверка договоров" , path:"/OrderForm"},
        { name: "Тендеры" , path:"/OrderForm"},
        { name: "Нотариальные услуги" , path:"/OrderForm"},
        { name: "Регистрация, ликвидация компаний", path:"/OrderForm" },
        { name: "Юридическое сопровождение" , path:"/OrderForm"},
        { name: "Юрист по недвижимости", path:"/OrderForm" },
        { name: "Что-то другое", path:"/OrderForm" },
      ],
    },
  };
  
  export default serviceDetails;