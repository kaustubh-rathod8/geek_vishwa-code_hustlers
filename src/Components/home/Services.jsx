import React from 'react';

function Services() {
  const cardStyle = {
    marginBottom: '20px', // Adjust the margin as needed
  };

  return (
    <div id='services'>
      <h1 className="sub-title center-text p-7">Our Services</h1>
      <div className="w-100 p-2 h-30 px-4">
        <div className="card-group">
          <div className="card" style={cardStyle}>
            <img
              src="https://images.unsplash.com/photo-1532618793091-ec5fe9635fbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENhcnJlciUyMEd1aWRhbmNlJTIwZm9yJTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Career Guidance</h5>
              {/* <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p> */}
            </div>
          </div>
          <div className="card" style={cardStyle}>
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Lessons</h5>
              {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
            </div>
          </div>
          <div className="card" style={cardStyle}>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Games</h5>
              {/* <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
