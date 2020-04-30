const makeConcertComponent = (data, counter) => {
  return `
      <p id="content-${counter}">${counter}. ${data.name} at the ${data._embedded.venues["0"].name}</p> 
      <button type="submit" id="save-${counter}">Save</button>
      `;
};

const makeArtComponent = (data, counter) => {
  return `
    <p id="content-${counter}">${counter}. "${data.artwork}" at ${data.location}</p>
    <a href="${data.page_link.url}" target="_blank">More info</a>
    <button type="submit" id="save-${counter}">Save</button>
    `;
};

const makeParkComponent = (data, counter) => {
  return`<p id ="content-${counter}">${counter}. ${data}</p> 
  <button type="submit" id="save-${counter}">Save</button>
  `;
}

const makeRestaurantComponent = (data, counter) => {
  return`<p id ="content-${counter}">${counter}. ${data} 
  <button type="submit" id="save-${counter}">Save</button>
  `
}
 
const makeItineraryComponent = (value, type) => {
  if (type == "concert") {
    return `<p id="concert-result">Concert: ${value}</p>`
  } else if (type == "parks") {
    return `<p id="parks-result">Park: ${value}</p>`
  } else if (type == "restaurant") {
    return `<p id="restaurant-result">Restaurant: ${value.replace(/\$/g, "")}</p>`
  } else if (type == "art") {
    return `<p id="art-result">Art: ${value}</p>`
  }
};
