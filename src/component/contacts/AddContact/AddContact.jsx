import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { ContactService } from "../../../services/ContactService";



let AddContact = () => {

    let navigate = useNavigate();

    let [state, setState] = useState({
        loading: false,
        contact: {
            name : '',
            photo : '',
            mobile: '',
            email: '',
            company: '',
            title: '',
            groupId: ''
        },
        groups : [],
        errorMessage: ''
    });

    let updateInput = (event) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name] : event.target.value
            }
        })
    };

    useEffect(() => {
        async function fetchData() {
          try {
            setState({ ...state, loading: true });
            let response = await ContactService.getGroups();
            setState({
              ...state,
              loading: false,
              groups: response.data
            });
          } catch (error) {
            setState({
              ...state,
              loading: false,
              errorMessage: error.message
            });
          }
        }
        fetchData();
      }, []);

      let submitForm = async (event) => {
        event.preventDefault();
        try{
            let response = await ContactService.createContact(state.contact);
            if(response){
                navigate('/contacts/list', {replace: true});
            }
        }
        catch(error){
            setState({...state, errorMessage: error.message});
            navigate('/contacts/add', {replace: false});
        }
      };


    let {loading, contact, groups, errorMessage} = state;

    return (
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-success fw-bold"> Create Contact</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="name"
                                    vakue={contact.name}
                                    onChange={updateInput}
                                    type= "text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="photo"
                                    vakue={contact.photo}
                                    onChange={updateInput}
                                    type= "text" className="form-control" placeholder="Photo Url"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="mobile"
                                    vakue={contact.mobile}
                                    onChange={updateInput}
                                    type= "text" className="form-control" placeholder="Mobile"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="email"
                                    vakue={contact.email}
                                    onChange={updateInput}
                                    type= "text" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="company"
                                    vakue={contact.company}
                                    onChange={updateInput}
                                    type= "text" className="form-control" placeholder="Company"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="title"
                                    vakue={contact.title}
                                    onChange={updateInput}
                                    type= "text" className="form-control" placeholder="Title"/>
                                </div>
                                <div className="mb-2">
                                    <select 
                                    required={true}
                                    name="groupId"
                                    vakue={contact.groupId}
                                    onChange={updateInput}
                                    className="form-control">
                                        <option value="">Select a Group</option>
                                        {
                                            groups.length > 0 &&
                                            groups.map(group => {
                                                return(
                                                    <option key={group.id} value={group.id}>{group.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input type= "submit" className="btn btn-success" value="Create"/>
                                    <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default AddContact;