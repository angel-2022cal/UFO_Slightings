var sightings = data;
var tbody = d3.select("tbody");

// Button handler 
function handleSubmit() {
    d3.event.prebentDefault();

    // select the date input value from the form 
    var date = d3.select("#datetime").node().value;
    console.log(date);

    var city = d3.select("#city").node().value;
    console.log(city);

    var state = d3.select("#country").node().value;
    console.log(state);

    var country = d3.select("#country").node().value;
    concole.log(country);

    var shape = d3.select("#shape").node().value;
    concole.log(shape);

    //clear the input value
    d3.select("#datetime").node().value = "";
    d3.select("#city").node().value = "";
    d3.select("#state").node().value = "";
    d3.select("#country").node().value = "";
    d3.select("#shape").node().value = "";

    //check that there was at least one input 
    if (date !== "" || city !=="" || state !== "" || country !== ""|| shape !== "") {
        //build the table
        buildTable(date, city, state, country, shape);
    }
    else {
        // Print a message to the console starting that no filtered were inputed
        console.log("There was no input criteria entered.")
    }
};

function buildTable(date, city, state, country, shape) {
    //Remove previous table if it is present 
    tbody.html("");

    //create an array to store the filtered data
    var filteredData = [];

    //Start filtering the data using the filter inputs
    // check to see if a date was entered
    if (date !== "") {
        filteredData = sightings.filter(sightiing => sightings.datetime == date);
    }
    else {
        //if there was no date input the filtered data will equal the original datasets
        filteredData = sightings;
    };

     // Check to see if a city was entered
     if (city !== "") {
        // Filter the data if there was a city input
        filteredData = filteredData.filter(data => data.city === city);
    };

     // Check to see if a state was entered
     if (state !== "") {
        // Filter the data if there was a state input
        filteredData = filteredData.filter(data => data.state === state);
    };

    // Check to see if a  was entered
    if (country !== "") {
        // Filter the data if there was a country input
        filteredData = filteredData.filter(data => data.country === country);
    };

    // Check to see if a shape was entered
    if (shape !== "") {
        // Filter the data if there was a shape input
        filteredData = filteredData.filter(data => data.shape === shape);
    };

    //write the filtered data to the console 
    console.log(filteredData);

    //create a new row for each set of filtered data
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.defineProperties(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

//add event listener for submit button 
d3.select("#filter-btn").on("click", handleSubmit); 