import "./static/resume.css";
function Resume() {
  // const MoveDown = () =>{
  //     document.body.classList.remove('active');
  //     document.getElementById("myHeader").classList.remove('active');
  // };
  return (
    <>
      <div id="lead" data-aos="fade-up" data-aos-duration="1500">
        <div id="lead-content">
          <h2>Hi!...I am </h2>
          <h1>Satyam Dengre</h1>
          {/* <a href="#" className="btn-rounded-white">Download Resume</a> */}
        </div>
        <div id="lead-overlay"></div>
      </div>
    </>
  );
}

export default Resume;
