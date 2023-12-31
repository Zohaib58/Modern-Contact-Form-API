import React from 'react';
import styled from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";
import { useFormik } from "formik";
import { contactFormSchema } from '../schema';
import axios from 'axios';



const Registration = () => {
    const Formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          address: "",
          phone: "",
        },
        validationSchema: contactFormSchema,
        onSubmit: async (values, action) => {
          action.resetForm();
          try {
            const response = await axios.post('http://localhost:8000/contactForm/create', values);
    
           
            console.log('Response:', response.data);
          } catch (error) {
            
            console.error('Error:', error.message);
          }

        },
        

      });
      //console.log(Formik.errors)

     
   
  return (
        <>
        <GlobalStyle />
          <Wrapper>
            <div className="container">
              <div className="modal">
                <div className="modal-container">
                  <div className="modal-left">
                    <h1 className="modal-title">Welcome!</h1>
                    <p className="modal-desc">
                      Contact Form API using Formik & Yup
                    </p>
                    <form onSubmit= {Formik.handleSubmit}>
                      <div className="input-block">
                        <label htmlFor="name" className="input-label">
                          Name
                        </label>
                        <input
                          type="name"
                          autoComplete="off"
                          name="name"
                          id="name"
                          placeholder="Name"
                          value = {Formik.values.name}
                          onChange = {Formik.handleChange}
                          // onBlur = ""
                        />
                        { Formik.errors.name && Formik.touched.name ? (
                          <p className="form-error">{Formik.errors.name}</p>
                        ) : null }
                      </div>
                      <div className="input-block">
                        <label htmlFor="email" className="input-label">
                          Email
                        </label>
                        <input
                          type="email"
                          autoComplete="off"
                          name="email"
                          id="email"
                          placeholder="Email"
                          value= {Formik.values.email}
                          onChange= {Formik.handleChange}
                          // onBlur=""
                        />
                       
                        { Formik.errors.email && Formik.touched.email ? (
                          <p className="form-error">{Formik.errors.email}</p>
                        ) : null }
                      </div>
                      <div className="input-block">
                        <label htmlFor="phone" className="input-label">
                          Phone Number
                        </label>
                        <input
                          type="phone"
                          autoComplete="off"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                          value= {Formik.values.phone}
                          onChange= {Formik.handleChange}
                          // onBlur=""
                        />
                        
                        { Formik.errors.phone && Formik.touched.phone ? (
                          <p className="form-error">{Formik.errors.phone}</p>
                        ) : null }
                      </div>
                      <div className="input-block">
                        <label htmlFor="address" className="input-label">
                          Address
                        </label>
                        <input
                          type="address"
                          autoComplete="off"
                          name="address"
                          id="address"
                          placeholder="Address"
                          value = {Formik.values.address}
                          onChange= {Formik.handleChange}
                          // onBlur=""
                        />
                        
                        { Formik.errors.address && Formik.touched.address ? (
                          <p className="form-error">{Formik.errors.address}</p>
                        ) : null }
                      </div>
                      <div className="modal-buttons">
                        <button className="input-button" type="submit">
                          Submit
                        </button>
                      </div>
                    </form>
                    
                  </div>
                  <div className="modal-right">
                    <img
                      src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </>
      );
    };
    
    const Wrapper = styled.section`
      .container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #efedee;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    
      .modal {
        width: 100%;
        /* height: 60px; */
        background: rgba(51, 51, 51, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 0.4s;
      }
      .modal-container {
        display: flex;
        max-width: 60vw;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        position: absolute;
    
        transition-duration: 0.3s;
        background: #fff;
      }
      .modal-title {
        margin: 0;
        font-weight: 400;
        color: #55311c;
      }
      .form-error {
        font-size: 1.4rem;
        color: #b22b27;
      }
      .modal-desc {
        margin: 6px 0 30px 0;
      }
      .modal-left {
        padding: 60px 30px 20px;
        background: #fff;
        flex: 1.5;
        transition-duration: 0.5s;
        opacity: 1;
      }
    
      .modal-right {
        flex: 2;
        font-size: 0;
        transition: 0.3s;
        overflow: hidden;
      }
      .modal-right img {
        width: 100%;
        height: 100%;
        transform: scale(1);
        -o-object-fit: cover;
        object-fit: cover;
        transition-duration: 1.2s;
      }
    
      .modal.is-open .modal-left {
        transform: translateY(0);
        opacity: 1;
        transition-delay: 0.1s;
      }
      .modal-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .modal-buttons a {
        color: rgba(51, 51, 51, 0.6);
        font-size: 14px;
      }
    
      .sign-up {
        margin: 60px 0 0;
        font-size: 14px;
        text-align: center;
      }
      .sign-up a {
        color: #8c7569;
      }
    
      .input-button {
        padding: 1.2rem 3.2rem;
        outline: none;
        text-transform: uppercase;
        border: 0;
        color: #fff;
        border-radius: 4px;
        background: #8c7569;
        transition: 0.3s;
        cursor: pointer;
        font-family: "Nunito", sans-serif;
      }
      .input-button:hover {
        background: #55311c;
      }
    
      .input-label {
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 0.7px;
        color: #8c7569;
        transition: 0.3s;
      }
    
      .input-block {
        display: flex;
        flex-direction: column;
        padding: 10px 10px 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-bottom: 20px;
        transition: 0.3s;
      }
      .input-block input {
        outline: 0;
        border: 0;
        padding: 4px 0 0;
        font-size: 14px;
      }
    
      .input-block input::-moz-placeholder {
        color: #ccc;
        opacity: 1;
      }
      .input-block input:-ms-input-placeholder {
        color: #ccc;
        opacity: 1;
      }
      .input-block input::placeholder {
        color: #ccc;
        opacity: 1;
      }
      .input-block:focus-within {
        border-color: #8c7569;
      }
      .input-block:focus-within .input-label {
        color: rgba(140, 117, 105, 0.8);
      }
    
      @media (max-width: 750px) {
        .modal-container {
          max-width: 90vw;
        }
    
        .modal-right {
          display: none;
        }
      }
    `;
        

export default Registration