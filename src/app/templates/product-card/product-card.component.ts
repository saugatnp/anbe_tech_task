import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  @Input() id: number = 0;
  @Input() thumbnail: string = "";
  @Input() title: string = "";
  @Input() price: number = 0;
  @Input() brand: string = "";
  @Input() rating :number = 0;
  @Input() stock :number = 0;



  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToDetails(id : number){
    this.router.navigate(['/details', id]);
    console.log(this.id);
  }

}
