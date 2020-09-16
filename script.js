// load the dataset 
let attractions;
fetch('attractions.json')
    .then(response => response.json())
    .then(data => {
        attractions = data;
        console.log("attractions",attractions);
    })

function filterData(category) {
    //TODO: filter attractions by the selected category
    let filteredA = [];
    if (category == 'all' || category == null) {
        filteredA = attractions;
    } else {
        filteredA = attractions.filter(a => a["Category"] == category);
    }

    //TODO: filter top 5 attractions
    filteredA.sort((a, b) => (parseInt(b.Visitors)-parseInt(a.Visitors)));
    
    let topfiveA = filteredA.slice(0, 5);
    console.log("top 5 attractions by visitors:", topfiveA);
    renderBarChart(topfiveA);
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
let selector = document.querySelector('#attraction-category');
let category;
selector.addEventListener("change", (event) => {
    category = event.target.value;
    console.log("event:",category);
    filterData(category);
});

setTimeout(() => {
    filterData(category);
}, 500);
