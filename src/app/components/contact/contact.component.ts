import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Define contact object to bind form fields
  contact = {
    name: '',
    email: '',
    message: ''
  };

  // Method to handle form submission
  onSubmit(formData: any) {
    console.log('Form Data:', formData);
    // Additional form submission logic here
  }

}
