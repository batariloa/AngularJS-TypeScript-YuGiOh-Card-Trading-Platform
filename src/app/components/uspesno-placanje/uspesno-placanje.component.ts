import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uspesno-placanje',
  templateUrl: './uspesno-placanje.component.html',
  styleUrls: ['./uspesno-placanje.component.scss']
})


export class UspesnoPlacanjeComponent implements OnInit {

  id:number =0;

  constructor(private route:ActivatedRoute) {

    route.queryParams.subscribe(val=>{
      this.id = val['id']
    })
   }

  ngOnInit(): void {
  }

}
