import { TaskListService } from './../../../services/tasklist.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-tasklist-one',
  templateUrl: './new-tasklist-one.component.html',
  styleUrls: ['./new-tasklist-one.component.scss']
})
export class NewTasklistOneComponent {
  form: FormGroup;
  progress: boolean;

  constructor(
    private _fb: FormBuilder,
    private taskListService: TaskListService,
    public dialogRef: MatDialogRef<NewTasklistOneComponent>
    ) { 
    this.buildForm();
  }

  buildForm() {
    this.form = this._fb.group({
      nmTask: [null, Validators.required],
      tpStatus: [1],
	    dsTask: [null]
    });
  }

  save() {
    if(this.form.invalid) return;
    this.progress = true;
    this.taskListService.post(this.form.getRawValue()).subscribe(task => {
        this.dialogRef.close(task);
    });
  }

}
