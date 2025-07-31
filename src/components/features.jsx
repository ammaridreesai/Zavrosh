export const Features = (props) => {
  return (
    <div id="features" className="text-center responsive-section">
      <div className="container">
        <div className="col-md-10 offset-md-1 section-title">
          <h2>Multi-Industry Expertise</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
