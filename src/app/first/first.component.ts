import { Component, OnInit } from '@angular/core';
import {FlagService} from '../flag.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css','../../../node_modules/flag-icon-css/css/flag-icon.css','../bootstrap.css']
})
export class FirstComponent implements OnInit {

  iso;
  name:string;
  Isocode:string;
  countriesarr={Isocode:[],name:[]};
  array:string[];
  i:number;
  p:any;
  r:number;
  k:string;
  HasPassport;
  selectedDay: string = '';
  constructor(public fs:FlagService) {

   }
radioChangeHandler (event: any) {
    //update the ui
    this.fs.selectedDay = event.target.value;
  }
  // check(){
  //   if(this.selectedDay==this.k){
  //    this.r=1; 
  //   }
  //   else{
  //     this.r=0;
  //   }
  // }

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
    let countries=this.fs.getcountry();
    for(let g=0;g<4;g++){
    let random=Math.floor(Math.random()*countries.length);
    this.fs.countriesarr.Isocode[g]=countries[random]["alpha-2"];
    this.fs.countriesarr.name[g]=countries[random].name;
    }
    let random1=Math.floor(Math.random()*this.fs.countriesarr.Isocode.length);
    this.fs.k=this.fs.countriesarr.Isocode[random1];
    console.log(this.fs.k);
  }


}
