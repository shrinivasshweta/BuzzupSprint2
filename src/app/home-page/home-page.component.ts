import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('input') inputElement: ElementRef;

  @Output() onBlur = new EventEmitter<string>();
  @Output() onClose = new EventEmitter<void>();
  @Output() onEnter = new EventEmitter<string>();
  @Output() onFocus = new EventEmitter<string>();
  @Output() onOpen = new EventEmitter<void>();

  searchVisible = false;

  public close(): void {
    this.searchVisible = false;
    this.inputElement.nativeElement.value = '';
    this.onClose.emit();
  }

  public open(): void {
    this.searchVisible = true;
    this.inputElement.nativeElement.focus();
    this.onOpen.emit();
  }

  onBlurring(searchValue: string) {
    if (!searchValue) {
      this.searchVisible = false;
    }
    this.onBlur.emit(searchValue);
  }

  onEnterring(searchValue: string) {
    this.onEnter.emit(searchValue);
  }

  onFocussing(searchValue: string) {
    this.onFocus.emit(searchValue);
  }

}
