import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-category-page',
  templateUrl: './edit-category-page.component.html',
  styleUrls: ['./edit-category-page.component.scss']
})
export class EditCategoryPageComponent implements OnInit {
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
