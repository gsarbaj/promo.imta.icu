import React from 'react';
import {Data} from '../../../../Data/RusAuditoryAdRu/DataRu'
import FirstScreen from "../../../../Components/FirstScreen/FirstScreen";
import ProductsOffer from "../../../../Components/ProductsOffer/ProductsOffer";
import ConsultantForm from "../../../../Components/Forms/ConsultantForm/ConsultantForm";
import Partners from "../../../../Components/Partners/Partners";
import HowWeWork from "../../../../Components/HowWeWork/HowWeWork";
import CompanyDescription from "../../../../Components/CompanyDescription/CompanyDescription";
import './MainRu.module.css'
import Button from "../../../../Components/Button/Button";
import Price from "../../../../Components/Price/Price";

const MainRu = (props) => {

  return (

   <main>


       <div className={'wrapper'}>
            <FirstScreen
                title={Data.FirstScreen.title}
                subtitle={Data.FirstScreen.subtitle}
                link1={Data.FirstScreen.button1link}
                link2={Data.FirstScreen.button2link}
                text1={Data.FirstScreen.button1text}
                text2={Data.FirstScreen.button2text}
            />


       </div>
       <ProductsOffer
           title={Data.ProductsOffer.title}
           subtitle={Data.ProductsOffer.subTitle}
           array={Data.ProductsOffer.Products}
       />
       <Button link={'/#'} text={'Начни Сейчас'}/>
        <HowWeWork
            title={Data.HowWeWork.Title}
            subtitle={Data.HowWeWork.subTitle}
            array={Data.HowWeWork.steps}
        />

       <CompanyDescription
            title={Data.CompanyDescription.Title}
            subTitle={Data.CompanyDescription.subTitle}
            text={Data.CompanyDescription.Text}
            img={Data.CompanyDescription.img}
            numbers={Data.CompanyDescription.aboutNumbers}
       />

       <Price
            title={Data.Price.title}
            subtitle={Data.Price.subtitle}

            lowTitle={Data.Price.low.title}
            lowPrice={Data.Price.low.price}
            lowContent1={Data.Price.low.con1}
            lowContent2={Data.Price.low.con2}
            lowContent3={Data.Price.low.con3}

            midTitle={Data.Price.mid.title}
            midPrice={Data.Price.mid.price}
            midContent1={Data.Price.mid.con1}
            midContent2={Data.Price.mid.con2}
            midContent3={Data.Price.mid.con3}

            highTitle={Data.Price.high.title}
            highPrice={Data.Price.high.price}
            highContent1={Data.Price.high.con1}
            highContent2={Data.Price.high.con2}
            highContent3={Data.Price.high.con3}
       />



       <ConsultantForm
            img={Data.ConsultantForm.feedbackImg}
            title={Data.ConsultantForm.feedbackTitle}
            text={Data.ConsultantForm.feedbackText}
            desc={Data.ConsultantForm.feedbackDesc}
            form={Data.ConsultantForm.feedbackForm}
       />

       <Partners
           partners={Data.Partners}
       />



   </main>
  );
 }


export default MainRu;