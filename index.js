let originalArray = document.querySelectorAll('*[id]')

collectAllIds = []
for (let getIds = 0; getIds < originalArray.length; getIds++) {
  collectAllIds.push(originalArray[getIds]['id']);
}

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

const allIds = new Socker(collectAllIds).cleaningNames();

const exito = {}

for (i = 0; i < allIds.length; i++) {
  exito[allIds[i]] = document.getElementById(collectAllIds[i]);
}
