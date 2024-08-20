import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { registerSelector, registerThunk } from "../redux/slices/registerSlice";
import { openModal } from "../redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";

function Contact() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const {loading} = useSelector(registerSelector);
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [serviceError, setServiceError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let formulaireValide = true;

    if (name === "") {
      setNameError("Name field is required");
      formulaireValide = false;
    } else {
      setNameError("");
    }


    if (last_name === "") {
        setLastNameError("LastName field is required");
        formulaireValide = false;
      } else {
        setLastNameError("");
      }

      if (email === "") {
        setEmailError("Email field is required");
        formulaireValide = false;
      } else {
        setEmailError("");
      }

      if (service === "") {
        setServiceError("Please choose a service");
        formulaireValide = false;
      } else {
        setServiceError("");
      }
  

    if (formulaireValide) {
      let data = {
        name,
        last_name,
        email,
        phone,
        service,
        message,
      };

      dispatch(registerThunk(data)).then((data) => {
        if (data.status === 201 || data.status === 200) {
        setName("");
        setLastName("");
        setEmail("");
        setService("");
        setPhone("");
        setMessage("");
        dispatch(
            openModal({
                type: "SNACK-BAR",
                data: { severity: "success", message: data.data.message },
            }));
        } else {
        setName("");
        setLastName("");
        setEmail("");
        setService("");
        setPhone("");
        setMessage("");
          dispatch(
            openModal({
              type: "SNACK-BAR",
              data: { severity: "error", message: data.data.message },
            })
          );


        }
      });
    }
  };

  return (
    <div className="contact-form" id="contact-form">
      <div className="container mb-3">
        <h1 className="mb-4 text-center">{t("start_building")}</h1>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <div className="form-group" controlId="formFirstName">
                <label className="form-label">{t("first_name")} *</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                 {nameError && <p className="error">{nameError}</p>}
              </div>
            </div>
            <div className="col">
              <div className="form-group" controlId="formLastName">
                <label className="form-label">{t("last_name")}*</label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  value={last_name}
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
                 {lastNameError && <p className="error">{lastNameError}</p>}
              </div>
            </div>
          </div>

          <div className=" row mb-3">
            <div className="col">
              <div className="form-group" controlId="formEmail">
                <label className="form-label">{t("email_address")} *</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                  {emailError && <p className="error">{emailError}</p>}
              </div>
            </div>
            <div className="col">
              <div className="form-group" controlId="formPhone">
                <label className="form-label">{t("phone_number")} *</label>
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group" controlId="formService">
                <label className="form-label">Service *</label>
                <select
                  className="form-select"
                  as="select"
                  name="service"
                  required
                  onChange={(e) => setService(e.target.value)}
                  value={service}
                >
                  <option value="">{t("select_a_service")}</option>
                  <option value="social">{t("social")}</option>
                  <option value="web">{t("web")}</option>
                  <option value="soft">{t("software")}</option>
                  <option value="branding">{t("branding")}</option>
                  <option value="other">{t("other")}</option>
                </select>

                {serviceError && <p className="error">{serviceError}</p>}
              </div>
            </div>
          </div>

          <div className="form-group mb-3 " controlId="formMessage">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="5"
              name="message"
              value={message}
              placeholder="Maximum 200 characters"
              maxLength={200}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
           {loading? 'Loading...' : t("submit") } 
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;