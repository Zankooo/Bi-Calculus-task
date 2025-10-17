// src/app/services/hello.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type HelloResponse = { message: string };

@Injectable({ providedIn: 'root' })
export class HelloService {
  constructor(private http: HttpClient) {}
  getHello() {
    return this.http.get<HelloResponse>('http://localhost:3000/hello');
  }
}
