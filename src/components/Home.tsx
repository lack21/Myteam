import personImage from "../assets/icon-person.svg";
import cogImage from "../assets/icon-cog.svg";
import chartImage from "../assets/icon-chart.svg";
import avatarKady from "../assets/avatar-kady.jpg";
import avatarAiysha from "../assets/avatar-aiysha.jpg";
import avatarArthur from "../assets/avatar-arthur.jpg";

function Home() {
  return (
    <>
      <header className="header">
        <h1 className="title">
          Find the
          <br />
          best <span>talent</span>
        </h1>
        <p className="text">
          Finding the right people and building high performing teams can be
          hard. Most companies aren't tapping into the abundance of global
          talent. We're about to change that.
        </p>
      </header>

      <article className="article">
        <h2 className="heading">
          Build & manage
          <br /> distributed teams like no one else.
        </h2>
        <div className="row">
          <div className="item">
            <img src={personImage} alt="person-icon" />
            <div className="content">
              <h3 className="name">Experienced Individuals</h3>
              <p className="text">
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={cogImage} alt="cog-icon" />
            <div className="content">
              <h3 className="name">Easy to Implement</h3>
              <p className="text">
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={chartImage} alt="chart-icon" />
            <div className="content">
              <h3 className="name">Enhanced Productivity</h3>
              <p className="text">
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="testimonials">
        <h2 className="heading">
          Delivering real results for top companies. Some of our
          <span> success stories.</span>
        </h2>
        <div className="row">
          <div className="item">
            <p className="text">
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </p>
            <h3 className="name">Kady Baker</h3>
            <h4 className="profession">Product Manager at Bookmark</h4>
            <img src={avatarKady} alt="avatar-kady" />
          </div>
          <div className="item">
            <p className="text">
              “We needed to automate our entire onboarding process. The team
              came in and built out the whole journey. Since going live, user
              retention has gone through the roof!”
            </p>
            <h3 className="name">Aiysha Reese</h3>
            <h4 className="profession">Founder of Manage</h4>
            <img src={avatarAiysha} alt="avatar-aiysha" />
          </div>
          <div className="item">
            <p className="text">
              “Amazing. Our team helped us build an app that delivered a new
              experience for hiring a physio. The launch was an instant success
              with 100k downloads in the first month.”
            </p>
            <h3 className="name">Arthur Clarke</h3>
            <h4 className="profession">Co-founder of MyPhysio</h4>
            <img src={avatarArthur} alt="avatar-arthur" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
