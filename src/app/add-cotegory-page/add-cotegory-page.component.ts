import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cotegory-page',
  templateUrl: './add-cotegory-page.component.html',
  styleUrls: ['./add-cotegory-page.component.scss']
})
export class AddCotegoryPageComponent implements OnInit {
  addCotegoryForm!:FormGroup
  constructor() { }

  ngOnInit(): void {

    this.addCotegoryForm = new FormGroup({
      id: new FormControl('', Validators.required),
      main: new FormControl('', Validators.required),
  })
  const addCotegoryFormData = {...this.addCotegoryForm.value}
  console.log(addCotegoryFormData);
}

}