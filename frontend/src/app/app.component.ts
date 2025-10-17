import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloService } from './pages/services/hello.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  message = '';

  constructor(private helloService: HelloService) {}

  ngOnInit() {
    this.helloService.getHello().subscribe({
      next: (data) => {
        this.message = data.message;
      },
      error: (err) => {
        console.error('Napaka pri pridobivanju sporočila:', err);
      },
    });



    
  }
}
