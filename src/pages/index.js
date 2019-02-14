import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

import SEO from "../components/seo";
import { FaGulp } from "react-icons/fa";
import BackgroundHeader from "../components/Globals/BackgroundHeader";
import Info from "../components/Home/Info";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundHeader
      img={data.img.childImageSharp.fluid}
      title="coffe shop"
      styleClass="default-background"
    />
    <Info />
    <FaGulp />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
