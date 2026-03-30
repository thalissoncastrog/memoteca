import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  form: FormGroup = this.formBuilder.group({
    content: ['', Validators.compose([
      Validators.required,
      Validators.pattern(/(.|\s)*\S(.|\s)*/)
    ])],
    authorship: ['', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])],
    model: ['', [Validators.required]]
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.findById(parseInt(id)).subscribe((thought) => {

      this.form.controls['content'].setValue(thought.content);
      this.form.controls['authorship'].setValue(thought.authorship);
      this.form.controls['model'].setValue(thought.model);
    });
  }

  editThought(): void {
    if(this.form.valid){

      const thought: Thought = {
        id: parseInt(this.route.snapshot.paramMap.get('id')),
        content: this.form.get('content').value,
        authorship: this.form.get('authorship').value,
        model: this.form.get('model').value
      };

      this.service.edit(thought).subscribe(() => {
        this.router.navigate(['/thoughts-list']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/thoughts-list']);
  }

  enableButton(): string {
    if(this.form.valid) return 'button';

    return 'disabled__button';
  }

}
