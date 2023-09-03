import React from 'react';
import Slider from "../assets/img/slider.png";
import About from "../assets/img/about.jpg";
import Feature from "../assets/img/feature.png";
import FeatureSP from "../assets/img/feature-sp.png";
import Faq from "../assets/img/faq.png";
import Team from "../assets/img/team.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import { BrandList } from "../helpers/Brands"
import { DataList } from "../helpers/Data"
import { FaqList } from "../helpers/Faq"
import { ProcessList } from "../helpers/Process"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <section className='page page-p bg-light'>
                <div className="container-right">
                    <div className="page-inner">
                        <div className="page-text">
                            <h2 className='page-title'>Evalo Softweare</h2>
                            <p className='page-desc'>Innovative application with easy access</p>
                            <span className='page-muted'>Bole nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nua.</span>
                            <div className="play">
                                <div className="play-icon-content">
                                    <FontAwesomeIcon className='play-icon' icon={faPlay}></FontAwesomeIcon>
                                </div>
                                <h2 className='play-title'>Play Video</h2>
                            </div>
                        </div>
                        <div className="page-img">
                            <img src={Slider} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="brands">
                    {BrandList.map((brandItem, key) => {
                        return <img className='brands-item' src={brandItem.img} alt="" />
                    })}
                </div>
            </section>
            <section className='page'>
                <div className="container-left">
                    <div className="page-inner">
                        <div className="page-img">
                            <img src={About} alt="" />
                        </div>
                        <div className="page-text">
                            <h2 className='page-title'>Learn more about us</h2>
                            <p className='page-desc'>Quality solution to make your tech life easier</p>
                            <span className='page-muted'>Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerction</span>
                            <br /><br />
                            <span className='page-muted'>Bole nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nua.</span>
                            <div className="page-btn">
                                <Link to="/" className='btn'>Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='data'>
                <div className="container">
                    <div className="data-inner">
                        <article className="data-box">
                            {DataList.map((dataItem, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        {key === 0 && <img className='data-icon' src={dataItem.img} alt="" />}
                                    </React.Fragment>
                                );
                            })}
                            <h2>Big Data Analysis</h2>
                            <p>Ovitae purus soda duis eu ers auctor augue ultricie conse ctetur adipisicing elit</p>
                        </article>
                        <article className="data-box">
                            {DataList.map((dataItem, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        {key === 1 && <img className='data-icon' src={dataItem.img} alt="" />}
                                    </React.Fragment>
                                );
                            })}
                            <h2>Big Data Analysis</h2>
                            <p>Ovitae purus soda duis eu ers auctor augue ultricie conse ctetur adipisicing elit</p>
                        </article>
                        <article className="data-box">
                            {DataList.map((dataItem, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        {key === 2 && <img className='data-icon' src={dataItem.img} alt="" />}
                                    </React.Fragment>
                                );
                            })}
                            <h2>Big Data Analysis</h2>
                            <p>Ovitae purus soda duis eu ers auctor augue ultricie conse ctetur adipisicing elit</p>
                        </article>
                    </div>
                </div>
            </section>
            <section className='page bg-light'>
                <div className="container-left">
                    <div className="page-inner">
                        <div className="page-img">
                            <img src={Feature} alt="" />
                        </div>
                        <div className="page-text">
                            <h2 className='page-title'>Learn more about us</h2>
                            <p className='page-desc'>Generate sales and manage earning</p>
                            <span className='page-muted'>Bole nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            <div className="page-box">
                                <article className="page-box-item">
                                    <div className="page-box-item-text">
                                        <FontAwesomeIcon className='box-text-icon' icon={faFilePen}></FontAwesomeIcon>
                                        <h2>Easy Control Panel</h2>
                                    </div>
                                    <p className='page-muted'>Bommodo dolor sit amet otire conse ctetur adipisic</p>
                                </article>
                                <article className="page-box-item">
                                    <div className="page-box-item-text">
                                        <FontAwesomeIcon className='box-text-icon' icon={faFilePen}></FontAwesomeIcon>
                                        <h2>Easy Control Panel</h2>
                                    </div>
                                    <p className='page-muted'>Bommodo dolor sit amet otire conse ctetur adipisic</p>
                                </article>
                                <article className="page-box-item">
                                    <div className="page-box-item-text">
                                        <FontAwesomeIcon className='box-text-icon' icon={faFilePen}></FontAwesomeIcon>
                                        <h2>Easy Control Panel</h2>
                                    </div>
                                    <p className='page-muted'>Bommodo dolor sit amet otire conse ctetur adipisic</p>
                                </article>
                                <article className="page-box-item">
                                    <div className="page-box-item-text">
                                        <FontAwesomeIcon className='box-text-icon' icon={faFilePen}></FontAwesomeIcon>
                                        <h2>Easy Control Panel</h2>
                                    </div>
                                    <p className='page-muted'>Bommodo dolor sit amet otire conse ctetur adipisic</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='page'>
                <div className="container-right">
                    <div className="page-inner">
                        <div className="page-text">
                            <h2 className='page-title'>Learn more about us</h2>
                            <p className='page-desc'>Online reporting to get best of business</p>
                            <span className='page-muted'>Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerction</span>
                            <br /><br />
                            <span className='page-muted'>Bole nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            <div className="page-btn">
                                <Link to="/" className='btn'>More Details</Link>
                            </div>
                        </div>
                        <div className="page-img">
                            <img src={FeatureSP} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='page never bg-light'>
                <div className="container">
                    <div className="page-inner never-inner">
                        <div className="page-text">
                            <h2 className='page-title'>Learn more about us</h2>
                            <p className='page-desc'>Numbers Never Tell A Lie</p>
                            <span className='page-muted'>Bole nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conididunt ut labore et dolore magna aliqua ut enim ad minim veniam</span>
                        </div>
                        <div className="never-cards">
                            <div className="never-cards-inner">
                                <article className="never-cards-item">
                                    <h2>20+</h2>
                                    <p>Moudle</p>
                                </article>
                                <article className="never-cards-item">
                                    <h2>100K</h2>
                                    <p>Lines of Code</p>
                                </article>
                                <article className="never-cards-item">
                                    <h2>10+</h2>
                                    <p>Report Modeling</p>
                                </article>
                                <article className="never-cards-item">
                                    <h2>50+</h2>
                                    <p>Color Sceme</p>
                                </article>
                                <article className="never-cards-item">
                                    <h2>500K</h2>
                                    <p>Active user</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='page never'>
                <div className="container">
                    <div className="page-inner never-inner">
                        <div className="page-text">
                            <h2 className='page-title'>Screenshots</h2>
                            <p className='page-desc'>Have A Close Look</p>
                            <span className='page-muted'>Bole nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conididunt ut labore et dolore magna aliqua ut enim ad minim veniam</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='page bg-light'>
                <div className="container-right">
                    <div className="page-inner">
                        <div className="page-text">
                            <h2 className='page-title'>What people want to know</h2>
                            <p className='page-desc'>Frequently Asked Questions</p>
                            <span className='page-muted'>Bole nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            <div className="faq">
                                <article className="faq-item">
                                    <div className="faq-text">
                                        <FontAwesomeIcon className='faq-icon' icon={faPlus}></FontAwesomeIcon>
                                        {FaqList.map((FaqItem, key) => {
                                            return (
                                                <React.Fragment key={key}>
                                                    {key === 0 && <p className='faq-title'>{FaqItem.title}</p>}
                                                </React.Fragment>
                                            );
                                        })}
                                    </div>
                                    {FaqList.map((FaqItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 2 && <p className='faq-its'>{FaqItem.desc}</p>}
                                            </React.Fragment>
                                        );
                                    })}
                                </article>
                                <article className="faq-item">
                                    <div className="faq-text">
                                        <FontAwesomeIcon className='faq-icon' icon={faPlus}></FontAwesomeIcon>
                                        {FaqList.map((FaqItem, key) => {
                                            return (
                                                <React.Fragment key={key}>
                                                    {key === 1 && <p className='faq-title'>{FaqItem.title}</p>}
                                                </React.Fragment>
                                            );
                                        })}
                                    </div>
                                    {FaqList.map((FaqItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 2 && <p className='faq-its'>{FaqItem.desc}</p>}
                                            </React.Fragment>
                                        );
                                    })}
                                </article>
                                <article className="faq-item">
                                    <div className="faq-text">
                                        <FontAwesomeIcon className='faq-icon' icon={faPlus}></FontAwesomeIcon>
                                        {FaqList.map((FaqItem, key) => {
                                            return (
                                                <React.Fragment key={key}>
                                                    {key === 2 && <p className='faq-title'>{FaqItem.title}</p>}
                                                </React.Fragment>
                                            );
                                        })}
                                    </div>
                                    {FaqList.map((FaqItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 2 && <p className='faq-its'>{FaqItem.desc}</p>}
                                            </React.Fragment>
                                        );
                                    })}
                                </article>
                            </div>
                        </div>
                        <div className="page-img">
                            <img src={Faq} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='page never'>
                <div className="container">
                    <div className="page-inner never-inner">
                        <div className="page-text">
                            <h2 className='page-title'>Process</h2>
                            <p className='page-desc'>How It Works</p>
                            <span className='page-muted'>Bole nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conididunt ut labore et dolore magna aliqua ut enim ad minim veniam</span>
                        </div>
                        <div className="process">
                            <article className='process-item'>
                                <div className="process-icon">
                                    {ProcessList.map((ProcessItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 0 && <img src={ProcessItem.img} alt="" />}
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
                                <div className="process-title">
                                    {ProcessList.map((ProcessItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 0 && <h2>{ProcessItem.title}</h2>}
                                            </React.Fragment>
                                        );
                                    })}
                                    {ProcessList.map((ProcessItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 0 && <p>{ProcessItem.desc}</p>}
                                            </React.Fragment>
                                        );
                                    })}
                                    <div className="process-number">
                                        <span className='process-num-light'>
                                            {ProcessList.map((ProcessItem, key) => {
                                                return (
                                                    <React.Fragment key={key}>
                                                        {key === 0 && <p className='process-num'>{ProcessItem.number}</p>}
                                                    </React.Fragment>
                                                );
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </article>
                            <article className='process-item'>
                                <div className="process-icon">
                                    {ProcessList.map((ProcessItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 1 && <img src={ProcessItem.img} alt="" />}
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
                                <div className="process-title">
                                    {ProcessList.map((ProcessItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 1 && <h2>{ProcessItem.title}</h2>}
                                            </React.Fragment>
                                        );
                                    })}
                                    {ProcessList.map((ProcessItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 1 && <p>{ProcessItem.desc}</p>}
                                            </React.Fragment>
                                        );
                                    })}
                                    <div className="process-number">
                                        <span className='process-num-light'>
                                            {ProcessList.map((ProcessItem, key) => {
                                                return (
                                                    <React.Fragment key={key}>
                                                        {key === 1 && <p className='process-num'>{ProcessItem.number}</p>}
                                                    </React.Fragment>
                                                );
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </article>
                            <article className='process-item'>
                                <div className="process-icon">
                                    {ProcessList.map((ProcessItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 2 && <img src={ProcessItem.img} alt="" />}
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
                                <div className="process-title">
                                    {ProcessList.map((ProcessItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 2 && <h2>{ProcessItem.title}</h2>}
                                            </React.Fragment>
                                        );
                                    })}
                                    {ProcessList.map((ProcessItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 2 && <p>{ProcessItem.desc}</p>}
                                            </React.Fragment>
                                        );
                                    })}
                                    <div className="process-number">
                                        <span className='process-num-light'>
                                            {ProcessList.map((ProcessItem, key) => {
                                                return (
                                                    <React.Fragment key={key}>
                                                        {key === 2 && <p className='process-num'>{ProcessItem.number}</p>}
                                                    </React.Fragment>
                                                );
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </article>
                            <article className='process-item'>
                                <div className="process-icon">
                                    {ProcessList.map((ProcessItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 3 && <img src={ProcessItem.img} alt="" />}
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
                                <div className="process-title">
                                    {ProcessList.map((ProcessItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 3 && <h2>{ProcessItem.title}</h2>}
                                            </React.Fragment>
                                        );
                                    })}
                                    {ProcessList.map((ProcessItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 3 && <p>{ProcessItem.desc}</p>}
                                            </React.Fragment>
                                        );
                                    })}
                                    <div className="process-number">
                                        <span className='process-num-light'>
                                            {ProcessList.map((ProcessItem, key) => {
                                                return (
                                                    <React.Fragment key={key}>
                                                        {key === 3 && <p className='process-num'>{ProcessItem.number}</p>}
                                                    </React.Fragment>
                                                );
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section className='page bg-light'>
                <div className="container">
                    <div className="never-inner">
                        <div className="page-text">
                            <h2 className='page-title'>Testimonial</h2>
                            <p className='page-desc'>What People Say</p>
                            <span className='page-muted'>Bole nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conididunt ut labore et dolore magna aliqua ut enim ad minim veniam</span>
                        </div>
                        <div className="team">
                            <div className="team-img">
                                <img src={Team} alt="" />
                            </div>
                            <div className="team-carousel">
                                <p>MLİSÖİLVÖSALVSA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
