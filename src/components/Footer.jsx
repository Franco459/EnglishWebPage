import React from 'react'
import './Footercss.css'

import 'react-bootstrap';
function Footer() {
    return (
        <div className="d-flex flex-column h-100">
            <footer className="w-100 py-4 flex-shrink-0 sticky-footer">
                            <div className="container py-4">
                                <div className="row gy-4 gx-5">
                                    <div className="col-lg-4 col-md-6" style={{ marginTop: '1%', marginRight: '10%'}}>
                                        <p className="small text-muted mb-0">&copy; a Copyrights. All rights reserved.</p>
                                    </div>
                                    <div className="col-lg-2 col-md-6" style={{ marginTop: '1%', marginRight: '10%'}} >
                                        <h2 className="text-white mb-3">Quick links</h2>
                                        <ul className="list-unstyled text-muted">
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Get started</a></li>
                                            <li><a href="#">FAQ</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <h5 className="text-white mb-3">Newsletter</h5>
                                        <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                        <form action="#">
                                            <div className="input-group mb-3">
                                                <input className="form-control-footer form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                                    <button className="btn btn-primary" id="button-addon2" type="button"><i className=""></i></button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
            </footer>
    </div>
    )
}

export default Footer


       