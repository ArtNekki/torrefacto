import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {SLIDES} from '../../gallery-data';
import {GallerySlide} from '../models/gallery-slide';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {

  constructor(private http: HttpClient) { }

  getImages(): Observable<GallerySlide[]> {
    return of(SLIDES);
  }
}
