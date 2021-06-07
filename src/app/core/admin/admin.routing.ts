import { Routes } from '@angular/router';
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

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'incident-management',
                children: [
                    {
                        path: 'analysis',
                        component: IncidentAnalysisComponent
                    },
                    {
                        path: 'records',
                        component: IncidentRecordComponent
                    },
                    {
                        path: 'perkeso',
                        component: IncidentPerkesoComponent
                    },
                    {
                        path: 'investigation',
                        component: IncidentInvestigationComponent
                    },
                ]
            },
            {
                path: 'insurance-management',
                children: [
                    {
                        path: 'analysis',
                        component: InsuranceAnalysisComponent
                    },
                    {
                        path: 'registration',
                        component: InsuranceRegistrationComponent
                    },
                    {
                        path: 'claim',
                        component: InsuranceClaimComponent
                    },
                ]
            },
            {
                path: 'lost-control',
                children: [
                    {
                        path: 'survey',
                        component: LostSurveyComponent
                    },
                    {
                        path: 'investigation',
                        component: LostInvestigationComponent
                    },
                    {
                        path: 'analysis',
                        component: LostAnalysisComponent
                    },
                ]
            },
            {
                path: 'business-risk',
                component: BusinessRegistrationComponent
            },
            {
                path: 'product-risk',
                component: ProductRiskComponent
            },
            {
                path: 'project-risk',
                component: ProjectRiskComponent
            },
            {
                path: 'compliance',
                component: ComplianceComponent
            },
            {
                path: 'audit',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'audit-user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            },
        ]
    }
]