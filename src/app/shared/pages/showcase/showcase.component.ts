import { Component, Input, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import { TokenUserModel } from 'src/app/core/auth/models/tokenUserModel';
import { AuthService } from 'src/app/core/auth/services/auth/auth.service';

@Component({
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  @Input() customSeverity!:string;
  @Input() customSummary!:string;
  @Input() customDetail!:string;

  

  constructor(private messageService: MessageService) {  }

  ngOnInit(): void {}

  showConfirm() {
      this.messageService.clear()
      this.messageService.add({ key: 'c', sticky: true, severity: 'warn', detail: 'Your changes could not be saved. Are you sure?' });
      
  }
  onConfirm() {
      this.messageService.clear('c')
  }
  onReject() {
      this.messageService.clear('c')
  }

  

 


}
