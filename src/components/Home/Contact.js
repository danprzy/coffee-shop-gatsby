import React from "react";
import Title from "../Globals/Title";

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="col-10 col-sm-8 col-md-6 mx-auto">
        <form action="https://formspree.io/danprzy@gmail.com" method="POST">
          {/* name */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="John smith"
            />
          </div>
          {/* email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder="example@email.com"
            />
          </div>
          {/* description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              rows="5"
              placeholder="your comments go here..."
            />
          </div>
          {/* submit */}
          <button
            type="submit"
            className="btn btn-yellow btn-block text-capitalize mt-5"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
}
