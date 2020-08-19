import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  loadYTvideo = new EventEmitter();
  stopYTvideo = new EventEmitter();
  loadVideoSubscription: Subscription;
  stopVideoSubscription: Subscription;

  constructor() { }

  loadVideo(videoId: string) {
    this.loadYTvideo.emit(videoId);
  }

  stopVideo(){
    this.stopYTvideo.emit();
  }
}
