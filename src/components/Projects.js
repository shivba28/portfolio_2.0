import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import front_img from '../assets/Images/project_front.png';
import '../assets/CSS/projects.css';
import Lottie from 'lottie-react';
import { Row, Col, Modal } from "react-bootstrap";
import { useEffect, useRef, useState } from 'react';

import constructionData from '../assets/Lottie/CCDP.json';
import school from '../assets/Lottie/trimmed_school.json';
import pacman from '../assets/videos/pacman.mp4';
import ans from '../assets/Lottie/ANS.json';
import valentines from '../assets/Lottie/Valentine.json';
import chatbot from '../assets/Lottie/Chatbot.json';
import videoGame from '../assets/Lottie/video-game.json';
import miniProjects from '../assets/Lottie/Mini-projects.json';
import portfolio from '../assets/Lottie/Portfolio.json';
import propChain1 from '../assets/Lottie/PropChain-1.json';
import propChain2 from '../assets/Lottie/PropChain-2.json';


export const Project = () => {

    gsap.registerPlugin(ScrollTrigger);
    const [selectedProject, setSelectedProject] = useState(null);

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.scroll-wrapper',
                start: 'top top',
                end: "+=150%",
                pin: true,
                scrub: true,
            }
        })
        .to(".scroll-wrapper img", {
            scale: 5,
            z: 350,
            transformOrigin: "center center",
            ease: "power1.inOut"
          })
        .to(
            '.section.hero',
            {
                scale:1.1,
                transformOrigin: 'center center',
                ease: 'power1.inOut'
            },
        );
    });


        // Project data array (title, description, media) for simplicity
        const projects = [
            { 
                id: 1, title: "CCDP", animationData: constructionData, type: "lottie",
                link:"https://github.com/shivba28/CCDP",
                Desc:"A robust construction project management tool designed to streamline documentation," + " " +
                "progress tracking, and collaborative workflows," + " " +
                "facilitating efficient project oversight from inception to completion."
            },
            { id: 2, title: "School Websites", animationData: school, type: "lottie",
                link:"https://github.com/shivba28/GardenCms",
                Desc:"Developed a comprehensive platform for school websites with responsive design and CMS integration," + " " + 
                "enabling schools to manage content and showcase information seamlessly for students, parents, and staff."
            },
            { id: 3, title: "Pacman-3D", video: pacman, type: "video",
                link:"https://github.com/shivba28/PacMan3D",
                Desc:"A 3D twist on the classic Pacman game, this project features enhanced graphics and interactive elements," + " " +
                "offering players an immersive experience with challenging mazes and power-ups."
            },
            { id: 4, title: "Adopt Not Shop", animationData: ans, type: "lottie",
                link:"https://github.com/shivba28/ANS",
                Desc:"An application promoting animal adoption by providing resources and profiles of pets," + " " + 
                "helping users find adoptable pets and raise awareness about shelter animals."
            },
            { id: 5, title: "Valentine's Game", animationData: valentines, type: "lottie", 
                link:"https://github.com/shivba28/v-game-app",
                Desc:"A lighthearted, interactive game celebrating Valentine's Day," + " " +
                "designed to engage users with festive mini-games and challenges centered around themes of love and friendship."
            },
            { id: 6, title: "Chat-Bot", animationData: chatbot, type: "lottie", 
                link:"https://github.com/shivba28/chat-bot", 
                Desc:"An AI-driven chatbot that facilitates seamless user interactions," + " " +
                "providing assistance and answers to frequently asked questions across various domains, with a focus on natural language processing."
            },
            { id: 7, title: "Portfolio", animationData: portfolio, type: "lottie", 
                link:"https://github.com/shivba28/portfolio_2.0", 
                Desc:"A personal portfolio showcasing development skills, projects," + " " +
                "and accomplishments in a visually appealing format, serving as an online resume and professional introduction."
            },
            { id: 8, title: "Mini Projects", animationData: miniProjects, type: "lottie", 
                link:"https://github.com/shivba28/Mini-Projects", 
                Desc:"A collection of innovative small-scale projects designed to explore new technologies," + " " + 
                "experiment with creative ideas, and develop unique, functional solutions to common challenges."
            },
            { id: 9, title: "Video Game Rental", animationData: videoGame, type: "lottie", 
                link:"https://github.com/shivba28/Game_Rentel", 
                Desc:"A platform for renting video games that allows users to browse," + " " +
                "select, and rent games easily, while managing inventory and tracking rental history effectively."
            },
            { id: 10, title: "Prop-Chain", animationData: propChain1, animationData2: propChain2, type: "lottie-prop", 
                link:"https://github.com/shivba28/PropChain",
                Desc:"A blockchain-inspired project aimed at enhancing property management by securely recording transactions," + " " + 
                "managing ownership records, and ensuring transparent real estate processes."
            }
            // Add other projects as needed
        ];
    
        // Open modal and set selected project
        const openModal = (project) => setSelectedProject(project);
    
        // Close modal by clearing the selected project
        const closeModal = () => setSelectedProject(null);

    return(
        
        <section className="project" >
            {/* <div className="spacer" style={{height: "10px"}}></div> */}
            <div className="scroll-wrapper">
                <div className="scroll-content">
                    <section className="section hero"></section>
                </div>
                <div className="image-container">
                    <img src={front_img}/>
                </div>
            </div>
            <div className="project-content">
                <section className="section" id="project">
                    <div className="title text-center pt-4 bg-gradient">
                        <div className="slogan-left"><h1 className="left">MY</h1></div>
                        <div className="slogan-right"><h1 className="right">PROJECTS</h1></div>
                    </div>
                    <Row className="project-items my-3">
                    {projects.map((project, index) => (
                        <Col key={project.id} xs={12} sm={6} lg={4} className="m-auto">
                            <div className="project-item my-5" id={"project-"+project.id}>
                                <div className="project-item-active">
                                <a style={{height:"100%", width:"100%", position:"absolute"}} onClick={() => openModal(project)}></a>
                                </div>
                                <div className="base"></div>
                                <div className="lottie-figure">
                                    {(() => {
                                        switch (project.type) {
                                            case 'lottie':
                                            return (
                                                <Lottie animationData={project.animationData} loop={true} autoplay={true} />
                                            );
                                            case "video" :
                                            return (
                                                <div>
                                                    <video loop muted playsInline autoPlay>
                                                        <source src={project.video} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                    <div className="video-base"></div>
                                                </div>
                                            );
                                            case "lottie-prop" :
                                                return (
                                                    <div>
                                                        <Lottie animationData={project.animationData} loop={true} autoplay={true} />
                                                        <Lottie className="part-2" animationData={project.animationData2} loop={true} autoplay={true} style={{height:75, width:75 }} />
                                                    </div>
                                                );
                                            default:
                                                return null; // Optional: handle unexpected types
                                                }
                                    })()}
                                </div>
                                <div className="project-title noselect">{project.title}</div>
                            </div>
                        </Col>
                    ))}
                </Row>

            {/* Modal to display project info dynamically */}
            {selectedProject && (
                <Modal show onHide={closeModal} centered size="lg" className="projects-modal fade rounded">
                    <Modal.Header className="bg-black justify-content-center">
                        <Modal.Title className="text-center fs-1 rounded px-3">{selectedProject.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-black rounded-bottom">
                        <div className="project-modal-content row align-items-center">
                            <div className="info-section col-6 d-grid">
                                <p className="text-justify">{selectedProject.Desc}</p>
                                <a className="btn btn-dark mt-4" href={selectedProject.link} target="_blank" style={{zIndex:100, position:"relative"}}>Code</a>
                            </div>
                            <div className="media-section col-6" id={"project-"+selectedProject.id}>
                            {(() => {
                                switch (selectedProject.type) {
                                    case "lottie":
                                        return (
                                            <div className="lottie-figure">
                                                <Lottie animationData={selectedProject.animationData} loop autoplay />
                                            </div>
                                        );
                                    case "video" :
                                        return (
                                            <div>
                                                <video loop muted playsInline autoPlay> 
                                                    <source src={selectedProject.video} type="video/mp4"/>
                                                    Your browser does not support the video tag.
                                                </video>
                                                <div className="video-base"></div>
                                            </div>
                                        );
                                    case "lottie-prop" :
                                        return (
                                            <div className="lottie-figure m-auto">
                                            <Lottie animationData={selectedProject.animationData} loop={true} autoplay={true} />
                                            <Lottie className="part-2" animationData={selectedProject.animationData2} loop={true} autoplay={true} style={{height:75, width:75 }} />
                                        </div>
                                    );
                                    default:
                                        return null; // Optional: handle unexpected types
                                        }
                        })()}
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
                </section>
            </div>
        </section>
    )
}