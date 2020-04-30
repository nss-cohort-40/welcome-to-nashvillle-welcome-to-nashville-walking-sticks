const makeConcertComponent = (data, counter) => {
  return `
      <p id="content-${counter}">${counter}. ${data.name} at the ${data._embedded.venues["0"].name} 
      <button type="submit" id="save-${counter}">Save</button>
      `;
};

const makeArtComponent = (data, counter) => {
  return `
    <p id="content-${counter}">${counter}. ${data.artwork} at ${data.location} 
      <button type="submit" id="save-${counter}">Save</button>
      `;
};

const makeParkComponent = (data, counter) => {
  return`<p>${counter}. ${data.park_name} at ${data.mapped_location.human_address} 
  <button type="submit" id="save-${counter}">Save</button>
  `;
}
 
const makeItineraryComponent = (value, type) => {
  if (type == "concert") {
    return `<p id="concert-result">Concert: ${value}</p>`
  } else if (type == "park") {
    return ``
  } else if (type == "restaurant") {
    return ``
  } else if (type == "art") {
    return `<p id="art-result">Art: ${value}</p>`
  }
};
