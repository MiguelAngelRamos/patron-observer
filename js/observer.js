class Subject {

  observers = [];
  constructor() {
    this.observers = [];
  }

  //* Método para subscribirse
  subscribe(observer) {
    this.observers.push(observer);
  }

  //* Eliminar la Subscripción
  unsubscribe(observer) {
    this.observers = this.observers.filter( obs => obs !== observer);
    // this.observers = this.observers.filter( obs => {
    //   return obs !== observer;
    // });
  }

  //* Método que notifica
  notify(data) {
    this.observers.forEach( e => {
      e.refresh(data)
    });
  }
  
}

//* Observer
class Observer {

  constructor(fn) {
    this.fn = fn;
  }

  refresh(data) {
    this.fn(data);
  }
}

//* Crear las instancias
const subject = new Subject();

const observador_1 = new Observer(data => console.log("Soy el Observador 1: " + data));

const observador_2 = new Observer(data => document.getElementById('div1').innerHTML = "Observador 2:  " + data);
//* Ejecutar

subject.subscribe(observador_1);
subject.subscribe(observador_2);

subject.unsubscribe(observador_1);
subject.unsubscribe(observador_2);

function change() {
  subject.notify(document.getElementById('myText').value);
}