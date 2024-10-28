import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    { position: 'eqUIP Intern', company: 'Commonwealth Games Federation', date: 'Apr 2024 - Present', description: 'Guiding a team in building CGA-Bangladesh website.' },
    { position: 'Software Developer', company: 'Barytech Technologies', date: 'June 2023 - Present', description: 'Developed applications using Angular and Django.' }
  ];
}
