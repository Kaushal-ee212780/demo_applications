import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../Styles/Contact.scss";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

// import Header from './Header'

const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const notify = () => {
    toast.success(
      "THANK YOU FOR SHARING YOUR CONTACT  BLUE CORONA WILL CONTACT YOU SOON",
      {
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#ced2cc",
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
        },
      }
    );
  };

  const formSubmiteHandler=()=>{
    notify();
  }

  return (
    <>
      {/* <Header /> */}
      <div className="">
        <h2>Welcome to our Contact Us Page</h2>
        <div className="contactContainer">
          <div className="mapContainer">
            {/* <iframe style={{width:"800px", height:"400px", }} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15553.103269898513!2d77.63884259637716!3d12.954194431140385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPharmacies!5e0!3m2!1sen!2sin!4v1669958669141!5m2!1sen!2sin" /> */}
            <iframe
              style={{ width: "380px", height: "380px" }}
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7279990.450624108!2d76.63567628223205!3d27.008580946343997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d25.6080374!2d85.14304299999999!4m5!1s0x390ce85e41c6e7ed%3A0xfcf1dad7c5136ab6!2sGenpact%2C%20TOWER-8%2C%20INFOSPACE%2C%20Sector%20135%2C%20Noida%2C%20Uttar%20Pradesh%20201304!3m2!1d28.4989767!2d77.4030161!5e0!3m2!1sen!2sin!4v1669984250847!5m2!1sen!2sin"
            />
          </div>
          <div className="formContainer">

            <Form onSubmit={handleSubmit(formSubmiteHandler)}>
            <h4>Please Enter Your Details</h4>
              <br />
              <Form.Field>
                <label>Name:</label>
                <input
                  placeholder="Name"
                  type="text"
                  {...register("name", { required: true, maxLength: 10 })}
                />
              </Form.Field>
              {errors.name && <span>Please check the Name</span>}
              <br />

              <Form.Field>
                <label>Email:</label>
                <input
                  placeholder="Email"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
              </Form.Field>
              {errors.email && <span>Please enter valid Email</span>}
              <br />

              <Form.Field>
                <label>Phone:</label>
                <input
                  placeholder="Phone"
                  type="tel"
                  {...register("phone", {
                    required: true,
                    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                  })}
                />
              </Form.Field>
              {errors.phone && <span>Please enter valid number</span>}
              <br />
              <br />
              <div className="btn">
              <Button className="button" >Submit</Button>
              <Toaster />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
