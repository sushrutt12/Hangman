import { Component } from '@angular/core';
import {getMovie,createMask,getMovieId,reveal,charExistsInMovie} from '../../model/movie';
import { Alphabet } from './alphabet';
import {LocalStorageService} from 'ngx-webstorage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

constructor (private localSt:LocalStorageService){  
if(!this.localSt.retrieve('winCounter')){
    this.localSt.store('winCounter',0);
    this.localSt.store('lossCounter',0);
  }
  else{
    this.winCounter=this.localSt.retrieve('winCounter');
    this.lossCounter=this.localSt.retrieve('lossCounter');
  }
}
 
	a: Alphabet = {
    value:'a',
    isValid:true
  };
	b: Alphabet = {
    value:'b',
    isValid:true
  };
	c: Alphabet = {
    value:'c',
    isValid:true
  };

	d: Alphabet = {
    value:'d',
    isValid:true
  };

	e: Alphabet = {
    value:'e',
    isValid:true
  };

	f: Alphabet = {
    value:'f',
    isValid:true
  };

	g: Alphabet = {
    value:'g',
    isValid:true
  };

	h: Alphabet = {
    value:'h',
    isValid:true
  };

	i: Alphabet = {
    value:'i',
    isValid:true
  };
  	j: Alphabet = {
    value:'j',
    isValid:true
  };
  k: Alphabet = {
    value:'k',
    isValid:true
  };
  l: Alphabet = {
    value:'l',
    isValid:true
  };
  m: Alphabet = {
    value:'m',
    isValid:true
  };
  n: Alphabet = {
    value:'n',
    isValid:true
  };
  o: Alphabet = {
    value:'o',
    isValid:true
  };
  p: Alphabet = {
    value:'p',
    isValid:true
  };
  q: Alphabet = {
    value:'q',
    isValid:true
  };
  r: Alphabet = {
    value:'r',
    isValid:true
  };
  s: Alphabet = {
    value:'s',
    isValid:true
  };
  t: Alphabet = {
    value:'t',
    isValid:true
  };
  u: Alphabet = {
    value:'u',
    isValid:true
  };
  v: Alphabet = {
    value:'v',
    isValid:true
  };
  w: Alphabet = {
    value:'w',
    isValid:true
  };
  x: Alphabet = {
    value:'x',
    isValid:true
  };
  y: Alphabet = {
    value:'y',
    isValid:true
  };
  z: Alphabet = {
    value:'z',
    isValid:true
  };
  isWin=false;
  isLose=false;
  // alphabets="abcdefghijklmnopqrstuvwxyz".split('');
  alphabets=[this.a,this.b,this.c,this.d,this.e,this.f,this.g,this.h,this.i,this.j,this.k,this.l,this.m,this.n,this.o,this.p,this.q,this.r,this.s,this.t,this.u,this.v,this.w,this.x,this.y,this.z];
  maskedWord="";
  lives=10;
  title = 'Welcome to Hangman game';
  lettersUsed= "";
  id=-1;
  winCounter=0;
  lossCounter=0;

  onClickOfAlphabet(a){  	
  	this.lettersUsed+=a.value;
  	a.isValid=false;
  	if(charExistsInMovie(this.id,a.value)){
  	var word=reveal(this.id,a.value,this.maskedWord);
  		this.maskedWord=word;
  		if (this.maskedWord.indexOf('*')===-1 && this.lives>0)
  		{
  			this.isWin=true;
  			this.id=-1
        var win=this.getLocalStorage('winCounter');
        console.log('win counter'+win);
        win+=1;
        this.setLocalStorage('winCounter',win);
        this.winCounter=win;

  		}
  	  	 }
  	 else{
  	 	this.lives-=1
  	 }
  	 if(this.lives===0)
  	 	{	this.maskedWord=getMovie(this.id);
  	 		this.isLose=true;
        var loss=this.getLocalStorage('lossCounter');
        console.log('LOss counter'+loss);
        loss+=1;
        this.setLocalStorage('lossCounter',loss);
        this.lossCounter=loss;
        //update counter and store again
  	 		this.id=-1
  	 			
  	 		}
  		}

  onClickReset(alphabets) {
    	
    	for (var i =0; i< alphabets.length ;  i++) {
    		alphabets[i].isValid = true;
    	}
    	this.lettersUsed="";
    	this.id=getMovieId();
    	var m=getMovie(this.id);
    	this.maskedWord=createMask(m);
    	this.isWin=false;
    	this.isLose=false;
    	this.lives=10;
	}
  setLocalStorage(key,value){
    this.localSt.store(key,value);
  }
  getLocalStorage(key){
    return this.localSt.retrieve(key);
  }
  



  
  
}
