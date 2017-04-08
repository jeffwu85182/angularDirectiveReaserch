import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  // 加入一個 Input 來接收外部的值
  @Input() bgColor: string;

  // 設定一個 get，如果 bgColor 沒有值，預設給 orange
  get backgroundColor() {
    console.log('this.bgColor', this.bgColor);
    return this.bgColor || 'orange';
  }

  constructor(private _el: ElementRef) {
    // 注入 elementRef 就可以取得 DOM
    console.log('directive init,', this._el);
  }

  // 監聽滑鼠移入的事件處理
  @HostListener('mouseenter') onMouseEnter() {
    this._el.nativeElement.style.backgroundColor = 'green';
  }

  // 監聽滑鼠移出的事件處理
  @HostListener('mouseleave') onMouseLeave() {
    this._el.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  ngOnInit() {
    // 設定 CSS 樣式
    this._el.nativeElement.style.backgroundColor = this.backgroundColor;
    this._el.nativeElement.style.color = 'white';
    this._el.nativeElement.style.display = 'inline-block';
    this._el.nativeElement.style.width = '120px';
    this._el.nativeElement.style.height = '40px';
    this._el.nativeElement.style.textAlign = 'center';
    this._el.nativeElement.style.lineHeight = '2.5';
  }

}
