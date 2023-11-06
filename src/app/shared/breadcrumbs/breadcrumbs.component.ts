import { Component, OnDestroy, inject } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  private router = inject(Router);
  public titulo: string = '';
  public tituloSub$: Subscription;

  constructor() {
    this.tituloSub$ = this.getArgumentosRuta()
                        .subscribe(({ titulo }) => {
                          this.titulo = titulo;
                          document.title = `AdminPro - ${ titulo }`
                        });;
  }
  
  ngOnDestroy(): void {
    //Esto solo se ejecuta cuando se hace "logout"
    this.tituloSub$.unsubscribe();
  }

  getArgumentosRuta() {
    return this.router.events
    .pipe(
      filter( (event: any) => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
    );
  }
}
