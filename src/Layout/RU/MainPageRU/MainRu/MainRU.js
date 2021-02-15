import React from 'react';
import {DataRu} from '../../../../Data/DataRu'
import FirstScreen from "../../../../Components/FirstScreen/FirstScreen";
import ProductsOffer from "../../../../Components/ProductsOffer/ProductsOffer";
import ConsultantForm from "../../../../Components/Forms/ConsultantForm/ConsultantForm";
import Partners from "../../../../Components/Partners/Partners";
import HowWeWork from "../../../../Components/HowWeWork/HowWeWork";
import CompanyDescription from "../../../../Components/CompanyDescription/CompanyDescription";
import {Helmet} from "react-helmet";
import './MainRu.css'
import Button from "../../../../Components/Button/Button";


const MainRu = (props) => {

  return (

   <main>
       <Helmet>
           <title>Рекламная компания Google</title>
           <meta charSet="utf-8"/>
           <meta name={"description"} content={DataRu.FirstScreen.title}/>
           <meta name={'keywords'} content={'Google Ads, Реклама в Google, Привлечение Клиентов'}/>
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <meta name="theme-color" content="#000000" />
       </Helmet>


       <div className={'wrapper'}>
            <FirstScreen
                title={DataRu.FirstScreen.title}
                subtitle={DataRu.FirstScreen.subtitle}
                link1={DataRu.FirstScreen.button1link}
                link2={DataRu.FirstScreen.button2link}
                text1={DataRu.FirstScreen.button1text}
                text2={DataRu.FirstScreen.button2text}
            />
            <Button link={'/#'} text={'START'}/>

       </div>
       <ProductsOffer
           title={DataRu.ProductsOffer.title}
           subtitle={DataRu.ProductsOffer.subTitle}
           array={DataRu.ProductsOffer.Products}
       />
        <HowWeWork
            title={DataRu.HowWeWork.Title}
            subtitle={DataRu.HowWeWork.subTitle}
            array={DataRu.HowWeWork.steps}
        />


       <CompanyDescription
            title={DataRu.CompanyDescription.Title}
            subTitle={DataRu.CompanyDescription.subTitle}
            text={DataRu.CompanyDescription.Text}
            img={DataRu.CompanyDescription.img}
            numbers={DataRu.CompanyDescription.aboutNumbers}
       />



       <ConsultantForm
            img={DataRu.ConsultantForm.feedbackImg}
            title={DataRu.ConsultantForm.feedbackTitle}
            text={DataRu.ConsultantForm.feedbackText}
            desc={DataRu.ConsultantForm.feedbackDesc}
            form={DataRu.ConsultantForm.feedbackForm}
       />

       <Partners
           partners={DataRu.Partners}
       />



   </main>
  );
 }


export default MainRu;