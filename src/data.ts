// src/data.ts

export interface Invoice {
  id: number;
  date: string;
  type: string;
  amount: number;
  customer: string;
  customerINN: string;
  contractor: string;
  contractorINN: string;
  examinee: string;
  comment: string;
  accountantComment: string;
}

export interface Fund {
  id: number;
  type: string;
  examinee: string;
  qualification: string;
  amount: number;
  customer: string;
  customerINN: string;
  contractor: string;
  contractorINN: string;
  purpose: string;
}

export const invoices: Invoice[] = [
  {
    id: 1,
    date: "02.03.2024",
    type: "электронный",
    amount: 15000,
    customer: "ООО Ромашка",
    customerINN: "7701234567",
    contractor: "Иванов Игорь",
    contractorINN: "7712345678",
    examinee: "Петрова Анна",
    comment: "Оплата обучения",
    accountantComment: "Проверено",
  },
  {
    id: 2,
    date: "05.03.2024",
    type: "наличный",
    amount: 20000,
    customer: "АО Лада",
    customerINN: "7809876543",
    contractor: "Смирнов Алексей",
    contractorINN: "7801234567",
    examinee: "Кузнецов Дмитрий",
    comment: "Оплата пошлины",
    accountantComment: "В процессе проверки",
  },
  {
    id: 3,
    date: "10.03.2024",
    type: "электронный",
    amount: 12000,
    customer: "ООО Технологии",
    customerINN: "7711122233",
    contractor: "Козлова Мария",
    contractorINN: "7712233445",
    examinee: "Сидоров Николай",
    comment: "Оплата курсов",
    accountantComment: "Проверено",
  },
  {
    id: 4,
    date: "12.03.2024",
    type: "наличный",
    amount: 18000,
    customer: "ЗАО Прогресс",
    customerINN: "7723344556",
    contractor: "Федоров Сергей",
    contractorINN: "7724455667",
    examinee: "Иванова Екатерина",
    comment: "Оплата семинара",
    accountantComment: "В процессе проверки",
  },
];

export const funds: Fund[] = [
  {
    id: 1,
    type: "обучение",
    examinee: "Иванова Анна",
    qualification: "Бакалавр",
    amount: 15000,
    customer: "ООО Ромашка",
    customerINN: "7701234567",
    contractor: "Иванов Игорь",
    contractorINN: "7712345678",
    purpose: "Обучение по проекту А",
  },
  {
    id: 2,
    type: "работа",
    examinee: "Петров Дмитрий",
    qualification: "Магистр",
    amount: 20000,
    customer: "АО Лада",
    customerINN: "7809876543",
    contractor: "Смирнов Алексей",
    contractorINN: "7801234567",
    purpose: "Услуги по тренингу",
  },
  {
    id: 3,
    type: "обучение",
    examinee: "Сидорова Мария",
    qualification: "Бакалавр",
    amount: 12000,
    customer: "ООО Технологии",
    customerINN: "7711122233",
    contractor: "Козлова Мария",
    contractorINN: "7712233445",
    purpose: "Курсы повышения квалификации",
  },
  {
    id: 4,
    type: "работа",
    examinee: "Иванов Николай",
    qualification: "Магистр",
    amount: 18000,
    customer: "ЗАО Прогресс",
    customerINN: "7723344556",
    contractor: "Федоров Сергей",
    contractorINN: "7724455667",
    purpose: "Семинар по проекту B",
  },
  {
    id: 5,
    type: "обучение",
    examinee: "Кузнецова Екатерина",
    qualification: "Бакалавр",
    amount: 14000,
    customer: "ООО Инновации",
    customerINN: "7735566778",
    contractor: "Морозов Алексей",
    contractorINN: "7736677889",
    purpose: "Обучение по внутреннему проекту",
  },
  {
    id: 6,
    type: "работа",
    examinee: "Федоров Сергей",
    qualification: "Магистр",
    amount: 22000,
    customer: "АО Сфера",
    customerINN: "7744455667",
    contractor: "Павлова Ирина",
    contractorINN: "7745566778",
    purpose: "Поддержка проекта C",
  },
];
