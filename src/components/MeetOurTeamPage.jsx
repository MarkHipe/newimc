import React, { useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hero2 from "../assets/hero-section/17 edited.jpg";

import Member1 from "../assets/BEHIND OUR SUCCESS/Atty. Greta.png";
import Member2 from "../assets/BEHIND OUR SUCCESS/Capt Ivan .png";
import Member3 from "../assets/BEHIND OUR SUCCESS/Capt. Robles .png";
import Member4 from "../assets/BEHIND OUR SUCCESS/Ma_am Mina .png";
import Member5 from "../assets/BEHIND OUR SUCCESS/Mr. Efren.png";
import Member6 from "../assets/BEHIND OUR SUCCESS/Mr. Glenn .png";
import Member7 from "../assets/BEHIND OUR SUCCESS/Ms. Irene.png";
import Member8 from "../assets/BEHIND OUR SUCCESS/Ms. Joan .png";

const member = [
  {
    name: "",
    img: Member1,
    pos: "",
    qoute: "",
  },
  {
    name: "Capt. Ivan Evangelio",
    img: Member2,
    pos: "Fleet Management Head",
    qoute:
      "Your work will take up a large portion of your time. and the only way to be truly satistfied is to do great work. And the only way to...",
  },
  {
    name: "Capt. Rodolfo Robles",
    img: Member3,
    pos: "Operations Manager",
    qoute: "If you're going to do something, do it well.",
  },
  {
    name: "",
    img: Member4,
    pos: "",
    qoute: "",
  },
  {
    name: "Engr. Efren Cruz",
    img: Member5,
    pos: "Technical Manager",
    qoute:
      "Our lives only get better when we take risks. Being honest is the first and most challenging risk we must take.",
  },
  {
    name: "",
    img: Member6,
    pos: "",
    qoute: "",
  },
  {
    name: "",
    img: Member7,
    pos: "",
    qoute: "",
  },
  {
    name: "Joan Chua",
    img: Member8,
    pos: "Commercial Manager",
    qoute:
      "When we strive to be better than we are, everything around us improves..",
  },
];
const MeetOurTeamPage = () => {
  const top = useRef(null);
  useEffect(() => {
 
      if (top && top.current) {
        const executeScroll = (top) =>
          top.current.scrollIntoView({ behavior: "smooth" });
        executeScroll(top);
        // useMountEffect(executeScroll); // Scroll on mount
      }
   
  }, []);
  return (
    <Con ref={top}>
      <div className="iso">
        <img
          src="https://1000logos.net/wp-content/uploads/2020/09/ISO-Logo.jpg"
          alt=""
        />
        <div className="details">
          <h6>CERTIFIED COMPANY</h6>
          <h6>ISO 9001-2015</h6>
        </div>
      </div>
      <div className="wrap">
        <img src={Hero2} alt="" />
        <div className="overlay"></div>
        <div className="nav">
          <Link className="link" to="/">
            Home
          </Link>
          <BsArrowRight className="icon" />
          <Link className="link" to="/team">
            Meet Our Team
          </Link>
        </div>
        <h1>Meet Our Team</h1>
      </div>
      <div className="wrapper">
        <div className="cardWrapper">
          {member?.map((mem, i) => {
            return (
              <div className="card">
                <img src={mem.img} alt="" />

                <div className="label">
                  <h5>{mem.name}</h5>
                  <h2>{mem.pos}</h2>

                  <h6>" {mem.qoute} "</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  padding: 3rem 0;
  padding-top: 0;
  & .iso {
    height: 30px;
    display: flex;
    margin-left: 3rem;
    padding-bottom: 10px;
    & .icon {
      margin-right: 1rem;
    }
    & h6 {
      margin: 0;
      margin-left: 1rem;
      color: #6b6b6b;
    }
  }
  & .wrap {
    /* background-color: #1A1446 ; */
    height: 200px;
    width: 100vw;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & .overlay {
      position: absolute;
      height: 200px;
      width: 100vw;
      background-color: #1a1446c8;
    }
    & img {
      width: 100vw;
      object-fit: cover;
      position: absolute;
    }
    & h1 {
      color: #fff;
      text-align: center;
      text-transform: capitalize;
      font-size: 25px;
      padding-bottom: 3rem;
      position: relative;
    }
    & .nav {
      display: flex;
      width: 80%;
      margin: auto;
      padding: 1rem;
      position: relative;

      & .link {
        text-decoration: none;
        color: #fff;
        font-size: 14px;
      }
      & .icon {
        color: #fff;
        margin: 0 10px;
      }
    }
  }
  & .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    width: 900px;
    margin: auto;
    @media (max-width: 992px) {
        width: 90vw;
    }
    & .cardWrapper {
      margin-top: 3rem;
      width: 100%;
      display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* align-items: center; */
      & .card {
        position: relative;
        border: 1px solid #eee;
        width: 200px;
        margin: .5rem;
        & img {
          /* height: 100px; */
          width: 100%;
          object-fit: cover;
        }
        & .date {
          position: absolute;
          top: 1rem;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 50px;
          width: 50px;
          border-radius: 5px;
          margin-left: 1rem;
          & span {
            font-size: 0.8rem;
            font-weight: 600;
            margin-bottom: 3px;
          }
        }
        & .label {
          padding: 0 1rem;
          & h6 {
            color: #5e5e5e;
            /* font-weight: 600; */
            margin: 10px auto;
            line-height: 22px;

          }
          & h2 {
            font-weight: 400;
            font-size: 13px;
            background-color: #c78b22;
            width: auto;
            text-align: center;
            color: #fff;
            padding: 5px;
          }
          & p {
            color: #5e5e5e;
            font-size: 14px;
            line-height: 30px;
            
          }
          & h5 {
            display: flex;
            margin-top: 1px;
            font-size: 13px;
            
            & .icon {
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
  }
`;
export default MeetOurTeamPage;
