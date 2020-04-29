const makeConcertComponent = (data, counter) => {
  return `
      <p>${counter}. ${data.name} at the ${data._embedded.venues["0"].name} 
      <button type="submit" id="save-${counter}">Save</button>
      `;
};

const makeArtComponent = (data, counter) => {
  return `
    <p>${counter}. ${data.artwork} at ${data.location} 
      <button type="submit" id="save-${counter}">Save</button>
      `;
};

const makeParkComponent = (data, counter) => {
  return`<p>${counter}. ${data.park_name} at ${data.mapped_location.human_address} 
  <button type="submit" id="save-${counter}">Save</button>
  `;
}
 
const makeInineraryComponent = () => {
  
};
