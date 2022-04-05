import "./static/projectcard.css";

function ProjectCard(props) {
  const imgStyle = {
    height: "160px",
    width: "245px",
  };

  return (
    <>
      <div
        className="project shadow-large"
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        <div className="project-image">
          <img src={props.Pimgsrc} style={imgStyle} />
        </div>
        <div className="project-info">
          <h3>{props.Pname}</h3>
          <p>{props.Pdes}</p>
          <a
            href={props.Psrc}
            add
            target="_blank"
            style={{ textAlign: "left" }}
          >
            View Project
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
