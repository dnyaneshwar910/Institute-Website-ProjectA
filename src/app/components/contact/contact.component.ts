import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,  // FormBuilder service injected
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // Initialize contactForm after FormBuilder is injected
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // If the form is invalid, don't submit
    if (this.contactForm.invalid) {
      return;
    }

    // Prepare the data to send
    const userInfo = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    // Make the API call to send data
    this.http.post('https://getform.io/f/alllwdka', userInfo).subscribe({
      next: () => {
        this.toastr.success('Your message has been sent');
        this.contactForm.reset();  // Reset the form on successful submission
      },
      error: (err) => {
        console.error(err);
        this.toastr.error('Something went wrong');
      }
    });
  }
}
