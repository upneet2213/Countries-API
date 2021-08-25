import Country from "./Country";
import Modal from "./Modal";
import React, { useState, useEffect } from "react";
import { FaMoon, FaSearch } from "react-icons/fa";

// const sample = async () => {
//   const response = await fetch(
//     "https://restcountries.eu/rest/v2/name/pakistan"
//   );
//   const json = await response.json();
//   return json;
// };
// const pak = sample();
// console.log(pak);
const defaultCountries = [
  "Germany",
  "United States of America",
  "Brazil",
  "Afghanistan",
  "Iceland",
  "Åland Islands",
  "Albania",
  "Algeria",
];
function App() {
  const [list, setList] = useState([]);
  const [val, setVal] = useState("");
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(val);
    setVal("");
  };
  const fetchCountries = async (x) => {
    try {
      const data = await fetch(`https://restcountries.eu/rest/v2/all`);
      const response = await data.json();
      const myCountries = response.filter(
        (country) => x.indexOf(country.name) !== -1
      );
      setList(myCountries);
    } catch {
      console.error("Errors");
    }
  };
  const fetchCountry = async () => {
    try {
      const data = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
      const response = await data.json();
      setList(response);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchCountries(defaultCountries);
  }, []);
  useEffect(() => {
    fetchCountry(name);
  }, [name]);

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div className="body">
      <div className="header">
        <button className="reset btn" onClick={fetchCountries}>
          <h1>Where in the World?</h1>
        </button>
        <button className="btn change-mode">
          <FaMoon size="20px" />
          <p>Dark Mode</p>
        </button>
      </div>
      <div className="section">
        <div className="section-header">
          <div className="form">
            <form className="country-type" onSubmit={handleSubmit}>
              <button type="submit" className="btn search">
                <FaSearch size="20px" />
              </button>
              <input
                type="text"
                placeholder="Search for a country..."
                onChange={(e) => setVal(e.target.value)}
                value={val}
              />
            </form>
          </div>
          <div className="filter">
            <form className="filter">
              <select name="region" className="region">
                <option value="value" selected disabled hidden>
                  Filter by Region
                </option>
                <option value="all">All</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
              </select>
            </form>
          </div>
        </div>
        <div className="section-gallery">
          {list.map((item, index) => (
            <button className="btn">
              <Country
                item={item}
                key={item.id}
                showModal={showModal}
                onClick={() => setModal(item)}
              />
            </button>
          ))}
          {showModal ? <Modal /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
