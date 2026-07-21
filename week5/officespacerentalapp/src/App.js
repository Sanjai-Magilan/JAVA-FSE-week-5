import "./App.css";
import office from "./office.jpg";
import office1 from "./cts.jpg";
import office2 from "./tcs.jpg";

const element = "Office Space";

const officeList = [
  {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai",
    Image: office,
  },
  {
    Name: "CTS",
    Rent: 65000,
    Address: "Bangalore",
    Image: office1,
  },
  {
    Name: "TCS",
    Rent: 45000,
    Address: "Hyderabad",
    Image: office2,
  },
];

function App() {
  return (
    <>

      {officeList.map((office, index) => (
        <div className="office-card" key={index}>
          <h1>{element}, at Affordable Range</h1>
          <img src={office.Image} alt={office.Name} width="250" height="150" />

          <h2>Name: {office.Name}</h2>

          <h3 style={{ color: office.Rent <= 60000 ? "red" : "green" }}>
            Rent: Rs. {office.Rent}
          </h3>

          <h3>Address: {office.Address}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
