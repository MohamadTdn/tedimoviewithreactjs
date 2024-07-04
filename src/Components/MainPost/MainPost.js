import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer/Footer";
import "./MainPost.css";
import Comment from "../Comment/Comment";
import { useParams , Navigate} from "react-router-dom";

export default function MainPost() {

  const [posts, setPosts] = useState([])
  const params = useParams()

  console.log(params);

  let isInPosts = posts.some(post => {
    return post[0] == params.id
  })

  if (isInPosts) {
    let targetPost = posts.find(post => {
      return post[0] == params.id
    })

    console.log(targetPost);
  } else {
    <Navigate to='/' />
  }

  async function getFromApi() {
    fetch("https://tedimovie-df041-default-rtdb.firebaseio.com/posts.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts((prevState) => {
          return (prevState = Object.entries(data));
        });
      })
      .catch((err) => {
        err = new Error("cant get from api");
        console.error(err);
      })
      .finally(() => console.log("done"));
  }

  useEffect(() => {
    getFromApi();
  });

  return (
    <div style={{ color: "#ffff" }}>
      <NavMenu />
      <Container className="MinPost-Container">
        <Row>
          <Col lg={9} style={{ padding: "90px 0 0 0" }}>
            <div
              className="Post-background"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxbqjs1Y6CsBnN16WE1GhogviDnMqVJU3AQ&s)",
                height: "100px",
                width: "700px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto",
              }}
            ></div>
            <div style={{ padding: "10px 0", display: "flex" }}>
              <img
                style={{ width: "250px", height: "350px" }}
                src="/assets/post.jfif"
                alt=""
              />
              <div style={{ padding: "10px" }}>
                <h4>Inception 2010</h4>
                <img style={{ width: "30px" }} src="/assets/imdb.png" alt="" />
                <span>8.7</span>
                <br />
                <span>امتیاز منتقدان</span>
                <span style={{ width: "30px", backgroundColor: "green" }}>
                  67
                </span>
                <h5>سال تولید : تستی</h5>
                <h5>محصول: تستی</h5>
                <h5>ژانر: تستی</h5>
                <h5>زمان: تستی</h5>
                <Button variant="warning">پخش آنلاین</Button>
                <Button variant="secondary">پخش آنلاین</Button>
              </div>
            </div>
            <p className="Story">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <ul className="data">
              <li>زمان: تستی</li>
              <li>گروه سنی: تستی</li>
              <li>محصول: تستی</li>
              <li>سال تولید: تستی</li>
              <li>زبان: تستی</li>
            </ul>
            <ul className="Crew">
              <h4>کارگردان</h4>
              <li className="director">
                <span>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    src="/assets/post.jfif"
                    alt=""
                  />
                </span>
                <span>Christopher Nolan</span>
              </li>
              <h4>بازیگران</h4>
              <li className="Actors">
                <span>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    src="/assets/post.jfif"
                    alt=""
                  />
                </span>
                <span>leonardo Di Caprio</span>
              </li>
            </ul>
            <h4>نظرات</h4>
            <Comment />
          </Col>
          <Col lg={3} style={{ padding: "90px 0 0 0" }}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
