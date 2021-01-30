import React, { useState } from 'react';
import '../../assets/Css/main.css';
import Select from 'react-select';
import { Modal, Button } from "react-bootstrap";
import headerPhoto from '../../assets/img/headerImg.png';
import CountUp from 'react-countup';
import client1 from '../../assets/img/clients/client-1.png'
import client2 from '../../assets/img/clients/client-2.png'
import client3 from '../../assets/img/clients/client-3.png'
import client4 from '../../assets/img/clients/client-4.png'
import client5 from '../../assets/img/clients/client-5.png'
import client6 from '../../assets/img/clients/client-6.png'

import service1 from '../../assets/img/service/card1.jpg'
import service2 from '../../assets/img/service/card2.jpg'
import service3 from '../../assets/img/service/card3.jpg'
import service4 from '../../assets/img/service/card4.jpg'

import feedback1 from '../../assets/img/feedback/feedback1.jpg'
import feedback2 from '../../assets/img/feedback/feedback2.jpg'
import feedback3 from '../../assets/img/feedback/feedback3.jpg'
import feedback4 from '../../assets/img/feedback/feedback4.jpg'
import feedback5 from '../../assets/img/feedback/feedback5.jpg'

import about1 from '../../assets/img/about/about1.jpg'
import about2 from '../../assets/img/about/about2.jpg'
import about3 from '../../assets/img/about/about3.jpg'
import about4 from '../../assets/img/about/about4.jpg'
import about5 from '../../assets/img/about/about5.jpg'



