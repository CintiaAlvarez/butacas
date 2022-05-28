let cine: boolean[] = [false, false, true, true, false, true];
let butacasVacias: number = 0;

let butacasDesocupadas = (arreglo: boolean[]) : number => {
let i: number;
  for(i=0; i< arreglo.length; i++) {
      if ( arreglo[i] === false) {
           butacasVacias++
          }
      }
        return butacasVacias;
 }
console.log("La cantidad de butacas desocupadas es: " + butacasDesocupadas(cine));