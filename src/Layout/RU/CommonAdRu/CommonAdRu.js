import React from 'react';
import HeaderRu from "./HeaderRU/HeaderRU";
import MainRu from "./MainRu/MainRU";
import FooterRu from "./FooterRU/FooterRU";
import {Helmet} from "react-helmet";
import {Data} from "../../../Data/CommonAdRu/DataRu";


const CommonAdRu = props => {



    return (
   <div>

       <Helmet>
           <title>{Data.meta.title}</title>
           <meta charSet="utf-8"/>
           <meta name={"description"} content={Data.meta.description}/>
           <meta name={'keywords'} content={Data.meta.keywords}/>
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <meta name="theme-color" content="#000000" />
       </Helmet>


       <HeaderRu/>
       <MainRu/>
       <FooterRu/>


       
   </div>
  );
 }


export default CommonAdRu;