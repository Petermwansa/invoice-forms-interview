import { useState } from "react";
import Button from "./components/ui/button";
import { Input } from "./components/ui/Input";
import CustomCard from "./components/ui/cards/CustomCard";
import { invoices as invoicesData, funds as fundsData } from "./data";
import "./App.css";

const InvoicesAndFunds = () => {
  // we set the the filter functionality using the useState hook
  const [filter, setFilter] = useState("");

  const filteredInvoices = invoicesData.filter(
    (inv) =>
      inv.customer.toLowerCase().includes(filter.toLowerCase()) ||
      inv.contractor.toLowerCase().includes(filter.toLowerCase())
  );

  const filteredFunds = fundsData.filter(
    (fund) =>
      fund.customer.toLowerCase().includes(filter.toLowerCase()) ||
      fund.contractor.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      {/* Filtering Section */}
      <div className="filter-section">
        <Input
          placeholder="Фильтровать по заказчику/Исполнитель..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Button onClick={() => setFilter(filter)}>фильтр</Button>
      </div>

      {/* the invoices table  */}
      <CustomCard title="Данные платежей">
        <div className="table-wrapper">
          <table className="styled-table">
            <thead>
              <tr>
                <th>№</th>
                <th>Дата создания</th>
                <th>Тип</th>
                <th>Сумма</th>
                <th>Заказчик</th>
                <th>Заказчик ИНН</th>
                <th>Исполнитель</th>
                <th>Исполнитель ИНН</th>
                <th>ФИО</th>
                <th>Комментарий платежа</th>
                <th>Комментарий бухгалтера</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((inv) => (
                <tr key={inv.id}>
                  <td>{inv.id}</td>
                  <td>{inv.date}</td>
                  <td>{inv.type}</td>
                  <td>{inv.amount}</td>
                  <td>{inv.customer}</td>
                  <td>{inv.customerINN}</td>
                  <td>{inv.contractor}</td>
                  <td>{inv.contractorINN}</td>
                  <td>{inv.examinee}</td>
                  <td>{inv.comment}</td>
                  <td>{inv.accountantComment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <button className="pagination__btn">«</button>
          <button className="pagination__btn">2</button>
          <button className="pagination__btn">3</button>
          <button className="pagination__btn">4</button>
          <button className="pagination__btn">»</button>
        </div>
      </CustomCard>

      {/* this is for the Funds Table */}
      <CustomCard title="Данные счетов">
        <div className="table-wrapper">
          <table className="styled-table">
            <thead>
              <tr>
                <th>№</th>
                <th>Тип</th>
                <th>ФИО экзаменуемого</th>
                <th>Квалификация</th>
                <th>Сумма</th>
                <th>Заказчик</th>
                <th>Заказчик ИНН</th>
                <th>Исполнитель</th>
                <th>Исполнитель ИНН</th>
                <th>Назначение платежа</th>
              </tr>
            </thead>
            <tbody>
              {filteredFunds.map((fund) => (
                <tr key={fund.id}>
                  <td>{fund.id}</td>
                  <td>{fund.type}</td>
                  <td>{fund.examinee}</td>
                  <td>{fund.qualification}</td>
                  <td>{fund.amount}</td>
                  <td>{fund.customer}</td>
                  <td>{fund.customerINN}</td>
                  <td>{fund.contractor}</td>
                  <td>{fund.contractorINN}</td>
                  <td>{fund.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <button className="pagination__btn">«</button>
          <button className="pagination__btn">2</button>
          <button className="pagination__btn">3</button>
          <button className="pagination__btn">4</button>
          <button className="pagination__btn">»</button>
        </div>
      </CustomCard>
    </div>
  );
};

export default InvoicesAndFunds;
