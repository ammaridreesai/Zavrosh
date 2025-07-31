export const Features = (props) => {
  return (
    <div id="features" className="text-center responsive-section">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Experts in All the Right Positions</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
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
