import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../providers/CommonServiceProvider';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    selector: 'addpost-cmp',
    templateUrl: 'addpost.component.html'
})

export class AddPostComponent implements OnInit {
    today: number = Date.now();
    addPost = { title: "", author: "", description: "", updatedby: "", updatedTimeStamp: this.today };
    registerForm: FormGroup;
    submitted = false;


    constructor(public apiService: CommonService, public router: Router, private formBuilder: FormBuilder) {

    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(4)]],
            author: ['', [Validators.required, Validators.minLength(3)]],
            updatedby: ['', [Validators.required, Validators.minLength(3)]],
            description: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }


    //Form validation
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        } else {
            this.addData();
        }

    }

    addData() {
        let response;
        this.apiService.addPost(this.addPost)
            .then(data => {
                response = data;
                console.log(data);

                if (response.ok == true) {
                    let note = 'Data added successfully';
                    this.showAlert(note);
                }
                else {
                    let note = 'Could not add data.';
                    this.showAlert(note);
                }
            });
    }


   
    showAlert(msg) {
        alert(msg);
       // navigating between pages
        this.router.navigate(['/viewpost']);

    }
}
