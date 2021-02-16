import React from 'react';
import Button from "../Button/Button";
import './Price.css';
import 'animate.css/animate.min.css'

const Price = props => {
  return (
      <div className={'price-wrapper'}>
          <h3 className={'price-title'}>{props.title}</h3>
          <p className={'price-subtitle'}>{props.subtitle}</p>

          <div className={'price-container'}>
              <div className={'price-item'}>
                  <h3>{props.lowTitle}</h3>
                  <span>{props.lowPrice}</span>
                  <ul>
                      <li>{props.lowContent1}</li>
                      <li>{props.lowContent2}</li>
                      <li>{props.lowContent3}</li>
                  </ul>

                  <Button
                      text={'Начать'}
                  />
              </div>
              <div className={'price-item animate__animated animate__pulse animate__infinite'}>
                  <h3>{props.midTitle}</h3>
                  <span>{props.midPrice}</span>
                  <ul>
                      <li>{props.midContent1}</li>
                      <li>{props.midContent2}</li>
                      <li>{props.midContent3}</li>
                  </ul>
                  <Button
                      text={'Начать'}
                  />
              </div>
              <div className={'price-item'}>
                  <h3>{props.highTitle}</h3>
                  <span>{props.highPrice}</span>
                  <ul>
                      <li>{props.highContent1}</li>
                      <li>{props.highContent2}</li>
                      <li>{props.highContent3}</li>
                  </ul>

                  <Button
                      text={'Начать'}
                  />
              </div>
          </div>
      </div>
  );
      };

export default Price