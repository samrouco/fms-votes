import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  loadYTvideo = new EventEmitter();
  stopYTvideo = new EventEmitter();
  stopIntroAudio = new EventEmitter();
  startIntroAudio = new EventEmitter();
  loadVideoSubscription: Subscription;
  stopVideoSubscription: Subscription;
  stopIntroAudioSubscription: Subscription;
  startIntroAudioSubscription: Subscription;

  constructor() { }

  loadVideo(videoId: string) {
    this.loadYTvideo.emit(videoId);
  }

  stopVideo(){
    this.stopYTvideo.emit();
  }

  stopAudio(){
    this.stopIntroAudio.emit();
  }

  startIntro(path: string) {
    this.startIntroAudio.emit(path);
  }


}
