import requast from '../../assets/images/Button-01.svg'
import salwlogo from '../../assets/images/salwa-inverted-logo.png'
import React, { useState, useEffect } from 'react';

function PopupCards({text}) {
    const [isDesktopModal, setIsDesktopModal] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktopModal(window.innerWidth > 835);
        };

        // Initial check on mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleView = () =>{
         setIsDesktopModal(!isDesktopModal)
         console.log(isDesktopModal, " isDesktopModal----------------")
    }


    return (
        <>
            <div type="button"  id="btnClick" data-bs-toggle="modal" data-bs-target={isDesktopModal ? "#exampleModalpop3" : "#mobileModal"}>
            {text}
            </div>
            {/* <div type="button" className="btn btn-primary" id="btnClick" data-bs-toggle="modal" data-bs-target={isDesktopModal ? "#exampleModalpop1" : "#mobileModal"}>
            {text}
            </div> */}
            {isDesktopModal ? (
                <DesktopModal />
            ) : (
                <MobileModal />
            )}

            {/* <button onClick={handleView}></button> */}

               {isDesktopModal ? (
                <DesktopModal />
            ) : (
                <MobileModal />
            )}
        </>
    );
}

function DesktopModal() {
    return (
        <div className="modal fade modal-cautom myresmodal" id="exampleModalpop3" tabIndex="-1" aria-labelledby="exampleModalpop3Label" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content popup1">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 popup1-img d-flex">
                                <div className="col-md-7 img-katext">
                                    <h5>Faisal Iqbal</h5>
                                    <p>Senior Sales Advisor on<br />Salwa Real Estate</p>
                                </div>
                            </div>
                            <div className="col-md-7 pop1-detal">
                                <h4>REQUEST CALLBACK</h4>
                                <p>Our Agent Will Help You.</p>
                                <form>
                                    <div className="mb-2">
                                        <label htmlFor="fullName" className="form-label form-labelapnahy">Full Name</label>
                                        <input type="text" className="form-control custom-input" id="fullName" placeholder="Your Name" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="phone" className="form-label form-labelapnahy">Phone</label>
                                        <input type="text" className="form-control custom-input" id="phone" placeholder="Phone" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email" className="form-label form-labelapnahy">Email</label>
                                        <input type="text" className="form-control custom-input" id="email" placeholder="Email" />
                                    </div>
                                    <div className='d-flex'>
                                        <div className='col-12 resq-btn'><img src={requast} alt="Request Button" /></div>
                                        <div className="col-md-12 salwapop-logo">
                                            <img src={salwlogo} alt="Salwa Logo" />
                                        </div>
                                    </div>
                                </form>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ position: "absolute", top: "10px", right: "10px" }}></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MobileModal() {
    return (
        <div className="modal fade modal-cautom myresmodal" id="mobileModal" tabIndex="-1" aria-labelledby="mobileModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered marganset">
                    <div className="modal-content popup1">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 pop1-detal text-center">
                                    <h4>REQUEST CALLBACK</h4>
                                    <p>Our agent will help you.</p>
                                    <form className='reposivefrom'>
                                        <div className="mb-2">
                                            <label htmlFor="fullName" className="form-label form-labelapnahy">Full Name</label>
                                            <input type="text" className="form-control custom-input" id="fullName" placeholder="Your Name" />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="fullName" className="form-label form-labelapnahy">Phone</label>
                                            <input type="text" className="form-control custom-input" placeholder="Phone" />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="fullName" className="form-label form-labelapnahy">Email</label>
                                            <input type="text" className="form-control custom-input" placeholder="Email" />
                                        </div>
                                        <div className='d-flex'>
                                        <div className='col-12 resq-btn'><img src={requast}/></div>
                                        <div className="col-md-12 salwapop-logo">
                                    </div>
                                    </div>
                                    </form>
                                </div>
                                <div className="container-fluid d-flex reposive-imgtext">
                                    <div className="col-md-4 popup1-img"></div>
                                    <div className="col-md-8 repossive-popo">
                                        <div className="disply-block img-katext">
                                            <h5>Faisal Iqbal</h5>
                                            <p>Senior Sales Advisor on<br />Salwa Real Estate</p>
                                        </div>
                                        <img src={salwlogo}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ position: "absolute", top: "10px", right: "10px" }}></button>
        </div>
    );
}
export default PopupCards
