import React from 'react';
import About from "../assets/img/about-us.jpg";
import { AboutList } from "../helpers/About";
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <section className='page page-p'>
                <div className="container-right">
                    <div className="page-inner">
                        <div className="page-text">
                            <h2 className='page-title'>Learn more about us</h2>
                            <p className='page-desc'>World leading agency that work for all</p>
                            <span className='page-muted'>Phasellus seiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                            <br /><br />
                            <span className='page-muted'>Bole nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex</span>
                            <div className="page-btn">
                                <Link to="/" className='btn'>View More</Link>
                            </div>
                        </div>
                        <div className="page-img">
                            <img src={About} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='page bg-light page-mp'>
                <div className="container">
                    <div className="page-inner">
                        <div className="page-img">
                            <div className="split-img">
                                <article className='split-img-item'>
                                    <h2>20+</h2>
                                    <p>World Famous Products</p>
                                </article>
                                <article className='split-img-item'>
                                    <h2>50+</h2>
                                    <p>Operating Countries</p>
                                </article>
                                <article className='split-img-item'>
                                    <h2>5M</h2>
                                    <p>User Community</p>
                                </article>
                                <article className='split-img-item'>
                                    <h2>2B</h2>
                                    <p>Yearly Revenue</p>
                                </article>
                            </div>
                        </div>
                        <div className="page-text">
                            <h2 className='page-title'>Learn more about us</h2>
                            <p className='page-desc'>Numbers always tells the truth</p>
                            <span className='page-muted'>Phasellus seiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='page page-mp'>
                <div className="container">
                    <div className="page-inner flex-wrap gap-50">
                        <div className="page-text flex-40">
                            <h2 className='page-title'>Our Speciality</h2>
                            <p className='page-desc'>Numbers always tells the truth</p>
                            <span className='page-muted'>Phasellus seiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam llamco laboris nisi ut aliquip ex ea commodo</span>
                        </div>
                        <div className="page-text flex-50">
                            <div className="page-box">
                                <article className="page-box-item">
                                    {AboutList.map((AboutItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 0 && <img src={AboutItem.img} alt='' />}
                                            </React.Fragment>
                                        );
                                    })}
                                    <div className="page-box-item-text">
                                        {AboutList.map((AboutItem, key) => {
                                            return (
                                                <React.Fragment key={key}>
                                                    {key === 0 && <h2>{AboutItem.title}</h2>}
                                                </React.Fragment>
                                            );
                                        })}
                                    </div>
                                    {AboutList.map((AboutItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 0 && <p className='page-muted'>{AboutItem.desc}</p>}
                                            </React.Fragment>
                                        );
                                    })}
                                </article>
                                <article className="page-box-item">
                                    {AboutList.map((AboutItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 1 && <img src={AboutItem.img} alt='' />}
                                            </React.Fragment>
                                        );
                                    })}
                                    <div className="page-box-item-text">
                                        {AboutList.map((AboutItem, key) => {
                                            return (
                                                <React.Fragment key={key}>
                                                    {key === 1 && <h2>{AboutItem.title}</h2>}
                                                </React.Fragment>
                                            );
                                        })}
                                    </div>
                                    {AboutList.map((AboutItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 1 && <p className='page-muted'>{AboutItem.desc}</p>}
                                            </React.Fragment>
                                        );
                                    })}
                                </article>
                                <article className="page-box-item">
                                    {AboutList.map((AboutItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 2 && <img src={AboutItem.img} alt='' />}
                                            </React.Fragment>
                                        );
                                    })}
                                    <div className="page-box-item-text">
                                        {AboutList.map((AboutItem, key) => {
                                            return (
                                                <React.Fragment key={key}>
                                                    {key === 2 && <h2>{AboutItem.title}</h2>}
                                                </React.Fragment>
                                            );
                                        })}
                                    </div>
                                    {AboutList.map((AboutItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 2 && <p className='page-muted'>{AboutItem.desc}</p>}
                                            </React.Fragment>
                                        );
                                    })}
                                </article>

                                <article className="page-box-item">
                                    {AboutList.map((AboutItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 3 && <img src={AboutItem.img} alt='' />}
                                            </React.Fragment>
                                        );
                                    })}
                                    <div className="page-box-item-text">
                                        {AboutList.map((AboutItem, key) => {
                                            return (
                                                <React.Fragment key={key}>
                                                    {key === 3 && <h2>{AboutItem.title}</h2>}
                                                </React.Fragment>
                                            );
                                        })}
                                    </div>
                                    {AboutList.map((AboutItem, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {key === 3 && <p className='page-muted'>{AboutItem.desc}</p>}
                                            </React.Fragment>
                                        );
                                    })}
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='page never bg-light'>
                <div className="container">
                    <div className="page-inner never-inner">
                        <div className="page-text">
                            <h2 className='page-title'>Team Members</h2>
                            <p className='page-desc'>Our Amazing Team</p>
                            <span className='page-muted'>Phasellus seiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <article className="">

                            </article>
                            <article className="">
                                
                            </article>
                            <article className="">
                                
                            </article>
                            <article className="">
                                
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
