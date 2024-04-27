import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss'
})
export class MusicPlayerComponent implements OnInit{

  ngOnInit() {
    this.playAudio()
  }

  playAudio(){
    let audio = new Audio();
    audio.src = 'assets/track-files/9th Scientist - I Love Hip Hop.mp3';
    audio.load();
    audio.play();
  }
}
