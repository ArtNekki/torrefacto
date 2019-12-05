import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GallerySlide} from '../../core/models/gallery-slide';
import {GalleryService} from '../../core/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  @Input() timer: number;

  slides: GallerySlide[];
  activeSlide;
  pSub;
  slidesInterval;

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.pSub = this.galleryService.getImages().subscribe((slides: GallerySlide[]) => {
      this.slides = slides;
      this.activeSlide = this.slides[1];
    });

    if (this.timer) {
      this.slidesInterval = setInterval(() => {
        this.startAutoSlide();
      }, this.timer);
    }
  }

  ngOnDestroy(): void {
    this.pSub.unsubscribe();
    this.slidesInterval.clearInterval();
  }

  nextSlide() {
    const currentIndex = this.slides.indexOf(this.activeSlide);
    this.setActiveSlide(this.slides[currentIndex + 1] || this.slides[0]);
  }

  prevSlide() {
    const currentIndex = this.slides.indexOf(this.activeSlide);
    this.setActiveSlide(this.slides[currentIndex - 1] || this.slides[this.slides.length - 1]);
  }

  setActiveSlide(slide: GallerySlide) {
    this.activeSlide = slide;
  }

  startAutoSlide() {
    this.nextSlide();
  }

  setImage(name: string) {
    console.log(`assets/img/content/${name}.jpg`);
    return `url(assets/img/content/${name}.jpg)`;
  }
}