const Home = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    var ServiceList = [
        {
            value:0,
            label:"None"
        },
        {
            value:1,
            label:"test 1"
        },
        {
            value:2,
            label:"test 2"
        },
        {
            value:3,
            label:"test 3"
        },
        {
            value:4,
            label:"test 4"
        },
        {
            value:5,
            label:"test 5"
        },
        {
            value:6,
            label:"test 6"
        },
        {
            value:7,
            label:"test 7"
        },
        {
            value:8,
            label:"test 8"
        }
    ];

    const[result,ddvalue]=useState(ServiceList.label);
    const ddHandler = e =>{
        ddvalue(e.label);
        console.log(result);
    }

    const handleBlur = e =>{
        const newInfo={...info};
        newInfo[e.target.name]=e.target.value;
        setInfo(newInfo);
        console.log(newInfo);  
    }

    const handleSubmit = () => {
        const newServiceInfo = { ...info };
        fetch('https://morning-hamlet-24682.herokuapp.com/contactInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newServiceInfo),
        })

    }

  

    return (
        <div>
            <div className="main container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">fairsoft</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="" alt="" />
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div style={{ height: '400px' }} className="container-fluid row align-items-center" data-aos="fade-right">
                    <div className="col-lg-6 py-5 py-lg-0 order-2 order-lg-1">
                        <h1 style={{ fontWeight: 'bolder' }}>Lets Grow Your Brand To The Next Level</h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas est excepturi explicabo aliquid obcaecati, alias iste eligendi tenetur nihil, rem pariatur cum itaque, laudantium dolore.</p>
                        <div>
                            <Button variant="primary" onClick={handleShow}>
                                Contact Us
                            </Button>

                            <Modal
                                show={show}
                                onHide={handleClose}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title">
                                <Modal.Header closeButton>
                                    <Modal.Title>Contact Us</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <section id="contact" className="contact section-bg">
                                        <div className="container">

                                            <div className="section-title">
                                                <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-12 mt-4 mt-lg-0">
                                                    <form role="form" className="php-email-form w-100" data-aos="fade-up">
                                                        <div className="form-row">
                                                            <div className="col-md-6 form-group">
                                                                <input onBlur={handleBlur} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                                <div className="validate"></div>
                                                            </div>
                                                            <div className="col-md-6 form-group">
                                                                <input onBlur={handleBlur} type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone Number" data-rule="phone" data-msg="Please enter a valid Phone number" />
                                                                <div className="validate"></div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <input onBlur={handleBlur} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="minlen:4" data-msg="Please enter valid Email" />
                                                            <div className="validate"></div>
                                                        </div>
                                                        <div className="form-group">
                                                            <input onBlur={handleBlur} type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                            <div className="validate"></div>
                                                        </div>
                                                        <div className="form-group">
                                                          <Select options={ServiceList} onChange={ddHandler} placeholder="Select Service"></Select>
                                                        </div>
                                                        <div className="space-50">&nbsp;</div>
                                                        <div className="form-group">
                                                            <textarea onBlur={handleBlur} className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                                            <div className="validate"></div>
                                                        </div>
                                                        <div className="text-center">
                                                            <button type="submit" onClick={handleSubmit}>Send Message</button>
                                                        </div>
                                                    </form>
                                                </div>

                                            </div>

                                        </div>
                                    </section>

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancel
                                     </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                        <img src={headerPhoto} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            {/* ################################################Service section Start######################################### */}
            <div className="space-50">&nbsp;</div>
            {/* Client part */}
            <section id="clients" className="clients section-bg">
                <div className="container">

                    <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="client-logo">
                                <img src={client1} className="img-fluid" alt="" data-aos="flip-right"></img>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="client-logo">
                                <img src={client2} className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="100"></img>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="client-logo">
                                <img src={client3} className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="200"></img>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="client-logo">
                                <img src={client4} className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="300"></img>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="client-logo">
                                <img src={client5} className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="400"></img>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="client-logo">
                                <img src={client6} className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="500"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* client part end */}

            <div className="space-50">&nbsp;</div>

            {/* Service part start */}
            <div id="service" className="container">
                <div className="page-header text-center">
                    <h2>Our Services</h2>
                </div>
                <h4 className="sub-title space-left">One of the best platform for the best services</h4>
                <div className="space-50">&nbsp;</div>
                <div className="row">
                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={service1} alt=""></img>
                            <div className="card-block">
                                <h3 className="card-title">Card Title</h3>
                                <p className="card-text">Vestibulum ac fringilla ligula. Nam volutpat  est non scelerisque.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={service2} alt=""></img>
                            <div className="card-block text-center">
                                <h3 className="card-title">Card Title</h3>
                                <p className="card-text">Vestibulum ac fringilla ligula. Nam volutpat  est non scelerisque.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={service3} alt=""></img>
                            <div className="card-block text-center">
                                <h3 className="card-title">Card Title</h3>
                                <p className="card-text">Vestibulum ac fringilla ligula. Nam volutpat  est non scelerisque.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={service4} alt=""></img>
                            <div className="card-block text-center">
                                <h3 className="card-title">Card Title</h3>
                                <p className="card-text">Vestibulum ac fringilla ligula. Nam volutpat  est non scelerisque.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="space-50">&nbsp;</div>

                <div className="row">
                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={service1} alt=""></img>
                            <div className="card-block">
                                <h3 className="card-title">Card Title</h3>
                                <p className="card-text">Vestibulum ac fringilla ligula. Nam volutpat  est non scelerisque.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={service2} alt=""></img>
                            <div className="card-block text-center">
                                <h3 className="card-title">Card Title</h3>
                                <p className="card-text">Vestibulum ac fringilla ligula. Nam volutpat  est non scelerisque.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={service3} alt=""></img>
                            <div className="card-block text-center">
                                <h3 className="card-title">Card Title</h3>
                                <p className="card-text">Vestibulum ac fringilla ligula. Nam volutpat  est non scelerisque.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={service4} alt=""></img>
                            <div className="card-block text-center">
                                <h3 className="card-title">Card Title</h3>
                                <p className="card-text">Vestibulum ac fringilla ligula. Nam volutpat  est non scelerisque.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Service part end */}
            {/* Our work section start */}
            {/* <section id="why-us">
                <div className="container" data-aos="fade-up">
                    <header className="section-header">
                        <h3>Our Projects</h3>
                    </header>
                    <div className="row counters" data-aos="fade-up" data-aos-delay="100">

                        <div className="col-lg-3 col-6 text-center">
                            <CountUp start={0} end={274} duration={3} autoplay={true}></CountUp>
                            <p>Happy Clients</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <CountUp start={0} end={421} duration={3}></CountUp>
                            <p>Completed Projects</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <CountUp start={0} end={364} duration={3}></CountUp>
                            <p>Running Projects</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <CountUp start={0} end={18} duration={3}></CountUp>
                            <p>Hours Of Support</p>
                        </div>

                    </div>

                </div>
            </section> */}
            <div className="space-50">&nbsp;</div>
            {/* our work section end */}
            {/* ################################################Service section End######################################### */}

            {/* #################################################about and contact section start######################################## */}
            <section id="clientFeedback" className="testimonials section-bg">
                <div className="container text">
                    <div id="section-title-text" className="section-title" data-aos="fade-up">
                        <h2 id="section-title-text" className="pt-5">Clients Feedback</h2>
                    </div>

                    <div id="carouselClientControls" className="carousel slide" data-ride="carousel" data-interval="9000">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src={feedback1} className="testimonial-img" alt=""></img>
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src={feedback2} className="testimonial-img" alt=""></img>
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                             Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                             <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src={feedback3} className="testimonial-img" alt=""></img>
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                             Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                             <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src={feedback4} className="testimonial-img" alt=""></img>
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                             Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                             <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src={feedback5} className="testimonial-img" alt=""></img>
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                             Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                             <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselClientControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselClientControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* client section end */}
            <div className="space-50">&nbsp;</div>
            {/* Our team section start */}
            <section id="about" className="about section-bg">
                <div className="container text">
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="pb-5">Our Team</h2>
                    </div>
                    <div id="carouselAboutControl1" className="carousel slide" data-ride="carousel" data-interval="5000">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="testimonial-wrap">
                                    <div className="d-flex flex-row testimonial-item col-12">
                                        <div className="col-4 d-flex justify-content-center">
                                            <div className="">
                                                <img src={about1} className="testimonial-img" alt=""></img><br />
                                                <h3>Saul Goodman1</h3>
                                                <h4>Ceo &amp; Founder</h4>
                                            </div>
                                        </div>
                                        <div className="col-8 textParagraph">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                                                    suscipit
                                                    rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen
                                                    aliquam,
                                                    risus at semper.
                                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial-wrap">
                                    <div className="d-flex flex-row testimonial-item col-12">
                                        <div className="col-4 d-flex justify-content-center">
                                            <div className="">
                                                <img src={about2} className="testimonial-img" alt=""></img><br />
                                                <h3>Saul Goodman2</h3>
                                                <h4>Ceo &amp; Founder</h4>
                                            </div>
                                        </div>
                                        <div className="col-8 textParagraph">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                                                suscipit
                                                rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen
                                                aliquam,
                                                risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial-wrap">
                                    <div className="d-flex flex-row testimonial-item col-12">
                                        <div className="col-4 d-flex justify-content-center">
                                            <div className="">
                                                <img src={about3} className="testimonial-img" alt=""></img><br />
                                                <h3>Saul Goodman3</h3>
                                                <h4>Ceo &amp; Founder</h4>
                                            </div>
                                        </div>
                                        <div className="col-8 textParagraph">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                                                suscipit
                                                rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen
                                                aliquam,
                                                risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselAboutControl1" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselAboutControl1" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    {/* <!-- ############ --> */}
                    <div className="space-50 ">&nbsp;</div>
                    <hr className="style11"></hr>
                    <div id="carouselAboutControl2" className="carousel slide" data-ride="carousel" data-interval="6000">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="testimonial-wrap">
                                    <div className="d-flex flex-row testimonial-item col-12">
                                        <div className="col-8 d-flex justify-content-left">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                                                suscipit
                                                rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen
                                                aliquam,
                                                risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                        </div>
                                        <div className="col-4 d-flex justify-content-center">
                                            <div className="">
                                                <img src={about5} className="testimonial-img" alt=""></img><br />
                                                <h3>Saul Goodman4</h3>
                                                <h4>Ceo &amp; Founder</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial-wrap">
                                    <div className="d-flex flex-row testimonial-item col-12">
                                        <div className="col-8">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                                                suscipit
                                                rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen
                                                aliquam,
                                                risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                        </div>
                                        <div className="col-4 d-flex justify-content-center">
                                            <div className="">
                                                <img src={about4} className="testimonial-img" alt=""></img><br />
                                                <h3>Saul Goodman5</h3>
                                                <h4>Ceo &amp; Founder</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial-wrap">
                                    <div className="d-flex flex-row testimonial-item col-12">
                                        <div className="col-8">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                                                suscipit
                                                rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen
                                                aliquam,
                                                risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                        </div>
                                        <div className="col-4 d-flex justify-content-center">
                                            <div className="">
                                                <img src={about5} className="testimonial-img" alt=""></img><br />
                                                <h3>Saul Goodman6</h3>
                                                <h4>Ceo &amp; Founder</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselAboutControl2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselAboutControl2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    {/* <!-- ################ --> */}
                </div>
            </section>
            {/* Our team section end */}
            {/* about section end */}
            {/* our journey section start */}
            <div className="space-50">&nbsp;</div>
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase mb-5">Our Journey</h2>
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={about1} alt="" />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2009-2011</h4>
                                    <h4 className="subheading">Our Humble Beginnings</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={about2} alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>March 2011</h4>
                                    <h4 className="subheading">Our Humble Beginnings</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={about3} alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>December 2012</h4>
                                    <h4 className="subheading">Our Humble Beginnings</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={about4} alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>July 2014</h4>
                                    <h4 className="subheading">Our Humble Beginnings</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Journey!
                            </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            {/* our journey section end */}
            {/* contact section start */}
            <div className="space-50">&nbsp;</div>
            <section id="contact" className="contact section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2 data-aos="fade-in">Contact</h2>
                        <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-box" data-aos="fade-up">
                                        <i className="bx bx-map"></i>
                                        <h3>Our Address</h3>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                                        <i className="bx bx-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                                        <i className="bx bx-phone-call"></i>
                                        <h3>Call Us</h3>
                                        <p>+1 5589 55488 55</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <form role="form" className="php-email-form w-100" data-aos="fade-up">
                                <div className="form-row">
                                    <div className="col-md-6 form-group">
                                        <input onBlur={handleBlur} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input onBlur={handleBlur} type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone Number" data-rule="phone" data-msg="Please enter a valid Phone number" />
                                        <div className="validate"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input onBlur={handleBlur} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="minlen:4" data-msg="Please enter valid Email" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <input onBlur={handleBlur} type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    
                                    <Select options={ServiceList} onChange={ddHandler} placeholder="Select Service"></Select>
                                    
                                </div>
                                <div className="space-50">&nbsp;</div>
                                <div className="form-group">
                                    <textarea onBlur={handleBlur} className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className="text-center">
                                    <button onClick={handleSubmit} type="submit">Send Message</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact section end */}
            <div className="space-50">&nbsp;</div>

            {/* footer section start */}
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-info">
                                <h3>Fairsoft</h3>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Terms of service</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>
                                    House 49,Block E
                                    Banani,Dhaka,Bangladesh <br />
                                    <strong>Phone:</strong> +1 xx xxxx xxxxx<br />
                                    <strong>Email:</strong> info@example.com
                                </p>
                                <div className="social-links social-network social-circle">
                                    <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                    <a href="#" className="gmail"><i className="fa fa-envelope"></i></a>
                                    <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
                                <form action="" method="post">
                                    <input type="email" name="email"></input>
                                    <input type="submit" value="Subscribe"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong>Fairsoft</strong>. All Rights Reserved
                    </div>
            </div>
            </footer>
            {/* footer section end */}
            {/* #################################################about and contact section end ##########################################*/}
        </div>
    );
};

export default Home;