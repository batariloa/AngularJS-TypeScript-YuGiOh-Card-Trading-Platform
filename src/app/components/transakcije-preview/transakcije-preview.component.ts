import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-transakcije-preview',
  templateUrl: './transakcije-preview.component.html',
  styleUrls: ['./transakcije-preview.component.css']
})
export class TransakcijePreviewComponent implements OnInit {

  constructor(private firebase:FirebaseService) { }

  
  ngOnInit(): void {
  }

}
