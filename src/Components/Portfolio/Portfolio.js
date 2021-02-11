import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Portfolio extends Component {



    projects = this.props.array

    buttonsArray = function ()
    {
        let but = {};
        this.projects.forEach((item)=> item.type.forEach((item) => but[item]=null))
        return Object.keys(but)
    }

    constructor(props) {
        super(props);
        this.state = {
            type: this.buttonsArray()[0]
        }

        this.mouseHandler = (event) => {
            this.setState(() => {
                return {
                    type: event.target.value
                }})
        }


        this.clickHandler = (event) => {

            this.mouseHandler(event)

            this.projectsType(this.state.type)

            this.projectsRender = this.projectsType(this.state.type).map((item, index) =>
                    <NavLink to={'/portfolio/id'+item.id} key={index} className={'portfolio-item'}>
                        <h3 className={'portfolio-item__title'}>{item.projectTitle}</h3>
                        <h4 className={'portfolio-item__subtitle'}>{item.projectDescription}</h4>
                        <img src={item.img} alt={item.projectTitle}/>

                    </NavLink>
                )

        }


        this.links = this.buttonsArray().map((item, index) =>
            <button key={index} onMouseDown={this.mouseHandler}  onClick={this.clickHandler} value={item}>{item}</button>
        )
        this.projectsType = (type) => {
            let renderList = []

            this.projects.forEach((item, index) => {

                if (item.type.indexOf(type) >= 0) {
                    renderList.push(item)

                }
            })

            return renderList
        }


        this.projectsRender = this.projectsType(this.state.type).map((item, index) =>
            <NavLink to={'/portfolio/id'+item.id} key={index} className={'portfolio-item'}>
                <h3 className={'portfolio-item__title'}>{item.projectTitle}</h3>
                <h4 className={'portfolio-item__subtitle'}>{item.projectDescription}</h4>
                <img src={item.img} alt={item.projectTitle}/>

            </NavLink>
        )

    }
    render()
        {
        return (
            <section className={'portfolio'}>
                <h2 className={'portfolio__title'}>{this.props.title}</h2>
                <h3 className={'portfolio__subtitle'}>{this.props.subtitle}</h3>
                <div className={'portfolio__wrapper'}>
                    <div className={'portfolio__toggles'}>
                        {this.links}
                    </div>
                    <div className={'portfolio__content'}>
                        {this.projectsRender}

                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;