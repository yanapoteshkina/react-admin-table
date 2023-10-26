import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePickerUI.module.scss";

const DatePickerUI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activeOption, setActiveOption] = useState(null);

  const options = [
    "Сегодня",
    "Вчера",
    "Неделя",
    "Месяц",
    "Прошлый месяц",
    "Год",
    "За все время",
    "Другой",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    const today = new Date();
    let newStartDate = null;
    let newEndDate = null;

    setActiveOption(option);

    switch (option) {
      case "Сегодня":
        setStartDate(new Date());
        setEndDate(new Date());
        break;
      case "Вчера":
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        setStartDate(yesterday);
        setEndDate(yesterday);
        break;
      case "Неделя":
        const now = new Date();
        const oneWeekAgo = new Date(now);
        oneWeekAgo.setDate(now.getDate() - 7);
        setStartDate(oneWeekAgo);
        setEndDate(now);
        break;
      case "Месяц":
        const firstDayOfMonth = new Date();
        firstDayOfMonth.setDate(1);
        const lastDayOfMonth = new Date();
        lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1);
        lastDayOfMonth.setDate(0);
        setStartDate(firstDayOfMonth);
        setEndDate(lastDayOfMonth);
        break;
      case "Прошлый месяц":
        const firstDayOfLastMonth = new Date();
        firstDayOfLastMonth.setDate(1);
        firstDayOfLastMonth.setMonth(firstDayOfLastMonth.getMonth() - 1);
        const lastDayOfLastMonth = new Date(firstDayOfLastMonth);
        lastDayOfLastMonth.setMonth(lastDayOfLastMonth.getMonth() + 1);
        lastDayOfLastMonth.setDate(0);
        setStartDate(firstDayOfLastMonth);
        setEndDate(lastDayOfLastMonth);
        break;
      case "Год":
        const firstDayOfYear = new Date();
        firstDayOfYear.setDate(1);
        firstDayOfYear.setMonth(0);
        setStartDate(firstDayOfYear);
        setEndDate(new Date());
        break;
      default:
        setStartDate(null);
        setEndDate(null);
    }
  };

  const handleApplyClick = () => {
    // Здесь можно выполнить дополнительную логику перед выводом в console.log
    console.log("Выбрана опция:", selectedOption);
    console.log("Дата начала:", startDate);
    console.log("Дата окончания:", endDate);

    setIsOpen(false);
  };

  const handleCancelClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className={styles.Button} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption : "Выбрать дату"}
      </button>
      <div className={styles.DatePicker}>
        {isOpen && (
          <div className={styles.DatePickerContainer}>
            <div className={styles.Container}>
              <ul className={styles.List}>
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className={option === activeOption ? styles.active : ""}
                  >
                    {option}
                  </li>
                ))}
              </ul>
              <div className={styles.DatePickers}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="yyyy-MM-dd"
                  inline
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="yyyy-MM-dd"
                  inline
                />
              </div>
            </div>
            <div className={styles.Buttons}>
              <button onClick={handleCancelClick} className={styles.Button}>
                Отменить
              </button>
              <button onClick={handleApplyClick} className={styles.Button}>
                Применить
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DatePickerUI;
