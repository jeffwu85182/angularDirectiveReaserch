import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private _el: ElementRef) {
    // 注入 elementRef 就可以取得 DOM
    console.log('directive init,', this._el);
  }

  ngOnInit() {
    // 設定 CSS 樣式
    this._el.nativeElement.style.backgroundColor = 'orange';
    this._el.nativeElement.style.color = 'white';
    this._el.nativeElement.style.display = 'inline-block';
    this._el.nativeElement.style.width = '120px';
    this._el.nativeElement.style.height = '40px';
    this._el.nativeElement.style.textAlign = 'center';
    this._el.nativeElement.style.lineHeight = '2.5';
  }

}
