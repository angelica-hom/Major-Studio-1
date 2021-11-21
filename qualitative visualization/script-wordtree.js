anychart.data.loadJsonFile("data/data.json", function (data) {
  
  //Create data tree
  var tableData = anychart.data.tree(data, 'as-table');
  
  // Create wordtree chart
  var chart = anychart.wordtree(tableData);
  
  // Set the container id
  chart.container("vis");
  
  // Set the root word when data viz initializes
  chart.word("Photograph");
  
  // Configure the maximum font size
  chart.maxFontSize(35);
  
  // Set chart's minimum font size
  chart.minFontSize(4);
  
  // Set font family name.
  chart.fontFamily('Garamond');
  
  // Initiate drawing the chart
  chart.draw();
  
  // Change the root word based on dropdown menu
  function switchType() {
    var select = document.getElementById("typeSelect");
    chart.word(select.value);
  }
  
  // Disable tooltip for all series
  //chart.tooltip(false);
  
  chart.title('Click on the chart');  
  
  //Set event listener on the chart.
  chart.listen('mouseover', function (e) {
    chart.title('You are hovering.');
  });
  
  chart.listen('mouseout', function (e) {
    chart.title('Click on the chart');
  });
  
 // chart.onClickListener('mouseover', function (e) {  })
 
// Gallery code
// "d3" is globally available
// because we have the d3 code
// in our index.html file

// load JSON using d3.json
d3.json('data/data.json')
  .then( json => {
      // execute our 
      // display images function
      displayImages(json);
  }); 

// this function creates all
// of our DOM elements
function displayImages(json){
    // select a <div> with an id of "app"
    // this is where we want all of our
    // images to be added
    let app = d3.select('#app').text('');

    // take our JSON and sort it
    // date descending
    let data = json.sort( (a,b) => (b.date > a.date) ? 1 : -1 );
    // // date ascending
    // let data = json.sort( (a,b) => (a.date > b.date) ? 1 : -1 );


    // define "cards" for each item
    let card = app.selectAll('div.smithsonian-card')
                .data(data)
                .join('div')
                .attr('class', 'smithsonian-card');

    // create a div with a class of "image"
    // and populate it with an <img/> tag
    // that contains our filepath
    card.append('div')
        .attr('class', 'image')
        .append('img')
        .attr('src', d => {
            // all our images are in the "images"
            // folder which we will need to 
            // add to our filename first
            return './images/' + d.filename
        });
}
 
});

