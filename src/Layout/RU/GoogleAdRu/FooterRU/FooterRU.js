import React from 'react';
import {Data} from '../../../../Data/GoogleAdRu/DataRu';
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
               imgCont={Data.Contacts.TelMailPic}
               imgAdr={Data.Contacts.AddressPic}
               tel={Data.Tel.Num}
               text={Data.Tel.Text}
               email={Data.Email}
               adr={Data.Address.text}
               link={Data.Address.link}
               etext={Data.EmailText}
           />
           <div className={style.footer__down}>
               <About
                    title={Data.About.Title}
                    text={Data.About.Text}
                    array={Data.Social}
               />

               <FooterLinks
                    array={Data.FooterLinks}
               />
           </div>
            <Copyright
                text={Data.Copyright.Text}
            />
       </div>

   </footer>
  );
 }


export default FooterRu;