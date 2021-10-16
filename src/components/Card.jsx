import { FaBeer } from 'react-icons/fa';

function Card() {
  return (
    <>
      <h2 className="heading text-center">Hotels listing</h2>
      <div className="cardContainer mt-5">
        <div className="container">
          <div className="row border p-3">
            {/* First */}
            <div className="col-md-2">
              <img src="https://d2573qu6qrjt8c.cloudfront.net/10FD4FE0A4EC487DA05C644BF421ACCA/10FD4FE0A4EC487DA05C644BF421ACCA.JPEG" alt="hotel image" height="190" width="160" />
            </div>
            {/* Second */}
            <div className="col-md-8">
              <h3>Byblos Hotel</h3>
              <hr />
              <p>
                24-hour front desk, 24-hour room service, Car rental desk,
                Coffee shop &nbsp;
                <a href="#">Show on Map</a>
              </p>
              <p>
                <span> <FaBeer color="blue"/> Airpot</span>
                <span> <FaBeer color="blue"/> Subways</span>
                <span> <FaBeer color="blue"/> Cruises</span>
                <span> <FaBeer color="blue"/> Rails</span>
              </p>
              <div className="row">
                <div className="col-md-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  provident nihil molestias doloremque esse assumenda.            </div>
                <div className="col-md-4">
                  <span>CHECK-IN</span> | 
                  <span>CHECK-OUT</span> | 
                  <span>TIME</span>
                </div>
              </div>
            </div>
            {/* Third */}
            <div className="col-md-2 text-center">
              <p>PRICE START FR:</p>
              <h5>RS: 256000</h5>
              <p>Taxes and fees included</p>
              <button className="btn btn-primary">RESERVE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
