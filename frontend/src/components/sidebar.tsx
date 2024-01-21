import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import styles from  "../styles/sidebar.module.css";
import LogoContainer from "./logoContainer";

import { CiHome } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

function Sidebar() {
  const [isToggled, setIsToggled] = useState(true);

  function toggleSidebar() {
    setIsToggled(!isToggled);
  }

  return (
    <div className={`${isToggled ? styles.sidebarInactive : styles.sidebarActive}`}>
      <div className={`${isToggled ? styles.sidebarHeaderInactive : styles.sidebarHeaderActive}`}>
        {!isToggled && <div id={styles.sidebarLogo}>
          <LogoContainer title="We One Infotech" />
        </div>}
      </div>
      {isToggled ? 
        null : 
        <div className={styles.sideIcons}>
          <div className={styles.options}>
            <CiHome className={styles.Icons} />
            <p className={styles.title}>Home</p>
          </div> <hr style={{ borderColor: "rgb(181, 219, 242)", width: "98%" }} />

          <div className={styles.options}>
            <CiShare2 className={styles.Icons} />
            <p className={styles.title}>Share</p>
          </div> <hr style={{ borderColor: "rgb(181, 219, 242)", width: "98%" }} />

          <div className={styles.options}>
            <CiBookmark className={styles.Icons} />
            <p className={styles.title}>Bookmarks</p>
          </div> <hr style={{ borderColor: "rgb(181, 219, 242)", width: "98%" }} />

          <div className={styles.options}>
            <CiSettings className={styles.Icons} />
            <p className={styles.title}>Settings</p>
          </div> <hr style={{ borderColor: "rgb(181, 219, 242)", width: "98%" }} />
        </div>
      }
    </div>
  );
}

export default Sidebar;
