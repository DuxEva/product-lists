import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { ImageSize } from '../../model';

@Injectable({
  providedIn: 'root',
})
export class ImageChangeService {
  private imageSrcSubject = new BehaviorSubject<ImageSize>('desktop');
  imageSrc$ = this.imageSrcSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.updateImageSrc(window.innerWidth);
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  onResize(event: Event) {
    const windowWidth = (event.target as Window).innerWidth;
    this.updateImageSrc(windowWidth);
  }

  updateImageSrc(windowWidth: number) {
    let imageSrc: ImageSize;
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
