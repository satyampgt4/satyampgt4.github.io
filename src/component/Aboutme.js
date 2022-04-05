import "./static/aboutme.css";

function Aboutme() {
  return (
    <>
      <div id="about" data-aos="fade-right" data-aos-duration="1500">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className="heading" data-aos="fade-right">
                About Me
              </h2>
            </div>
            <div className="col-md-8">
              <p>
                {" "}
                I'm Satyam, a Pre Final year student pursuing Bachelors in
                Information Technology Engineering. I am an enthusiastic and
                social person who loves to take up new challenges and learn new
                skills. I love meeting new people, exchanging ideas and
                spreading knowledge and positivity.
              </p>
              <br />
              <p>
                Currently working on web Technology in MERN stack I am also
                intrested in App devlopment and Cloud Computing
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
