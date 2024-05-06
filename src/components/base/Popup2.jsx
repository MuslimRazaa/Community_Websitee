import React, { useState, useEffect } from 'react';
import ButtonImage from '../../assets/images/Button-01.svg'; // Update path as necessary
import SalwaLogo from '../../assets/images/salwa-inverted-logo.png'; // Update path as necessary
import BookImage from '../../assets/images/Pop-Up-Salwa-02.png'; // Update path as necessary

function Popup2({text}) {
    const [isDesktopModalsec, setIsDesktopModalsec] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktopModalsec(window.innerWidth > 835);
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

    return (
        <>
            <button type="button" className="btn btn-default main-menu-btn btn-font main-menu-btn-1" id="btnClick" data-bs-toggle="modal" data-bs-target={isDesktopModalsec ? "#exampleModalDet" : "#MobileModalsec"}>
               {text}
            </button>
            {isDesktopModalsec ? (
                <DesktopModalsec />
            ) : (
                <MobileModalsec />
            )}
        </>
    );
}

function DesktopModalsec() {
    return (
        <div className="modal fade modal-cautom myresmodal" id="exampleModalDet" tabIndex="-1" aria-labelledby="exampleModalDeLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content popup1 popup2hy">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-5 d-flex desihy">
                                    <div className='circlies'>
                                        <img src={BookImage} alt="Book" />
                                    </div>
                                </div>
                                <div className="col-md-6 pop1-detal">
                                    <h4>Submit Your Detail to <br/>Get Free PDF Brochure</h4>
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
                                            <div className='col-12 resq-btn'><img src={ButtonImage} alt="Request" /></div>
                                            <div className="col-md-12 salwapop-logo">
                                                <img src={SalwaLogo} alt="Salwa Logo" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ position: "absolute", top: "10px", right: "10px" }}></button>
            </div>
    );
}

function MobileModalsec() {
    return (
        <div className="modal modalrewala mobModal fade modal-cautom myresmodalrespo" id="MobileModalsec" tabIndex="-1" aria-labelledby="MobileModalsecLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered marganset">
                    <div className="modal-content popup1 desihy apnihei">
                        <div className="container-fluid text-center">
                            <img src={BookImage} className='boyhyre' />
                            <div className="row">
                                <div className="col-md-12 text-center pop1-detalapnyd">
                                    <h4>Submit Your Detail to <br/>Get Free PDF Brochure</h4>
                                    <p>Our Agent Will Help You.</p>
                                    <form className='reposivefrom'>
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
                                            <div className='col-12 resq-btn'>
                                                <img src={ButtonImage} alt="Request" className='salwaresdsa12' />
                                                <img src={SalwaLogo} alt="Salwa Logo" className='salwaresdsa'/>
                                                </div>
                                            <div className="col-md-12 salwapop-logo">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ position: "absolute", top: "10px", right: "10px" }}></button>
        </div>
    );
}
  
export default Popup2;
