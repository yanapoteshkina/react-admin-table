import React from "react";
import Avatar from "../UI/Avatar/Avatar";
import styles from './Header.module.scss';
import TextRouter from './../UI/TextRouter/TextRouter'

function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.LogoHeader}>
        <TextRouter text="Dashboard" routerlink="Главная страница" activelink="Лиды" />
      </div>

      <div className={styles.RightSide}>
        <Avatar elem="П" online="true" />
        <div className={styles.Notif}>
        <i class='bx bx-bell'></i>
        </div>
        <div className={styles.UserBlock}>

        <Avatar elem={ <i class='bx bx-user' ></i>} online="true" />
        <div className={styles.UserInfo}>

            <div>
                  <h3>
                Амир Арпабаева
            </h3>
            <span>
                +7777 777-66-66
            </span>
            </div>

            <div>
                 <i class='bx bx-chevron-down' ></i>
            </div>
          
           
        </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
