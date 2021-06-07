export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-dark'
  },
  {
    path: '/admin/incident-management',
    title: 'Incident Management',
    type: 'sub',
    icontype: 'fas fa-exclamation-circle text-dark',
    collapse: 'incident-management',
    isCollapsed: true,
    children: [
      { path: 'analysis', title: 'Analysis', type: 'link' },
      { path: 'records', title: 'Records', type: 'link' },
      { path: 'perkeso', title: 'Perkeso', type: 'link' },
      { path: 'investigation', title: 'Investigation', type: 'link' },
    ]
  },
  {
    path: '/admin/insurance-management',
    title: 'Insurance Management',
    type: 'sub',
    icontype: 'fas fa-heartbeat text-dark',
    collapse: 'insurance-management',
    isCollapsed: true,
    children: [
      { path: 'analysis', title: 'Analysis', type: 'link' },
      { path: 'registration', title: 'Registration', type: 'link' },
      { path: 'claim', title: 'Claim', type: 'link' },
    ]
  },
  {
    path: '/admin/lost-control',
    title: 'Lost Control',
    type: 'sub',
    icontype: 'fas fa-car-crash text-dark',
    collapse: 'lost-control',
    isCollapsed: true,
    children: [
      { path: 'survey', title: 'Survey', type: 'link' },
      { path: 'investigation', title: 'Investigation', type: 'link' },
      { path: 'analysis', title: 'Analysis', type: 'link' },
    ]
  },
  {
    path: '/admin/business-risk',
    title: 'Business Risk',
    type: 'link',
    icontype: 'fas fa-chart-line text-dark'
  },
  {
    path: '/admin/product-risk',
    title: 'Product Risk',
    type: 'link',
    icontype: 'fas fa-pencil-ruler text-dark'
  },
  {
    path: '/admin/project-risk',
    title: 'Project Risk',
    type: 'link',
    icontype: 'fas fa-wrench text-dark'
  },
  {
    path: '/admin/compliance',
    title: 'Compliance',
    type: 'link',
    icontype: 'fas fa-file-signature text-dark'
  },
  {
    path: '/admin/audit',
    title: 'Audit',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-dark',
    collapse: 'audit',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
      { path: 'audit-user', title: 'Audit User', type: 'link' }
    ]
  },
  {
    path: '/admin/report',
    title: 'Reporting',
    type: 'link',
    icontype: 'fas fa-chart-bar text-dark'
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];