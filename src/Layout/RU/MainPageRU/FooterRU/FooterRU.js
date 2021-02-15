import React from 'react';
import {DataRu} from '../../../../Data/DataRu';
import style from './Footer.module.css';

import Contacts from "../../../../Components/Contacts/Contacts";
import About from "../../../../Components/About/About";
import FooterLinks from "../../../../Components/FooterLinks/FooterLinks";
import Copyright from "../../../../Components/Copyright/Copyright";

const FooterRu = () => {
  return (
   <footer className={style.footer}>
       <div className={style.footer__wrapper}>
           <Contacts
               imgCont={DataRu.Contacts.TelMailPic}
               imgAdr={DataRu.Contacts.AddressPic}
               tel={DataRu.Tel.Num}
               text={DataRu.Tel.Text}
               email={DataRu.Email}
               adr={DataRu.Address.text}
               link={DataRu.Address.link}
               etext={DataRu.EmailText}
           />
           <div className={style.footer__down}>
               <About
                    title={DataRu.About.Title}
                    text={DataRu.About.Text}
                    array={DataRu.Social}
               />

               <FooterLinks
                    array={DataRu.FooterLinks}
               />
           </div>
            <Copyright
                text={DataRu.Copyright.Text}
            />
       </div>

   </footer>
  );
 }


export default FooterRu;