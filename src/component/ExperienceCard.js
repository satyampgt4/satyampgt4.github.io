import "./static/expriencecard.css";

function ExperienceCard(props) {
  const iconstyel = {
    width: "60px",
    height: "60px",
    backgroundColor: "white",
  };
  const imgstyle = {
    height: "60px",
    borderRadius: "5px!important",
  };
  return (
    <>
      <div id="experience-timeline" data-aos="fade-left">
        <div className="vtimeline-point">
          <div className="vtimeline-icon" style={iconstyel}>
            <img src={props.src} alt={props.alt} style={imgstyle} />
          </div>
          <div className="vtimeline-block">
            <span className="vtimeline-date">{props.date}</span>
            <div data-date={props.date} className="vtimeline-content">
              <h3>{props.orgn}</h3>
              <h4>{props.title}</h4>
              <p>{props.dis} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExperienceCard;
