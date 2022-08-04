import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeDetailsComponent } from './employee/add-employee-details/add-employee-details.component';
import { UpdateEmployeeDetailsComponent } from './employee/update-employee-details/update-employee-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeTypeComponent } from './employee/employee-type/employee-type.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { AddAssessmentsComponent } from './assessments/add-assessments/add-assessments.component';
import { AllergyComponent } from './allergy/allergy.component';
import { AddAllergyComponent } from './allergy/add-allergy/add-allergy.component';
import { LoginComponent } from './login/login.component';
//Materials
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { LogoutComponent } from './login/logout/logout.component';
import { ClassTypeComponent } from './class-type/class-type.component';
import { ParentComponent } from './parent/parent.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddParentDetailsComponent } from './parent/add-parent-details/add-parent-details.component';
import { AddStudentDetailsComponent } from './student/add-student-details/add-student-details.component';
import { StudentComponent } from './student/student/student.component';
import { AddClassTypeComponent } from './class-type/add-class-type/add-class-type.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { UpdateParentComponent } from './parent/update-parent/update-parent.component';
import { UpdateClassTypeComponent } from './class-type/update-class-type/update-class-type.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeDetailsComponent,
    EmployeeComponent,
    EmployeeTypeComponent,
    AssessmentsComponent,
    AddAssessmentsComponent,
    AllergyComponent,
    AddAllergyComponent,
    LoginComponent,
    UpdateEmployeeDetailsComponent,
    LogoutComponent,
    ClassTypeComponent,
    ParentComponent,
    AddParentDetailsComponent,
    AddStudentDetailsComponent,
    StudentComponent,
    AddClassTypeComponent,
    UpdateStudentComponent,
    UpdateParentComponent,
    UpdateClassTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
