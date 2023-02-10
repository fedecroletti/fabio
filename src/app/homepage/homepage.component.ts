import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  title = 'my-app';
  testoparagrafo: string = "mio testo di prova per paragrafo";
  myPippo: string = 'Pippo';
  numero1: number = 1;
  numero2: any = 2;

  isActive: boolean = false;

  getMaiuscolo(): string{
    return this.myPippo.toUpperCase();
  }

  getSomma(): number{
    return this.numero1 + this.numero2;
  }

  getCalcolo(): number{
    return 200;
  }

  public chiamante(): number{
    return this.calcoloPersonale(2);
  }

  private calcoloPersonale(param: number): number{
    return param * 2;
  }

}
