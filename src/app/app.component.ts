import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from './components/base/event-emmiter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public YT: any;
  public video: any;
  public player: any;
  public reframed: Boolean = false;
  visible = false;
  constructor(
    private eventEmitterService: EventEmitterService
  ) {

  }

  isRestricted = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  /* 2. Initialize method for YT IFrame API */
  init() {
    // Return if Player is already created
    if (window['YT']) {
      this.startVideo();
      return;
    }

    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    /* 3. startVideo() will create an <iframe> (and YouTube player) after the API code downloads. */
    window['onYouTubeIframeAPIReady'] = () => this.startVideo();
  }
  ngOnInit() {

    if (this.eventEmitterService.loadVideoSubscription == undefined) {
      this.eventEmitterService.loadVideoSubscription = this.eventEmitterService.
        loadYTvideo.subscribe((videoId: string) => {
          console.log("PLAY " + videoId);
          this.video = videoId;
          this.visible = true;
          this.init();
        });
    }

    if(this.eventEmitterService.stopVideoSubscription == undefined){
      this.eventEmitterService.stopVideoSubscription = this.eventEmitterService.
        stopYTvideo.subscribe(() =>{
          this.stopYTVideo();
          console.log("STOP");
          this.visible = false;
        });
    }

  }

  stopYTVideo(){
    if(this.player !== undefined){
      this.player.stopVideo();
    }
  }

  startVideo() {
    this.reframed = false;
    if(this.player === undefined){
      this.player = new window['YT'].Player('player', {
        start: 0,
        playerVars: {
          autoplay: 1,
          modestbranding: 1,
          controls: 1,
          disablekb: 1,
          rel: 0,
          showinfo: 0,
          fs: 0,
          playsinline: 1
        },
        events: {
          'onStateChange': this.onPlayerStateChange.bind(this),
          'onError': this.onPlayerError.bind(this),
          'onReady': this.onPlayerReady.bind(this),
        }
      });
    }else{
      this.player.loadVideoById(this.video, 1);
    }
  }

  /* 4. It will be called when the Video Player is ready */
  onPlayerReady(event) {

    document.getElementById("player").setAttribute("style", "border: 3px solid #1F5A2E; width: 800px; height:400px; border-radius: 20px; box-shadow: 0px 0px 10px 3px #1F5A2E;");

    event.target.loadVideoById(this.video,1);
    if (this.isRestricted) {
      event.target.mute();
      event.target.playVideo();
    } else {
      event.target.playVideo();
    }
  }

  /* 5. API will call this function when Player State changes like PLAYING, PAUSED, ENDED */
  onPlayerStateChange(event) {
    console.log(event)
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          console.log('started ' + this.cleanTime());
        } else {
          console.log('playing ' + this.cleanTime())
        };
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
        };
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    };
  };

  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  };

  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video)
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    };
  };

  title = 'FMS-Votes';
}
