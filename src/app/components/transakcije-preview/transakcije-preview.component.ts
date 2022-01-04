import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { OrderInfo } from 'src/app/redux/cart.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-transakcije-preview',
  templateUrl: './transakcije-preview.component.html',
  styleUrls: ['./transakcije-preview.component.css']
})
export class TransakcijePreviewComponent implements OnInit {
  @Output() eventClose:EventEmitter<any> = new EventEmitter;
  constructor(private firebase:FirebaseService) { }

  @Input() transakcije:OrderInfo[] = [];
  currentTransakcije: OrderInfo[] = [];
  
  ngOnInit(): void {
  
    
  }


  close(){
    this.eventClose.emit(true);
  }
}
