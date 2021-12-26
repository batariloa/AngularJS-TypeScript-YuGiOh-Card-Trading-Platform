import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Proizvod } from 'src/app/redux/cart.model';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  public proizvod$:Observable<Proizvod> = new Observable;
  @Input() proizvod:Proizvod = {} as Proizvod

  constructor(private route: ActivatedRoute, private router:Router) {
    
   
  }

  ngOnInit(): void {
    
    
  }


close(){
  this.router.navigate([{ outlets: { aux1: null } }]);
}


}
