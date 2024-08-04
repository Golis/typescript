// Clase base: Vehículo
class Vehiculo {
    marca: string;
    modelo: string;
    año: number;
  
    constructor(marca: string, modelo: string, año: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  
    arrancar(): void {
      console.log(`${this.marca} ${this.modelo} ha arrancado.`);
    }
  
    detener(): void {
      console.log(`${this.marca} ${this.modelo} se ha detenido.`);
    }
  }
  
  // Clase derivada: Coche
  class Coche extends Vehiculo {
    numPuertas: number;
  
    constructor(marca: string, modelo: string, año: number, numPuertas: number) {
      super(marca, modelo, año);
      this.numPuertas = numPuertas;
    }
  
    tocarClaxon(): void {
      console.log(`${this.marca} ${this.modelo} está tocando el claxon.`);
    }
  }
  
  // Clase derivada: Motocicleta
  class Motocicleta extends Vehiculo {
    tipoManillar: string;
  
    constructor(marca: string, modelo: string, año: number, tipoManillar: string) {
      super(marca, modelo, año);
      this.tipoManillar = tipoManillar;
    }
  
    hacerWheelie(): void {
      console.log(`${this.marca} ${this.modelo} está haciendo un wheelie.`);
    }
  }
  
  // Crear instancias de Coche y Motocicleta
  const miCoche = new Coche('Toyota', 'Corolla', 2020, 4);
  const miMoto = new Motocicleta('Yamaha', 'MT-07', 2019, 'Deportivo');
  
  // Uso de métodos
  miCoche.arrancar();
  miCoche.tocarClaxon();
  miCoche.detener();
  
  miMoto.arrancar();
  miMoto.hacerWheelie();
  miMoto.detener();
  