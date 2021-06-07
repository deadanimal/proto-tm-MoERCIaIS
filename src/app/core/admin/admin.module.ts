import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { CdkStepperModule } from "@angular/cdk/stepper";
import { MatStepperModule } from "@angular/material/stepper"; 

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { IncidentAnalysisComponent } from './incident-analysis/incident-analysis.component';
import { IncidentRecordComponent } from './incident-record/incident-record.component';
import { IncidentPerkesoComponent } from './incident-perkeso/incident-perkeso.component';
import { IncidentInvestigationComponent } from './incident-investigation/incident-investigation.component';
import { InsuranceAnalysisComponent } from './insurance-analysis/insurance-analysis.component';
import { InsuranceRegistrationComponent } from './insurance-registration/insurance-registration.component';
import { InsuranceClaimComponent } from './insurance-claim/insurance-claim.component';
import { LostSurveyComponent } from './lost-survey/lost-survey.component';
import { LostInvestigationComponent } from './lost-investigation/lost-investigation.component';
import { LostAnalysisComponent } from './lost-analysis/lost-analysis.component';
import { BusinessRegistrationComponent } from './business-registration/business-registration.component';
import { ProductRiskComponent } from './product-risk/product-risk.component';
import { ProjectRiskComponent } from './project-risk/project-risk.component';
import { ComplianceComponent } from './compliance/compliance.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    IncidentAnalysisComponent,
    IncidentRecordComponent,
    IncidentPerkesoComponent,
    IncidentInvestigationComponent,
    InsuranceAnalysisComponent,
    InsuranceRegistrationComponent,
    InsuranceClaimComponent,
    LostSurveyComponent,
    LostInvestigationComponent,
    LostAnalysisComponent,
    BusinessRegistrationComponent,
    ProductRiskComponent,
    ProjectRiskComponent,
    ComplianceComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    MatStepperModule,
    CdkStepperModule,
  ]
})
export class AdminModule { }
