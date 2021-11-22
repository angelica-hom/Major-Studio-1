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
  
  //chart.title('Click on the chart');  
  
  //Set event listener on the chart.
  //chart.listen('mouseover', function (e) {
  //  chart.title('You are hovering.');
 // });
  
  //chart.listen('mouseout', function (e) {
 //   chart.title('Click on the chart');
  //});
  
  // add a listener
  //chart.listen("pointClick", function (e){
  //  chart.title('You selected ' + e.point.get('value'));
  //});
  
  
});

