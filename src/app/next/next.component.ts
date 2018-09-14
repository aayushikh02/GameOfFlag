import { Component, OnInit } from '@angular/core';
import {FlagService} from '../flag.service';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css','../bootstrap.css']
})
export class NextComponent implements OnInit {
  // countriesarr={Isocode:[],name:[]};
  constructor(public fs:FlagService) { }
  // next(){
  //   let countries=this.fs.getcountry();
  //   for(let g=0;g<4;g++){
  //   let random=Math.floor(Math.random()*countries.length);
  //   this.fs.countriesarr.Isocode[g]=countries[random]["alpha-2"];
  //   this.fs.countriesarr.name[g]=countries[random].name;
  //   }
  //   let random1=Math.floor(Math.random()*this.fs.countriesarr.Isocode.length);
  //   this.fs.k=this.fs.countriesarr.Isocode[random1];
  //   console.log(this.fs.k);
  // }
  
  ngOnInit() {
    this.fs.check();
  }

}
