import React, {useState} from 'react'

import styles from './Table.module.scss'

import Button from '../UI/Buttons/Button';
import DropDown from '../UI/DropDown/DropDown';
import SearchInput from '../UI/Search/SearchInput';
import DatePickerUI from '../UI/DatePicker/DatePickerUI'
import TabSwitcher from '../UI/TabSwitcher/TabSwitcher';
import ButtonSquare from '../UI/Buttons/Button-square'
import TextRouter from '../UI/TextRouter/TextRouter'

const arrStatus = [{statusColor:'red', status: 'Отправили в КП'}, {statusColor:'pink', status: 'Вакансии'},, {statusColor:'green', status: 'Реклама'}, ]

const data = {
    newData: ['Запись 1', 'Запись 2', 'Запись 3'],
    processedData: ['Запись A', 'Запись B'],
    deletedData: ['Запись X', 'Запись Y', 'Запись Z'],
  };




function TableNav() {

    const [isBlockVisible, setBlockVisible] = useState(false);

    const handleButtonClick = () => {
      setBlockVisible(!isBlockVisible);
    };
    
    return ( 
    <>
    <nav className={styles.Nav}>

<TextRouter text="Лиды" routerlink="Главная" activelink="лиды"/>

<Button btnMode="dark" title="В обработанные" />
<Button btnMode="default" title="Удалить" />

<DropDown listdata={arrStatus}/>

<SearchInput placeholder={'Поиск'} />

<DatePickerUI />
<TabSwitcher data={data} />


<button  onClick={handleButtonClick}><ButtonSquare /></button>

    </nav> 
    
    
    {isBlockVisible && (
        <div>
        
          <p>Этот блок появляется при клике на кнопку</p>
        </div>
      )}

</>

    );
}

export default TableNav;