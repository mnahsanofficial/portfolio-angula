import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { name: 'Nilkhet Jai', description: 'Platform for buying and selling books.', image: 'path/to/nilkhetjai.png' },
    { name: 'JUCSE Book House', description: 'Library management app.', image: 'path/to/bookhouse.png' }
  ];
  responsiveOptions = [{ breakpoint: '1024px', numVisible: 2 }];
}
