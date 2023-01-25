import React from 'react'

const ABout = () => {
  return (
   <>
     <div className="container pt-5">
        <div className="row">
          <div className="col-lg-4 col-xl-4 pt-5">
            <div className="card-box text-center mx-5">
              <img src="https://lh3.googleusercontent.com/a/AEdFTp7oLoG7Z2FRBFl7vqXS44Laxo4Eo3GDRPdNe9s1qA=s360-p-rw-no" className="rounded-circle avatar-xl img-thumbnail" alt="profile-image" />

              <h4 className="mb-0">Mushahid Javed</h4>
              <p className="text-muted">Mern Stack Developer</p>

              <button type="button" className="btn btn-success btn-xs waves-effect mx-3 mb-2 waves-light">Follow</button>
              <button type="button" className="btn btn-danger btn-xs waves-effect mb-2 waves-light">Message</button>

              <div className="text-left mt-3">
                <h4 className="font-13 text-uppercase">About Me :</h4>
                <p className="text-muted font-13 mb-3">
                  A full stack developer with three years of experience in building
                  excellent problem-solving skills and ability to perform well in a
                  team and enjoy teaching coding concepts.
                </p>
                <p className="text-muted mb-2 font-13"><strong>Full Name :</strong> <span className="ml-2">Mushahid Javed</span></p>

                <p className="text-muted mb-2 font-13"><strong>Mobile :</strong><span className="ml-2">(+91) 9716448389
                </span></p>

                <p className="text-muted mb-2 font-13"><strong>Email :</strong> <span className="ml-2 ">javedmushahid@gmail</span></p>

                <p className="text-muted mb-1 font-13"><strong>Location :</strong> <span className="ml-2">INDIA</span></p>
              </div>

              <ul className="social-list list-inline mt-3 mb-0">
                <li className="list-inline-item">
                  <a  href="https://www.facebook.com/frulx2" style={{ backgroundColor: "#3b5998" }} target='_blank' className=" btn btn-primary"><i className="fab fa-facebook"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="https://gmail.com/" target='_blank' className=" btn btn-primary" style={{ backgroundColor: "#dd4b39" }}><i className="fab fa-google"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/iamushahid/" target='_blank' className=" btn btn-primary" style={{ backgroundColor: "#ac2bac" }}><i className="fab fa-instagram instagram" ></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/javedmushahid" target='_blank' className=" btn btn-primary" style={{ backgroundColor: "#333333" }}><i className="fab fa-github"></i></a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-primary" style={{ backgroundColor: "#0082ca" }} href="https://www.linkedin.com/in/javedmushahid/" target='_blank' role="button"
                  ><i className="fab fa-linkedin-in"></i
                  ></a>
                </li>
              </ul>
            </div>
            <div className="card-box">
              <h4 className="header-title">Skills</h4>
              <p className="mb-3">Everyone realizes why a new common language would be desirable</p>

              <div className="pt-1">
                <h6 className="text-uppercase mt-0">HTML5/CSS <span className="float-right" style={{"height" : "100%", "width" : "50%"}}>90%</span></h6>
                <div className="progress progress-sm m-0">
                  <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">90% Complete</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 pt-1">
                <h6 className="text-uppercase">NodeJs <span className="float-right">80%</span></h6>
                <div className="progress progress-sm m-0">
                  <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">80% Complete</span>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <h6 className="text-uppercase mt-0">ExpressJs <span className="float-right" style={{"height" : "100%", "width" : "50%"}}>80%</span></h6>
                <div className="progress progress-sm m-0">
                  <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">80% Complete</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 pt-1">
                <h6 className="text-uppercase">MongoDB <span className="float-right">88%</span></h6>
                <div className="progress progress-sm m-0">
                  <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">88% Complete</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 pt-1">
                <h6 className="text-uppercase">JavaScript <span className="float-right">80%</span></h6>
                <div className="progress progress-sm m-0">
                  <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">80% Complete</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 pt-1">
                <h6 className="text-uppercase">Java <span className="float-right">95%</span></h6>
                <div className="progress progress-sm m-0">
                  <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">85% Complete</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 pt-1">
                <h6 className="text-uppercase">ReactJs <span className="float-right">92%</span></h6>
                <div className="progress progress-sm m-0">
                  <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">72% Complete</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="col-lg-8 col-xl-8 pt-5">
            <div className="card-box mx-5">
              <ul className="nav nav-pills navtab-bg mx-4">
              <li className="nav-item mx-5">
                  <a href="#about-me" data-toggle="tab" aria-expanded="true" className="nav-link ml-0 active">
                    <i className="mdi mdi-face-profile mr-1"></i>About Me
                  </a>
                </li>

              </ul>

              <div className="tab-content mx-5">

                <div className="tab-pane show active mx-4" id="about-me">

                  <h5 className="mb-4 text-uppercase m-1"><i className="mdi mdi-briefcase mx-1"></i>
                    Experience</h5>

                  <ul className="list-unstyled timeline-sm mx-3">
                    <li className="timeline-sm-item mx-2">
                      <span className="timeline-sm-date mx-auto font-weight-bold ">2020 - 2023</span>
                      <h5 className="mt-0 mb-1">Full Stack Developer</h5>
                      <a href='https://www.mecuel.com/' target="_blank "><p>mecuel.com</p></a>
                      <p className="text-muted mt-2"><ul><li>Working as a Full Stack Developer using ,AWS Auto Scaling, Load Balancing to handle and distributed multiple incoming requests to Scaled instances and develop multi useful features for customers to enhance the easy of shopping.</li>
                        <li>Tech Stack used-JavaScript , NodeJs, MongoDB, React,
                          ExpressJs ,Redux,Validator,Hashing,JWT,Restful APi,
                          AWS Services.</li></ul>
                      </p>

                    </li>
                    <li className="timeline-sm-item mx-2">
                      <span className="timeline-sm-date mx-auto">2019 - 2019</span>
                      <h5 className="mt-0 mb-1">Frontend Developer</h5>
                      <p>Tata Consultancy Services</p>
                      <p className="text-muted mt-2"><ul><li>Worked with developers to construct algorithms and flowcharts. Design frontend part and do lot of functionality for application</li>
                        <li>Worked closely with other team members to identify and remove software bugs.</li>
                        <li>Tech Stack used-React, Javscript,NodeJs,ExpressJs</li></ul>.</p>
                    </li>
                    <li className="timeline-sm-item mx-2">
                      <span className="timeline-sm-date mx-auto">2019 - 2020</span>
                      <h5 className="mt-0 mb-1">Software Developer iOS</h5>
                      <p>Rautela Technologies</p>
                      <p className="text-muted mt-2 mb-0">Build useful iOS features for Multiple Applications.</p>
                    </li>
                  </ul>




                </div>



              </div>
            </div>

          </div>
        </div>
      </div>
   </>
  )
}

export default ABout