import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  //Recupero del DOM el elemento con id "theme" (un <link>) para luego actualizar su href
  private linkTheme = document.querySelector('#theme');

  constructor() {
    const themeLocalStorage = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';

    this.linkTheme?.setAttribute('href', themeLocalStorage);
  }

  changeTheme(theme: string) {
    const urlNewTheme = `./assets/css/colors/${ theme }.css`;

    this.linkTheme?.setAttribute('href', urlNewTheme);
    localStorage.setItem('theme', urlNewTheme);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    //Para obtener todos los elementos que coinciden con el nombre de la clase indicada: ".selector"
    const links = document.querySelectorAll('.selector');

    if (!links) {
      return;
    }
    
    links.forEach(element => {
      element.classList.remove('working'); //Para eliminar la clase "working" del elemento

      const btnTheme = element.getAttribute('data-theme'); //Para obtener el valor de un atributo personalizado
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;

      const currentTheme = this.linkTheme?.getAttribute('href'); //Para obtener el valor del atributo "href"

      if (btnThemeUrl === currentTheme) {
        element.classList.add('working'); //Para setear la clase "working" en el elemento
      }
    });
  }
}
