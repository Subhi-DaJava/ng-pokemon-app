import { ThisReceiver } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  // Récupérer un élément qui vient de DOM, puis interagir avec l'élément sur lequel est appliqué la directive  
  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor)
  }

  @Input ('pokemonBorderCard') borderColor: string;  // déclarer une nouver propriété, alias
  //@Input() pokemonBorderCard: string; // sans alias 

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor); // si aucun couleur #009688 valeur par défault
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

  // private setHeight(height: number) {
  //   this.el.nativeElement.style.height = height + 'px';
  // }
  // private setBorder(color: string) {
  //   let border = 'solid 4px ' + color;
  //   this.el.nativeElement.style.border = border;
  // }

}


