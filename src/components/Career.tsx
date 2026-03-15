import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Journey</h4>
                <h5>Self-Learning & Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started my journey in web development by learning modern technologies like html,css java scriptReact, Node.js, and MongoDB Built multiple practice projects to understand full-stack development, API design, and scalable web application architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Student Builder</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed several full-stack web applications using React and Node.js. Implemented backend services using Supabase and Firebase, and designed scalable APIs with modern development practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Developer</h4>
                <h5>preorder.food</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building preorder.food, a production-level web platform that allows students to pre-order food and skip long queues in college cafeterias. Designed and developed the full stack application including frontend, backend APIs, database architecture, and deployment.Focused on performance, scalability, and real-world usability, while also exploring integration of Large Language Models into modern web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
