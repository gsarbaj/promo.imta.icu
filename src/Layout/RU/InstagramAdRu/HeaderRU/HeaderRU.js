import React from 'react';
import Logo from "../../../../Components/Logo/Logo";
import NavBar from "../../../../Components/NavBar/NavBar";
import Tel from "../../../../Components/Tel/Tel";
import {Data} from "../../../../Data/InstagramAdRu/DataRu";
import './Header.css';

const HeaderRu = props => {
  return (
   <header className={'header'}>
       <div className={"header__wrapper"}>
           <Logo
               img={Data.Logo.img}
               alt={Data.Logo.alt}
               to={Data.Logo.to}
           />
           <NavBar/>
           <Tel tel={Data.Tel.Num} text={Data.Tel.Text}/>
       </div>

   </header>
  );
 }


export default HeaderRu;