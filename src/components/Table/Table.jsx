import React from 'react'
import styles from './Table.module.scss'
import TableNav from './Table-nav';
import TableBody from './Table-body';

function Table() {

    const data =  [
        {
            id: 1,
            name: "Иван Иванов",
            phone: "123-456-7890",
            comments: "Замечания по заказу",
            email: "ivan@example.com",
            city: "Москва",
            date: "2023-10-09"
          },
          {
            id: 2,
            name: "Мария Петрова",
            phone: "987-654-3210",
            comments: "Спасибо за услуги",
            email: "maria@example.com",
            city: "Санкт-Петербург",
            date: "2023-10-10"
          },
          {
            id: 3,
            name: "Алексей Сидоров",
            phone: "555-123-4567",
            comments: "Требуется дополнительная информация",
            email: "alex@example.com",
            city: "Екатеринбург",
            date: "2023-10-11"
          }
    ]
    return ( <div>

        <TableNav />
        <TableBody data={data} />

    </div> );
}

export default Table;