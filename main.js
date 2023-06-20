
class Human {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  }
  
  class Apartment {
    constructor() {
      this.residents = [];
    }
  
    addResident(resident) {
      this.residents.push(resident);
    }
  }
  
  class House {
    constructor(maxApartments) {
      this.maxApartments = maxApartments;
      this.apartments = [];
    }
  
    checkOfCount() {
      return this.apartments.length < this.maxApartments;
    }
  
    addApartment(apartment) {
      
      if (this.checkOfCount()) {
        this.apartments.push(apartment);
        console.log("Apartment added successfully.");
      } else {
        console.log("Cannot add apartment. No place available.");
      }
      return this.checkOfCount();
    }
  
    displayApartmentsAndResidents() {
      console.log("List of apartments and residents in the house:");
      this.apartments.forEach((apartment, index) => {
        console.log(`Apartment ${index + 1}:`);
        console.log("Residents:");
        apartment.residents.forEach((resident) => {
          console.log(`- ${resident.name} (${resident.gender})`);
        });
      });
    }
  }
  
  const human1 = new Human("Ivan", "male");
  const human2 = new Human("Vika", "female");
  
  const apartment1 = new Apartment();
  const apartment2 = new Apartment();
  
  apartment1.addResident(human1);
  apartment2.addResident(human2);
  
  const house = new House(2);
  
  house.addApartment(apartment1);
  house.addApartment(apartment2);
  
  house.displayApartmentsAndResidents();
  