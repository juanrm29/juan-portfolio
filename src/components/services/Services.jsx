import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <sections className="services section mt-5" id="services">
          <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Web <br /> Developer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More
                <i className="uil uil-arrow-right services__button"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Web Developer</h3>
                        <p className="services__modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Develop tailored web applications based on client requirements, ensuring a seamless user experience.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Create websites and applications that adapt to various devices for optimal viewing and interaction.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Utilize cutting-edge technologies such as React and Next.js to build dynamic and efficient front-end solutions.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Build robust and scalable back-end systems using Node.js and Express.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Develop secure and efficient web applications using the Laravel PHP framework.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Implement RESTful APIs to enable communication between different components, ensuring data exchange and functionality.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Employ industry-standard version control systems like Git to track changes, collaborate, and maintain code integrity.
                                </p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">UI/UX <br /> Designer</h3>
                </div>

                <span className="services__button " onClick={() => toggleTab(2)} >View More
                <i className="uil uil-arrow-right services__button"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">UI/UX Designer</h3>
                        <p className="services__modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Craft visually appealing and intuitive user interfaces that enhance the overall user experience.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Focus on creating a positive and seamless user journey through thoughtful and user-centric design principles.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Develop wireframes and prototypes to visualize and iterate on design concepts before implementation.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Conduct usability testing to gather valuable feedback and ensure the effectiveness of the design in real-world scenarios.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Optimize designs for various screen sizes and devices, ensuring a consistent and user-friendly experience.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Align UI/UX design with the client's brand identity, creating a cohesive and recognizable online presence.
                                </p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-database-alt services__icon"></i>
                    <h3 className="services__title">Data <br /> Scientist</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>View More
                <i className="uil uil-arrow-right services__button"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Data Scientist</h3>
                        <p className="services__modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Analyze and visualize client data to derive meaningful insights, facilitating informed decision-making.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Implement machine learning algorithms to develop predictive models, recommendation systems, and other intelligent solutions.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Apply statistical methods to interpret data patterns, trends, and relationships, providing a solid foundation for decision support.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Design and manage databases, utilizing both SQL and NoSQL technologies for efficient data storage and retrieval.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Handle large-scale data processing with technologies like Apache Spark, enabling the extraction of valuable insights from massive datasets.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Advise on data-driven strategies, helping clients leverage their data for competitive advantage and business growth.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Stay abreast of the latest advancements in data science and technology, ensuring the application of state-of-the-art solutions to client challenges.
                                </p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </sections>
  )
}

export default Services