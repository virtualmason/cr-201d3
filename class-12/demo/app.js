var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var Dodge = {
  make: 'Dodge',
  model: 'Charger',
  color: 'Blue',
  year: '1968',
  minMilesDriven: 5,
  maxMilesDriven: 23,
  milesDrivenEachDay: [],
  totalMilesDriven: 0,
  calcMilesDrivenEachDay: function() {
    for(var i = 0; i < weekDays.length; i++ ) {
      var randomMiles = Math.ceil(Math.random() * (this.maxMilesDriven - this.minMilesDriven) + this.minMilesDriven);
      this.milesDrivenEachDay.push(randomMiles);
    };
  },
  calcTotalMilesDriven: function() {
    for(var i = 0; i < this.milesDrivenEachDay.length; i++) {
      this.totalMilesDriven += this.milesDrivenEachDay[i];
    }
  },
  render: function() {
    this.calcMilesDrivenEachDay();
    this.calcTotalMilesDriven();

    var header = document.createElement('h2')
    header.textContent = this.year + " " + this.make + " " + this.model;
    document.body.appendChild(header);

    var unorderedList = document.createElement('ul')
    for(var i = 0; i < weekDays.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = weekDays[i] + ': ' + this.milesDrivenEachDay[i];
      unorderedList.appendChild(listItem);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalMilesDriven;
    unorderedList.appendChild(total);
    document.body.appendChild(unorderedList);
  }
};

Dodge.render();

function Car(make, model, color, year, minMilesDriven, maxMilesDriven) {
  this.make = make,
  this.model = model,
  this.color = color,
  this.year = year,
  this.minMilesDriven = minMilesDriven,
  this.maxMilesDriven = maxMilesDriven,
  this.milesDrivenEachDay = [],
  this.totalMilesDriven = 0
};

Car.prototype.calcMilesDrivenEachDay = function() {
  for(var i = 0; i < weekDays.length; i++ ) {
    var randomMiles = Math.ceil(Math.random() * (this.maxMilesDriven - this.minMilesDriven) + this.minMilesDriven);
    this.milesDrivenEachDay.push(randomMiles);
  };
};

Car.prototype.calcTotalMilesDriven = function() {
  for(var i = 0; i < this.milesDrivenEachDay.length; i++) {
    this.totalMilesDriven += this.milesDrivenEachDay[i];
  }
}

Car.prototype.render = function() {
  this.calcMilesDrivenEachDay();
  this.calcTotalMilesDriven();

  //Create the row
  var tableRow = document.createElement('tr');

  //Create our first td
  var makeModel = document.createElement('td');
  makeModel.textContent = this.year + this.make + this.model
  tableRow.appendChild(makeModel);

  //loop over array and create the rest of the td
  for(var i = 0; i < weekDays.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = this.milesDrivenEachDay[i];
    tableRow.appendChild(tableData);
  }
  //append td to renderTable
  var renderTable = document.getElementById('renderTable')
  renderTable.appendChild(tableRow);
};

function createTable() {
  //create table
  var table = document.createElement('table');
  table.setAttribute('id', 'renderTable');

  //create row
  var headerRow = document.createElement('tr');

  var location = document.createElement('tr');
  location.textContent = 'Location';
  headerRow.appendChild(location);
  for(var i = 0; i < weekDays; i++){
    var day = document.createElement('td');
    day.textContent = weekDays[i];
    headerRow.appendChild(day);
  }
}

createTable();
var Dodge = new Car('blah', 'blah', 'blah', 'blah', 23, 46);
Dodge.render();
Dodge.render();
Dodge.render();
Dodge.render();
Dodge.render();
Dodge.render();