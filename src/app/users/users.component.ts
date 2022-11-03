import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { User } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  id: string= 0 
  product:Product /undefined
  constructor(private activateRoute:ActivatedRoute){
    this.id= Number(activateRoute.snapshot.paramMap.get['id'])
  }
  ngOnInit(): void {
   getDocumentById 
  }

  // users: User[] = []

  // constructor (private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.http.get('https://reqres.in/api/users?page=2').subscribe((data:any) => {
  //     this.users = data.data
  //   });
  // }
}
