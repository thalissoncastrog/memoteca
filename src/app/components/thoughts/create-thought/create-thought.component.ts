import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  form: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        content: ['', Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        authorship: ['', [
          Validators.required,
          Validators.minLength(3)
        ]],
        model: ['model1', [Validators.required]]
      }
    );
  }

  createThought(): void {
    console.log(this.form.status);

    if(this.form.invalid)
      return;


    this.service.create(this.form.value).subscribe(() => {
      this.router.navigate(['/thoughts-list']);
    });
  }

  cancel(): void {
    this.router.navigate(['/thoughts-list']);
  }

  enableButton(): string {

    if(this.form.valid) return 'button';

    return 'disabled__button';
  }

}
