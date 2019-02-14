import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident quas neque obcaecati, ut, natus sed sit repellendus,
              inventore doloremque dolore error quis reiciendis at similique
              tempora. Rerum enim distinctio repellat? Possimus quaerat
              necessitatibus ab facilis ut in. Voluptas repellat voluptatum
              provident eius dolores ea blanditiis! Totam impedit facere minima
              minus pariatur in harum, placeat repudiandae velit non ducimus nam
              perferendis sequi laboriosam maxime est dolore? Quos autem
              inventore quod dolores reiciendis fugit voluptatem, commodi
              ratione ea. Nihil quasi rem quos!
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
