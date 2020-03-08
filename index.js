class Socker {
  constructor(data) {
    this.data = data
  }

  cleaningNames() {
    const collect = [];
    for (let names = 0; names < this.data.length; names++) {
      let firstString = this.data[names].split("-").join(" ").split("_").join(" ").replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
      collect.push(firstString.split(" ").join(""));
    }

    return collect.map(function(name) {
      return name.charAt(0).toLocaleLowerCase() + name.slice(1);
    });
  }
}

const originalArray = [
  'first-id',
  'second-id',
  'third-id'
]

const allIds = new Socker(originalArray).cleaningNames();

const exito = {}

for (i = 0; i < allIds.length; i++) {
  exito[allIds[i]] = document.getElementById(originalArray[i]);
}

// console.log(exito.secondId.style.color = "red");

