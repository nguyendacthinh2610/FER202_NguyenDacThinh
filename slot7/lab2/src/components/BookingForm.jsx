export default function BookingForm() {
  return (

    <div className="container my-4">
      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <h3 className="text-center mb-3" style={{ fontFamily: "Georgia,serif" }}>Book Your Table</h3>
      <div className="form-card">
        <div className="row g-3">
          <div className="col-md-4">
            <input className="form-control" placeholder="Your Name *" />
          </div>
          <div className="col-md-4">
            <input className="form-control" type="email" placeholder="Your Email *" />
          </div>

          <div className="col-md-4">
            <select className="form-select">
              <option>Select a Service</option>
              <option>Delivery</option>
              <option>Dine-in</option>
              <option>Take away</option>
            </select>
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="6" placeholder="Please write your comment"></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-warning px-4">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
