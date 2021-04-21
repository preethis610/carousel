import { Component, OnInit, Input ,ElementRef,ViewChild} from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
 
})
export class CardComponent implements OnInit {
 @Input() cardContent;
 @Input() set isCenterCard(value) {
  this.centerId = value;
 }
 @ViewChild('canvas', { static: true }) 
canvas: ElementRef<HTMLCanvasElement>;
@ViewChild('canvasCenter', { static: true }) 
canvasCenter: ElementRef<HTMLCanvasElement>;
ctx: CanvasRenderingContext2D;
ctxCenter: CanvasRenderingContext2D;
requestId;
interval;
centerId;
isDisabled = false;
isOpen = false;
toggleAnimations() {
  this.isDisabled = !this.isDisabled;
}

toggle() {
  this.isOpen = !this.isOpen;
}
constructor() {}
 

  play() {
   
   

  }
  ngOnInit(): void {
   
if(this.canvas){
  this.ctx = this.canvas.nativeElement.getContext('2d');
}
if(this.canvasCenter){
  this.ctxCenter = this.canvasCenter.nativeElement.getContext('2d');
}




setInterval(() => {
  
if(this.ctx){
  this.ctx.lineWidth = 0.07;
  this.ctx.strokeStyle= '#d3d3d3';
  this.ctx.beginPath();
  this.ctx.moveTo(0, 0);
  this.ctx.lineTo(290, 150);
  this.ctx.stroke();
}
  
if(this.ctxCenter){
  this.ctxCenter.lineWidth = 0.07;
  this.ctxCenter.strokeStyle= '#d3d3d3';
  this.ctxCenter.beginPath();
  this.ctxCenter.moveTo(0, 0);
  this.ctxCenter.lineTo(290, 150);
  this.ctxCenter.stroke();
}


  // this.ctx.beginPath();
  // this.ctx.moveTo(170,15);
  // this.ctx.lineTo(190, 130);
  // this.ctx.stroke();
  
}, 200);
  }
}
