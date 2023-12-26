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