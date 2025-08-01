import React from "react";

export const TeamSimple = (props) => {
  if (!props.data) return <div>Loading team...</div>;

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Meet The Team</h2>
          <p>Simple team display for testing image loading</p>
        </div>
        
        <div className="row">
          {props.data.map((member, index) => (
            <div key={`simple-${index}`} className="col-md-3 col-sm-6 team">
              <div className="thumbnail">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="team-img"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                  onError={(e) => {
                    console.log('Image failed to load:', member.img);
                    e.target.style.backgroundColor = '#f0f0f0';
                    e.target.alt = 'Image not found';
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully:', member.img);
                  }}
                />
                <div className="caption">
                  <h4>{member.name}</h4>
                  <p>{member.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};