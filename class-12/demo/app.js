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
    for(var i = 0; i < this.milesDrivenEachDay; i ++) {
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

var Poniac = {
  make: 'Poniac',
  model: 'GTO',
  color: 'Purple',
  year: '1964',
  minMilesDriven: 9,
  maxMilesDriven: 57,
  milesDrivenEachDay: [],
  totalMilesDriven: 0,
  calcMilesDrivenEachDay: function() {
    for(var i = 0; i < weekDays.length; i++ ) {
      var randomMiles = Math.ceil(Math.random() * (this.maxMilesDriven - this.minMilesDriven) + this.minMilesDriven);
      this.milesDrivenEachDay.push(randomMiles);
    };
  },
  calcTotalMilesDriven: function() {
    for(var i = 0; i < this.milesDrivenEachDay; i ++) {
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

var Chevy = {
  make: 'Chevy',
  model: 'Impala',
  color: 'Black',
  year: '1969',
  minMilesDriven: 20,
  maxMilesDriven: 100,
  milesDrivenEachDay: [],
  totalMilesDriven: 0,
  calcMilesDrivenEachDay: function() {
    for(var i = 0; i < weekDays.length; i++ ) {
      var randomMiles = Math.ceil(Math.random() * (this.maxMilesDriven - this.minMilesDriven) + this.minMilesDriven);
      this.milesDrivenEachDay.push(randomMiles);
    };
  },
  calcTotalMilesDriven: function() {
    for(var i = 0; i < this.milesDrivenEachDay; i ++) {
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
Poniac.render();
Chevy.render();