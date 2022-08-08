import { SidebarData } from "@/components/SidebarData";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleUp,
  faHouse,
  faInbox,
  faUserGroup,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SubMenu } from "./SubMenu";
export interface SidebarProps {}

export function Sidebar() {
  const [isActive, setIsActice] = useState("");

  const handleClickSidebar = (title: string) => {
    console.log(title)
    if (title === isActive) {
      setIsActice("");
    } else {
      setIsActice(title);
    }
  };

  return (
    <div className="mt-2 pt-20 side-bar">
      <div className="block w-full">
        {SidebarData.map((items, index) => {
          return <SubMenu key={index} items={items} onClick= {()=>handleClickSidebar(items.title)} isActice={isActive} />;
        })}
       
      </div>

      {/* <div className="flex justify-between items-center mt-5 text-slate-700 rounded-lg py-3 px-5">
        <div className="flex items-center">
          <p>
            <FontAwesomeIcon icon={faHouse} />
          </p>
          <p className="font-medium text-sm ml-3">Menu Layout</p>
        </div>
        <p>
          <FontAwesomeIcon icon={faAngleUp} />
        </p>
      </div>
      <div className="flex justify-between items-center mt-5 text-slate-700 rounded-lg py-3 px-5">
        <div className="flex items-center">
          <p>
            <FontAwesomeIcon icon={faHouse} />
          </p>
          <p className="font-medium text-sm ml-3">E-Commerce</p>
        </div>
        <p>
          <FontAwesomeIcon icon={faAngleUp} />
        </p>
      </div>
      <div className="flex justify-between items-center mt-5 text-slate-700 rounded-lg py-3 px-5">
        <div className="flex items-center">
          <p>
            <FontAwesomeIcon icon={faHouse} />
          </p>
          <p className="font-medium text-sm ml-3">Inbox</p>
        </div>
        <p>
          <FontAwesomeIcon icon={faAngleUp} />
        </p>
      </div>
      <div className="flex justify-between items-center mt-5 text-slate-700 rounded-lg py-3 px-5">
        <div className="flex items-center">
          <p>
            <FontAwesomeIcon icon={faHouse} />
          </p>
          <p className="font-medium text-sm ml-3">File Manager</p>
        </div>
        <p>
          <FontAwesomeIcon icon={faAngleUp} />
        </p>
      </div> */}
    </div>
  );
}
