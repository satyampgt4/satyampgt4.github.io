import "./static/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-5 copyright">
              <p>Copyright &copy; 2021 Satyam Dengre</p>
            </div>
            <div className="col-sm-2 top">
              <span id="to-top">
                <i className="fa fa-chevron-up" aria-hidden="true"></i>
              </span>
            </div>
            <div className="col-sm-5 social">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/satyam-dengre-882862190/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/satyampgt4" target="_blank">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:satyamgpt444@gmail.com" target="_blank">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sat_yam_d/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100004950041080"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/sat_yam_d" target="_blank">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
