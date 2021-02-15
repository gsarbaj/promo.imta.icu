import React from 'react';
import Logo from "../../../../Components/Logo/Logo";
import NavBar from "../../../../Components/NavBar/NavBar";
import Tel from "../../../../Components/Tel/Tel";
import {DataRu} from "../../../../Data/DataRu";
import './Header.css';

const HeaderRu = props => {
  return (
   <header className={'header'}>
       <div className={"header__wrapper"}>
           <Logo
               img={DataRu.Logo.img}
               alt={DataRu.Logo.alt}
               to={DataRu.Logo.to}
           />
           <NavBar/>
           <Tel tel={DataRu.Tel.Num} text={DataRu.Tel.Text}/>
       </div>

   </header>
  );
 }


export default HeaderRu;