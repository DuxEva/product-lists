import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Dessert, ImageSize } from '../../model';
import { Subscription } from 'rxjs';
import { ImageChangeService } from '../../service/image-change/image-change.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit, OnDestroy {
  @Input() product: Dessert | undefined;
  imageSrcSubscription: Subscription | undefined;
  imageSrc: ImageSize = 'desktop';

  constructor(private imageChangeService: ImageChangeService) {}

  ngOnInit() {
    this.imageSrcSubscription = this.imageChangeService.imageSrc$.subscribe(
      (src) => {
        this.imageSrc = src as ImageSize;
      }
    );
  }

  ngOnDestroy() {
    if (this.imageSrcSubscription) {
      this.imageSrcSubscription.unsubscribe();
    }
  }
}
