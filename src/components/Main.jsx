import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { RiTodoFill } from "react-icons/ri";
import { IoNewspaperSharp } from "react-icons/io5";
import { BiSolidMoviePlay } from "react-icons/bi";
import { GiMagicPortal } from "react-icons/gi";
import { ImGithub } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";

/* Main Css */
import "./main.css";

/* Image */
import Frontend from "../image/frontend.jpg";
import JS from "../image/js.jpg";
import Mountains from "../image/Mountains.jpg";
import SunRise from "../image/sunrise.jpg";
import ReactImg from "../image/react.jpg";
import frontendWhat from "../image/frontendWhat.jpg";
import Angular from "../image/angular.png";
import CSS from "../image/css.png";
import API from "../image/api.png";

// CLASS
class Main extends Component {
  // display
  static displayName = "Main";

  // constructor
  constructor(props) {
    super(props);
    // STATE
    this.state = {};
    //BIND
  }

  // CDM

  // Function

  // RENDER
  render() {
    let data = this.props.t("about");
    return (
      <React.Fragment>
        {/* start codes Header  */}
        <header id="header">
          <div className="jumbotron text-white">
            <div className="container">
              <div className="p-4 text-center">
                <h1
                  className="text-uppercase display-3 wow bounceIn animated"
                  data-wow-delay=".50s"
                >
                  Web Sayfama Hoş geldiniz
                </h1>
                <h4>Html5, Css3, Js, React JS, Git</h4>
                <a
                  href="https://www.linkedin.com/in/burak-kutluk-3a1128199/"
                  className="btn btn-outline-primary shadow m-lg-2 fs-4 "
                >
                  <i>
                    <BsLinkedin size={45} color="black" />
                  </i>
                </a>
                <a
                  href="https://github.com/burakkutluk"
                  className="btn btn-outline-primary radius-10 shadow m-lg-2 fs-4 "
                >
                  <i>
                    <ImGithub size={45} color="black" />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* ends codes Header  */}

        {/* start codes Main  */}
        <main>
          {/* start services_id */}
          <section id="services_id">
            <div className="icon_service">
              <h2 className="text-center"> Projects </h2>
              <div className="container">
                <div className="row mt-5">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 ">
                    <a href="https://github.com/burakkutluk/To-do-List">
                      <i class="d-flex justify-content-center m-2">
                        <RiTodoFill />
                      </i>
                    </a>
                    <a
                      href="https://github.com/burakkutluk/To-do-List"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      <h4 className="text-center">To-Do App</h4>
                    </a>
                    <h4 className=" text-center fs-5">
                      To-do items are entered into the site to create a list.
                      Tasks can be deleted or edited as needed.
                    </h4>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                    <a href="https://github.com/burakkutluk/react-news-app-master">
                      <i class="text-primary d-flex justify-content-center m-2">
                        {" "}
                        <IoNewspaperSharp />{" "}
                      </i>
                    </a>
                    <a
                      href="https://github.com/burakkutluk/react-news-app-master"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      <h4 className="text-center">News Web Site</h4>
                    </a>
                    <h4 className=" text-center fs-5">
                      The site showcases the latest news and lets you read them.
                      You can also save them for later. You can sign in or sign
                      up to the site to access more features.
                    </h4>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                    <a href="https://github.com/burakkutluk/movie">
                      <i class="text-success d-flex justify-content-center m-2">
                        <BiSolidMoviePlay />
                      </i>
                    </a>
                    <a
                      href="https://github.com/burakkutluk/movie"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      <h4 className="text-center">Movie</h4>
                    </a>
                    <h4 className="text-center fs-5">
                      The site provides a comprehensive overview of movies,
                      including their ratings, cast, directors, images,
                      trailers, and related videos. Movies can be sorted by
                      popularity, top rated, or other criteria.
                    </h4>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                    <a href="https://github.com/burakkutluk/react-rick-and-morty">
                      <i class="d-flex justify-content-center m-2">
                        <GiMagicPortal />
                      </i>
                    </a>
                    <a
                      href="https://github.com/burakkutluk/react-rick-and-morty"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      <h4 className="text-center">Rick and Morty</h4>
                    </a>
                    <h4 className="text-center fs-5">
                      The site includes a character gallery with images and bios
                      of all the major characters, including Rick Sanchez, Morty
                      Smith, Summer Smith, Beth Smith, and Jerry Smith.
                    </h4>
                  </div>
                </div>{" "}
                {/* end row */}
              </div>
              {/* end container */}
            </div>
            {/* end icon services */}
          </section>
          {/* end services */}
          {/* start blog */}
          <section id="blog_id">
            <div className="blog_service">
              <h2 className="text-center">Blog</h2>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                    <div class="card mb-4">
                      <img
                        class="cardImg card-img-top mb-3"
                        src={JS}
                        alt="Title"
                      />
                      <div class="card-body">
                        <h4 class="card-title">
                          Introduction to JavaScript: Basics
                        </h4>
                        <p class="card-text line-clamp4">
                          JavaScript is the programming language that lets the
                          Internet work. The Internet would be nothing without
                          JavaScript and in this lesson, you will find out why.
                        </p>
                        <a
                          href="https://medium.com/@kevin_comba/introduction-to-javascript-basics-7dd352f98435"
                          className="btnRead btn btn-outline-primary shadow m-lg-2 fs-4"
                        >
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                    <div class="card mb-4">
                      <img
                        class="cardImg card-img-top mb-3"
                        src={ReactImg}
                        alt="Title"
                      />
                      <div class="card-body">
                        <h4 class="card-title">
                          The “One” Mental Switch To Easily Shift From React to
                          Respond
                        </h4>
                        <p class="card-text line-clamp4">
                          Had you met me a decade ago, you’d have found an
                          impulsive and arrogant kind of individual. Life, for
                          me, was like being caught in a raging storm, reacting
                          to every gust of wind and crack of thunder.
                        </p>
                        <a
                          href="https://medium.com/mystic-minds/the-one-mental-switch-to-shift-from-react-to-respond-79aff25b0244?source=search_post---------0----------------------------"
                          className="btnRead btn btn-outline-primary shadow m-lg-2 fs-4"
                        >
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                    <div class="card mb-4">
                      <img
                        class="cardImg card-img-top mb-3"
                        src={frontendWhat}
                        alt="Title"
                      />
                      <div class="card-body">
                        <h4 class="card-title">
                          Mom, This is What Front-End Means.
                        </h4>
                        <p class="card-text line-clamp4">
                          The front-end of a website is exactly what you’re
                          looking at as you read this article.{" "}
                        </p>
                        <a
                          href="https://medium.com/@william.bogans_49736/mom-this-is-what-front-end-means-54a41a177b41?source=search_post---------6----------------------------"
                          className="btnRead btn btn-outline-primary shadow m-lg-2 fs-4"
                        >
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                    <div class="card mb-4">
                      <img
                        class="cardImg card-img-top mb-3"
                        src={Angular}
                        alt="Title"
                      />
                      <div class="card-body">
                        <h4 class="card-title">
                          What frontend JavaScript-framework should I use?
                        </h4>
                        <p class="card-text line-clamp4">
                          When you become a frontend developer focused on
                          JavaScript, you are easily overwhelmed by the copious
                          amount of things there is to know and to learn, in
                          order to stay relevant.
                        </p>
                        <a
                          href="https://medium.com/@gothbarbie84/what-frontend-javascript-framework-should-i-use-3511c8ef47f5?source=search_post---------5----------------------------"
                          className="btnRead btn btn-outline-primary shadow m-lg-2 fs-4"
                        >
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                    <div class="card mb-4">
                      <img
                        class="cardImg card-img-top mb-3"
                        src={CSS}
                        alt="Title"
                      />
                      <div class="card-body">
                        <h4 class="card-title">
                          Modern CSS Features That Every Web Developer Should
                          Know
                        </h4>
                        <p class="card-text line-clamp4">
                          {" "}
                          The HTML standard offers semantic tags to create the
                          basic structure of a web page, but it doesn’t offer a
                          fully-featured way to add styles alone. So, web
                          developers use the standard CSS styling language to
                          style HTML-structured web pages.
                        </p>
                        <a
                          href="https://medium.com/gitconnected/modern-css-features-that-every-web-developer-should-know-d601c2076406?source=search_post---------0----------------------------"
                          className="btnRead btn btn-outline-primary shadow m-lg-2 fs-4"
                        >
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                    <div class="card mb-4">
                      <img
                        class="cardImg card-img-top mb-3"
                        src={API}
                        alt="Title"
                      />
                      <div class="card-body">
                        <h4 class="card-title">
                          Web Speech API: What Works, What Doesn’t, and How to
                          Improve It by Linking It to a GPT Language Model
                        </h4>
                        <p class="card-text line-clamp4">
                          I am of the idea that modern technologies enable today
                          much simpler and natural human-computer interactions
                          than what current software actually proposes.
                        </p>
                        <a
                          href="https://medium.com/towards-data-science/web-speech-api-what-works-what-doesnt-and-how-to-improve-it-by-linking-it-to-a-gpt-language-dc1afde54ced?source=search_post---------0----------------------------"
                          className="btnRead btn btn-outline-primary shadow m-lg-2 fs-4"
                        >
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end row */}
              </div>
              {/* end container */}
            </div>
            {/* end icon services */}
          </section>
          {/* end blog */}
          {/* start about_id */}
          <section id="about_id">
            <div className="about_service">
              <h2 className="text-center text-white mb-2 mt-2"> About Me</h2>
              <div className="container">
                <div className="row ">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                    <p className="line-clamp15  text-white fs-5">
                      {" "}
                      The web industry is constantly evolving, and the skills
                      needed to work in it are constantly changing. However,
                      there are some core skills that are essential for anyone
                      who wants to have a successful career in web development.
                      Technical skills The most important skills for web
                      developers are technical skills. These include proficiency
                      in HTML, CSS, and JavaScript. HTML is used to create the
                      structure of a web page, CSS is used to style the page,
                      and JavaScript is used to add interactivity to the page.
                      In addition to these core technologies, web developers
                      should also be familiar with other programming languages
                      and technologies, such as PHP, Python, and React. They
                      should also be able to use version control systems, such
                      as Git, to track changes to their code. Problem-solving
                      skills Web developers need to be able to solve problems
                      quickly and efficiently. This is because they will often
                      be faced with complex technical challenges. They should be
                      able to think critically and come up with creative
                      solutions. Communication skills Web developers need to be
                      able to communicate effectively with both technical and
                      non-technical audiences.
                    </p>
                  </div>
                </div>
                {/* end row */}
              </div>
              {/* end container */}
            </div>
            {/* end about services */}
          </section>{" "}
          {/* end about services */}
          {/* start contact_id */}
          <section id="contact_id">
            <div className="contact_service">
              <h2 className="text-center  mb-4 text-uppercase"> İletişim</h2>
              <div className="container">
                <div className="row">
                  {/* MAP */}
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
                    <div className="mapouter">
                      <div className="gmap_canvas">
                        <iframe
                          className="gmap_iframe"
                          frameBorder={0}
                          scrolling="no"
                          marginHeight={0}
                          marginWidth={0}
                          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=malatya&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                        />
                        <a href="https://embed-googlemap.com">
                          embed google map
                        </a>
                      </div>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            ".mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}",
                        }}
                      />
                    </div>
                  </div>

                  {/* FORM */}
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
                    <form action="#!" method="post" autoComplete="on">
                      {/* Username */}
                      <div className="form-group mt-4 mb-4">
                        <label htmlFor="uname">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="uname"
                          placeholder="kullanıcı adınız"
                          title="kullanıcı adınız"
                        />
                      </div>

                      {/* Email */}
                      <div className="form-group mb-4">
                        <label htmlFor="uemail">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="uemail"
                          name="uemail"
                          placeholder="Email adresiniz"
                          title="Email adresiniz"
                        />
                      </div>

                      {/* Subject */}
                      <div className="form-group mb-4">
                        <label htmlFor="usubject">Konu</label>
                        <input
                          type="text"
                          className="form-control"
                          id="usubject"
                          name="usubject"
                          placeholder="Konu"
                          title="Email Konusu"
                        />
                      </div>

                      {/* Content */}
                      <div className="form-group mb-4">
                        <label htmlFor="exampleFormControlTextarea1">
                          İçerik
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>

                      <div className="form-group mt-4 mb-4">
                        <input
                          type="reset"
                          id="reset"
                          name="reset"
                          value="Temizle"
                          className="btn btn-danger me-3"
                        />
                        <button
                          type="submit"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
                        >
                          Gönder{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>{" "}
                {/* end row */}
              </div>
              {/* end container */}
            </div>
            {/* end about services */}
          </section>{" "}
          {/* end about services */}
          {/* start backToTop */}
          <a
            href="#header"
            id="backToTop"
            className="btn "
            style={{ width: "80px", height: "10%", backgroundColor: "#161A70" }}
          >
            <i class="fa-solid fa-arrow-up d-flex justify-content-center mt-2 fs-1 "></i>
          </a>
        </main>
        {/* end codes Main  */}
      </React.Fragment>
    ); //end retur
  } //end render
} //end class

// EXPORT HEADER
export default withTranslation()(Main);
