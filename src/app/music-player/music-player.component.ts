import {Component, OnInit} from '@angular/core';
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss'
})
export class MusicPlayerComponent implements OnInit{
  tracksPlaying: number = 0;
  currentTrack: HTMLAudioElement = new Audio();
  sngIndx: number = 0;
  soundSrcs: string[] = ['assets/track-files/9th Scientist - I Love Hip Hop.mp3', 'assets/track-files/Doctor P - Sweet Shop.mp3', 'assets/track-files/Dub Terminator - Native people (dubstep mix).mp3', 'assets/track-files/Nul Tiel Records - Sometimes.mp3', 'assets/track-files/Shaolin Dub - Kick Dis.mp3'];
  currentTrackPath: string = this.soundSrcs[this.sngIndx];

  ngOnInit(): void {
    this.currentTrack.src = this.soundSrcs[0];
    this.currentTrack.load();
  }

  playAudio(): void{
      this.currentTrack.play();
  }

  pauseAudio(): void {
    this.currentTrack.pause()
  }

  playNext(): void {
    this.currentTrack.pause();
    if(this.sngIndx < this.soundSrcs.length - 1){
      this.sngIndx++
      this.currentTrackPath = this.soundSrcs[this.sngIndx];
      this.currentTrack.src = this.currentTrackPath;
      this.currentTrack.load();
      this.playAudio();
    } else {
      console.log('No more songs');
    }
  }

  playPrev(): void {
    this.currentTrack.pause();
    if(this.currentTrack.currentTime > 5) {
      this.currentTrack.load();
      this.currentTrack.play();
    } else if (this.sngIndx > 0) {
      this.sngIndx--;
      this.currentTrackPath = this.soundSrcs[this.sngIndx];
      this.currentTrack.src = this.currentTrackPath;
      this.currentTrack.load();
      this.playAudio();
    }
     else {
      console.log('No Previous Tracks');
    }
  }

  checkTime(): void {
    console.log(this.currentTrack.currentTime)
  }
}
