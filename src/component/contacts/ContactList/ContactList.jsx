import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";

let ContactList = () => {
  let [query, setQuery] = useState({
    text: "",
  });

  let [state, setState] = useState({
    loading: false,
    contacts: [],
    filteredContacts: [],
    errorMessage: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setState({ ...state, loading: true });
        let response = await ContactService.getAllContacts();
        setState({
          ...state,
          loading: false,
          contacts: response.data,
          filteredContacts: response.data,
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        });
      }
    }
    fetchData();
  }, []);

  let clickDelete = async (contactId) => {
    try {
      let response = await ContactService.deleteContact(contactId);
      if (response) {
        setState({ ...state, loading: true });
        let response = await ContactService.getAllContacts();
        setState({
          ...state,
          loading: false,
          contacts: response.data,
          filteredContacts: response.data,
        });
      }
    } catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: error.message,
      });
    }
  };

  let searchContacts = (event) => {
    setQuery({ ...query, text: event.target.value });
    let theContacts = state.contacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setState({
      ...state,
      filteredContacts: theContacts,
    });
  };

  let { loading, contacts, filteredContacts, errorMessage } = state;

  return (
    <React.Fragment>
      <section className="contact-search p-3">
        <div className="container">
            <div className="row">
                <p className="my-2">
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2" />
                    New Contact
                  </Link>
                </p>
            </div>
            <div className="container">
                <form className="d-flex justify-content-center">
                    <div className="mx-2">
                      <input
                        name="text"
                        value={query.text}
                        onChange={searchContacts}
                        type="text"
                        className="form-control"
                        placeholder="Search Names"
                      />
                    </div>
                    <div className="mx-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                </form>
              </div>
            </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <section>
            <div className="container my-5">
              <div className="shadow-10 rounded-3 overflow-hidden">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr className="text-center">
                      <th></th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  {filteredContacts.length > 0 &&
                    filteredContacts.map((contact) => {
                      return (
                        <tbody key={contact.id}>
                          <tr className="shadow-3 text-center">
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={contact.photo}
                                  alt=""
                                  style={{ width: "45px", height: "45px" }}
                                  className="rounded-circle"
                                />
                              </div>
                            </td>
                            <td>
                            <div className="ms-3">
                              <p className="mb-1">{contact.name}</p>
                            </div>
                            </td>
                            <td>
                              <p className="text-muted mb-0 ">
                                {contact.email}
                              </p>
                            </td>
                            <td>
                              <span className="">{contact.mobile}</span>
                            </td>
                            <td>
                              <Link
                                to={`/contacts/view/${contact.id}`}
                                className="btn btn-sm btn-warning btn-rounded mx-2"
                              >
                                View
                              </Link>
                              <Link
                                to={`/contacts/edit/${contact.id}`}
                                className="btn btn-sm btn-primary btn-rounded mx-2"
                              >
                                Edit
                              </Link>
                              <button
                                onClick={() => clickDelete(contact.id)}
                                className="btn btn-sm btn-danger btn-rounded mx-2"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                </table>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ContactList;
