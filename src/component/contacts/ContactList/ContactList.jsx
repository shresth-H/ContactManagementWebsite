import React from "react";
import {Link} from "react-router-dom";

let ContactList = () => {
    return (
        <React.Fragment>
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">
                                    Contact Manager 
                                    <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                        <i className="fa fa-plus-circle me-2"/>
                                        New
                                    </Link>
                                </p>
                                <p className="fast-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis natus error nihil exercitationem, porro facere, iure eos excepturi eum voluptatum libero totam culpa reiciendis maiores, vero numquam omnis? Ipsam, eum.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row">
                                    <div className="col">
                                    <div className="mb-2">
                                        <input type="text" className="form-control" placeholder="Search Names"/>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-outline-dark" value="Search"/>
                                    </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center d-flex justify-content-around">
                                    <div className="col-md-4">
                                        <img src="https://th.bing.com/th/id/OIP.8Di5Xe-0ty58fzXIdk_2OQHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="img-fluid contact-img"/>
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                                Name : <span className="fw-bold">Rajan</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Mobile : <span className="fw-bold">4544564666</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Email : <span className="fw-bold">rajan@gmail.com</span>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                        <Link to={`/contacts/view/:contactId`} className="btn btn-warning my-1">
                                            <i className="fa fa-eye"/>
                                        </Link>
                                        <Link to={`/contacts/edit/:contactId`} className="btn btn-primary my-1">
                                            <i className="fa fa-pen"/>
                                        </Link>
                                        <button className="btn btn-danger my-1">
                                            <i className="fa fa-trash"/>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
           
    );
}

export default ContactList;