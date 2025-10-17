// src/app/pages/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloService } from '../services/hello.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  helloMsg = '…';

  constructor(private hello: HelloService) {}

  ngOnInit(): void {
    this.hello.getHello().subscribe({
      next: (r) => (this.helloMsg = r.message),
      error: (e) => (this.helloMsg = 'Napaka: ' + (e?.message ?? 'neznana')),
    });
  }
}
