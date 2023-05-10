import personImage from "../assets/icon-person.svg";
import cogImage from "../assets/icon-cog.svg";
import chartImage from "../assets/icon-chart.svg";

function Contact() {
  return (
    <>
      <section className="contact">
        <div className="content">
          <h1 className="title">Contact</h1>
          <h2 className="heading">Ask us about</h2>
          <div className="row">
            <div className="item">
              <img src={personImage} alt="person" />
              <p className="text">The quality of our talent network</p>
            </div>
            <div className="item">
              <img src={cogImage} alt="cog" />
              <p className="text">Usage & implementation of our software</p>
            </div>
            <div className="item">
              <img src={chartImage} alt="chart" />
              <p className="text">How we help drive innovation</p>
            </div>
          </div>
        </div>
        <form className="form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Company Name" required />
          <input type="text" placeholder="Title" required />
          <textarea
            name="message"
            rows={6}
            placeholder="Message"
            required
          ></textarea>
          <button className="btn">sumbit</button>
        </form>
      </section>
    </>
  );
}

export default Contact;
