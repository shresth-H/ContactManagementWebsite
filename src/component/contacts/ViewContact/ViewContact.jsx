import React from "react";
import {Link} from "react-router-dom";

let ViewContact = () => {
    return (
        <React.Fragment>
            <section className="view-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit commodi cupiditate facilis voluptas ut inventore eius aspernatur deserunt. Nobis distinctio commodi iure corporis cum culpa vitae praesentium suscipit tempora placeat.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                        <img src="https://th.bing.com/th/id/OIP.8Di5Xe-0ty58fzXIdk_2OQHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="contact-img"/>
                        </div>
                        <div className="col-md-8">
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
                                <li className="list-group-item list-group-item-action">
                                    Company : <span className="fw-bold">Rajan</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Title : <span className="fw-bold">4544564666</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Group : <span className="fw-bold">rajan@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default ViewContact;