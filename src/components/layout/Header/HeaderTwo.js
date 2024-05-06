import React from 'react'
import img from '../../../assets/images/img1.png'
import wadi from '../../../assets/images/wadi.jpg'
import walit from '../../../assets/images/price_grey.svg'
import dollar from '../../../assets/images/payment_grey.svg'
import Popup1 from '../../Popup1'
import Popup2 from '../../base/Popup2'


export default function HeaderTwo({ headerObj }) {
  
  return (
    <div>
      <section className="slider_section">
      <img src={img} alt="" className='background-img'/>
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-md-6 col-lg-6 ">
                        <div className="detail-box">
                            <h2>{headerObj.title}</h2>
                           {/* <h2 className="scale-up-center">
                           Luxury 3 & 4BR Townhouses in Emaar Arabian Ranches III
                           </h2>
                           <p>
                           May in Arabian Ranches III is one of the most recent projects by Emaar Properties, and will be the last community in the area.
                           </p> */}
                           <div className='col-lg-12 d-flex'>
                            <div className='col-lg-6 walit-sec d-flex'>
                                <img src={walit} alt="" />
                                <div className='walit-sec-1'>
                                <h4>AED {headerObj.startingPrice}</h4>
                                <p>Starting Price</p>
                                </div>
                            </div>
                            <div className='col-lg-6 walit-sec d-flex'>
                                <img src={dollar} alt="" />
                                <div className='walit-sec-1'>
                                <h4>{headerObj.paymentPlan}</h4>
                                <p>Payment Plan</p>
                                </div>
                            </div>
                           </div>
                           <div className='col-lg-12 mt-5 marahy'>
                            <a href=""><button className="btn btn-default main-menu-btn btn-font">
                           DISCOVER NEW PROJECT
                              </button>
                           </a>
                           {/* <a href=""><button className="btn btn-default main-menu-btn btn-font main-menu-btn-1">
                           GET MORE INFO
                              </button>
                              </a> */}
                              <Popup2 text="Get More Info"/>
                              </div>
                        </div>
                     </div>
                     <div className=' col-md-6 col-lg-6 m-0 p-0'>
                        <img src={headerObj?.coverImage} alt="" className='image-right-wadi' />
                     </div>
                  </div>
               </div>
      </section>
      {/* Responsive section */}
      <section className="slider_section-res" style={{display:'none'}}>
      <img src={img} alt="" className='background-img'/>
               <div className="container-fluid">
                  <div className="row">
                  <div className=' col-md-6 col-lg-6 m-0 p-0'>
                        <img src={headerObj?.coverImage} alt="" className='image-right-wadi' />
                     </div>
                     <div className="col-md-6 col-lg-6 ">
                        <div className="detail-box">
                            <h2>{headerObj.title}</h2>
                           {/* <h2 className="scale-up-center">
                           Luxury 3 & 4BR Townhouses in Emaar Arabian Ranches III
                           </h2>
                           <p>
                           May in Arabian Ranches III is one of the most recent projects by Emaar Properties, and will be the last community in the area.
                           </p> */}
                           <div className='col-lg-12'>
                            <div className='col-lg-6 walit-sec d-flex col-12'>
                                <img src={walit} alt="" />
                                <div className='walit-sec-1'>
                                <h4>AED {headerObj.startingPrice}</h4>
                                <p>Starting Price</p>
                                </div>
                            </div>
                            <div className='col-lg-6 walit-sec d-flex col-12'>
                                <img src={dollar} alt="" />
                                <div className='walit-sec-1'>
                                <h4>AED {headerObj.paymentPlan}</h4>
                                <p>Payment Plan</p>
                                </div>
                            </div>
                           </div>
                           <div className='col-lg-12 mt-5 marahy'>
                            <a href=""><button className="btn btn-default main-menu-btn btn-font">
                           DISCOVER NEW PROJECT
                              </button>
                           </a>
                           <a href=""><button className="btn btn-default main-menu-btn btn-font main-menu-btn-1">
                           GET MORE INFO
                              </button>
                              </a>
                              </div>
                        </div>
                     </div>
                  </div>
               </div>
      </section>
    </div>
  )
}
