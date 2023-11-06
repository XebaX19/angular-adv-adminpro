import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {
  public intervalSub: Subscription;

  constructor() {

    // //El Observable solo se ejecuta si hay alguien suscripto a él...
    // this.retornaObservable().pipe(
    //   retry(1) //Cantidad de reintentos en caso de que falle el Observable
    // )
    // .subscribe(
    //   valor => console.log('Subs: ', valor),
    //   error => console.error('Error: ', error),
    //   () => console.info('Observable terminado')
    // );

    this.intervalSub = this.retornaIntervalo()
      .subscribe(
        valor => console.log(valor)
      );
  }
  ngOnDestroy(): void {
    //Se ejecuta el unsubscribe cuando se elimina el componente
    this.intervalSub.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    //El simbolo $ al final se usa para indicar que es un Observable (por convencion, no es obligatorio...)
    const intervalo$ = interval(200) //La funcion "interval" de rxJs devuelve un nro secuencial cada cierto tiempo definido en el interval
                        .pipe(
                          map( valor => { //El map me permite trabajar el valor recibido, y retornar lo que yo quiera (en este caso, le sumo 1 al valor recibido)
                            return valor + 1;
                          }),
                          filter(valor =>  //El filter me permite filtrar valores que no quiera que se emitan. Si devuelvo true, se emite, si devuelvo false, NO se emite
                            (valor % 2 === 0) ? true : false
                          ),
                          take(10), //Indicamos cuantas emisiones del Observable se necesitan, llegado a este nro, se finaliza el Observable
                          //El orden de lo que coloco en el pipe influye, por ejemplo, si coloco el "take" al principio va a mostrar solo hasta el 10. Caso contario, muestra hasta el 20, porque el filter en false hace que no llegue al take
                        );

    return intervalo$;
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>( observer => {
      
      const intervalo = setInterval(() => {
        i++;
        observer.next(i); //Pasa el valor al subscriber

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete(); //Para indicar que el Observable no va a emitir más valores
        }

        if (i === 2) {
          observer.error('i llegó al valor de 2'); //Emite error, con esto termina el Observable, no continúa...
        }
      }, 1000);
    });
  }
}
