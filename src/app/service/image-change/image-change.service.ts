import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageChangeService {
  private imageSrcSubject = new BehaviorSubject<string>('');
  imageSrc$ = this.imageSrcSubject.asObservable();

  constructor() {
    this.updateImageSrc(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const windowWidth = (event.target as Window).innerWidth;
    this.updateImageSrc(windowWidth);
  }

  updateImageSrc(windowWidth: number) {
    let imageSrc = '';
    if (windowWidth < 768) {
      imageSrc = 'mobile';
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      imageSrc = 'tablet';
    } else {
      imageSrc = 'desktop';
    }
    this.imageSrcSubject.next(imageSrc);
  }
}
