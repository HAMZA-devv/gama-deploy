export const MENU_ITEMS = [{
  key: 'main',
  label: 'Menu principal',
  isTitle: true
}, {
  key: 'dashboards',
  icon: 'iconoir:home-simple',
  label: 'Direction',
  children: [{
    key: 'dashboard-analytics',
    label: 'Analytics',
    url: '/dashboard/analytics',
    parentKey: 'dashboards'
  }]
},{
  key: 'Equiped',
  icon: 'iconoir:suitcase',
  label: 'Equipe',
  children: [{
  key: 'Equipe',
  label: 'Pole 1',
  url: '',
  parentKey: 'Equipe'
  },{
  key: 'Equipe',
  label: 'Pole 2',
  url: '',
  parentKey: 'Equipe'
  },

  {
  key: 'Equipe',
  label: 'Pole 3',
  url: '',
  parentKey: 'Equipe'
  },
  {key: 'Equipe',
  label: 'Pole 4',
  url: '',
  parentKey: 'Equipe'

  }

]




}
, {
  key: 'apps',
  icon: 'iconoir:view-grid',
  label: 'flux du travail',
  children: [{
    key: 'apps-projects',
    label: 'Projets',
    parentKey: 'apps',
    children: [{
      key: 'apps-projects-clients',
      label: 'Clients',
      url: 'apps/projects/team',
      parentKey: 'apps-projects'
    }, {
      key: 'apps-projects-team',
      label: 'Team',
      url: '/apps/projects/team',
      parentKey: 'apps-projects'
    }, {
      key: 'apps-projects-project',
      label: 'Tache',
      url: '/apps/projects/project',
      parentKey: 'apps-projects'
    }, {
      key: 'apps-projects-task',
      label: 'Task',
      url: '/apps/projects/task',
      parentKey: 'apps-projects'
    }, {
      key: 'apps-projects-kanban',
      label: 'Affectation',
      url: '/apps/projects/kanban',
      parentKey: 'apps-projects'
    }, {
      key: 'apps-projects-users',
      label: 'Liste des clients',
      url: '/apps/projects/users',
      parentKey: 'apps-projects'
    }, {
      key: 'apps-projects-create',
      label: 'Creation des taches',
      url: '/apps/projects/create',
      parentKey: 'apps-projects'
    }]
  }, 
   {
    key: 'apps-chat',
    label: 'Contact Client',
    parentKey: 'apps',
    url: '/apps/chat'
  }, {
    key: 'apps-contact-list',
    label: 'Liste des clients',
    parentKey: 'apps',
    url: '/apps/contacts'
  }, {
    key: 'apps-calendar',
    label: 'Planing',
    parentKey: 'apps',
    url: '/apps/calendar'
  },
   ]
}, /*{
{
  key: 'components',
  label: 'COMPONENTS',
  isTitle: true
}, {
  key: 'base-ui',
  icon: 'iconoir:compact-disc',
  label: 'UI Elements',
  children: [{
    key: 'base-ui-alerts',
    label: 'Alerts',
    url: '/ui/alerts',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-avatars',
    label: 'Avatars',
    url: '/ui/avatars',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-buttons',
    label: 'Buttons',
    url: '/ui/buttons',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-badges',
    label: 'Badges',
    url: '/ui/badges',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-cards',
    label: 'Cards',
    url: '/ui/cards',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-carousel',
    label: 'Carousels',
    url: '/ui/carousels',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-dropdowns',
    label: 'Dropdowns',
    url: '/ui/dropdowns',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-grids',
    label: 'Grids',
    url: '/ui/grids',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-images',
    label: 'Images',
    url: '/ui/images',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-list',
    label: 'List',
    url: '/ui/list',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-modals',
    label: 'Modals',
    url: '/ui/modals',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-navs',
    label: 'Navs',
    url: '/ui/navs',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-navbar',
    label: 'Navbar',
    url: '/ui/navbar',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-pagination',
    label: 'Paginations',
    url: '/ui/paginations',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-popover-tooltip',
    label: 'Popovers & Tooltips',
    url: '/ui/popovers-tooltips',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-progress',
    label: 'Progress',
    url: '/ui/progress',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-spinners',
    label: 'Spinners',
    url: '/ui/spinners',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-tabs-accordion',
    label: 'Tabs & Accordions',
    url: '/ui/tabs-accordion',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-typography',
    label: 'Typography',
    url: '/ui/typography',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-videos',
    label: 'Videos',
    url: '/ui/videos',
    parentKey: 'base-ui'
  }]
}, {
  key: 'advanced-ui',
  icon: 'iconoir:peace-hand',
  badge: {
    text: 'new',
    variant: 'info'
  },
  label: 'Advanced UI',
  children: [{
    key: 'advanced-ui-animation',
    label: 'Animation',
    url: '/advanced/animation',
    parentKey: 'advanced-ui'
  }, {
    key: 'advanced-ui-clipboard',
    label: 'Clip Board',
    url: '/advanced/clipboard',
    parentKey: 'advanced-ui'
  }, {
    key: 'advanced-ui-dragula',
    label: 'Dragula',
    url: '/advanced/dragula',
    parentKey: 'advanced-ui'
  }, {
    key: 'advanced-ui-file-manager',
    label: 'File Manager',
    url: '/advanced/file-manager',
    parentKey: 'advanced-ui'
  }, {
    key: 'advanced-ui-highlight',
    label: 'Highlight',
    url: '/advanced/highlight',
    parentKey: 'advanced-ui'
  }, {
    key: 'advanced-ui-range-slider',
    label: 'Range Slider',
    url: '/advanced/range-slider',
    parentKey: 'advanced-ui'
  }, {
    key: 'advanced-ui-ratings',
    label: 'Ratings',
    url: '/advanced/ratings',
    parentKey: 'advanced-ui'
  }, {
    key: 'advanced-ui-ribbons',
    label: 'Ribbons',
    url: '/advanced/ribbons',
    parentKey: 'advanced-ui'
  }, {
    key: 'advanced-ui-sweet-alert',
    label: 'Sweet Alerts',
    url: '/advanced/alerts',
    parentKey: 'advanced-ui'
  }, {
    key: 'advanced-ui-toast',
    label: 'Toasts',
    url: '/advanced/toasts',
    parentKey: 'advanced-ui'
  }]
}, {
  key: 'forms',
  icon: 'iconoir:journal-page',
  label: 'Forms',
  children: [{
    key: 'forms-basic-elements',
    label: 'Basic Elements',
    url: '/forms/basic',
    parentKey: 'forms'
  }, {
    key: 'forms-advance',
    label: 'Advance Elements',
    url: '/forms/advance',
    parentKey: 'forms'
  }, {
    key: 'forms-validation',
    label: 'Validation',
    url: '/forms/validation',
    parentKey: 'forms'
  }, {
    key: 'forms-wizard',
    label: 'Wizard',
    url: '/forms/wizard',
    parentKey: 'forms'
  }, {
    key: 'forms-editors',
    label: 'Editors',
    url: '/forms/editors',
    parentKey: 'forms'
  }, {
    key: 'forms-file-uploads',
    label: 'File Upload',
    url: '/forms/file-uploads',
    parentKey: 'forms'
  }, {
    key: 'forms-image-crop',
    label: 'Image Crop',
    url: '/forms/image-crop',
    parentKey: 'forms'
  }]
}, {
  key: 'charts',
  label: 'Charts',
  icon: 'iconoir:candlestick-chart',
  children: [{
    key: 'charts-apex',
    label: 'Apex',
    url: '/charts/apex',
    parentKey: 'charts'
  }, {
    key: 'charts-justgage',
    label: 'JustGage',
    url: '/charts/justgage',
    parentKey: 'charts'
  }, {
    key: 'charts-chartjs',
    label: 'ChartjS',
    url: '/charts/chartjs',
    parentKey: 'charts'
  }, {
    key: 'charts-toast',
    label: 'Toast',
    url: '/charts/toast',
    parentKey: 'charts'
  }]
}, {
  key: 'tables',
  icon: 'iconoir:table-rows',
  label: 'Tables',
  children: [{
    key: 'tables-basic',
    label: 'Basic Tables',
    url: '/tables/basic',
    parentKey: 'tables'
  }, {
    key: 'tables-data-tables',
    label: 'Datatables',
    url: '/tables/data-tables',
    parentKey: 'tables'
  }]
}, {
  key: 'icons',
  icon: 'iconoir:trophy',
  label: 'Icons',
  children: [{
    key: 'icons-font-awesome',
    label: 'Font Awesome',
    url: '/icons/fa',
    parentKey: 'icons'
  }, {
    key: 'icons-line-awesome',
    label: 'Line Awesome',
    url: '/icons/la',
    parentKey: 'icons'
  }, {
    key: 'icons-icofont',
    label: 'Icofont',
    url: '/icons/icofont',
    parentKey: 'icons'
  }, {
    key: 'icons-iconoir',
    label: 'Iconoir',
    url: '/icons/iconoir',
    parentKey: 'icons'
  }]
}, {
  key: 'maps',
  icon: 'iconoir:navigator-alt',
  label: 'Maps',
  children: [{
    key: 'maps-google',
    label: 'Google Maps',
    url: '/maps/google',
    parentKey: 'maps'
  }, {
    key: 'maps-leaflet',
    label: 'Leaflet Maps',
    url: '/maps/leaflet',
    parentKey: 'maps'
  }, {
    key: 'maps-vector',
    label: 'Vector Maps',
    url: '/maps/vector',
    parentKey: 'maps'
  }]
}, {
  key: 'email-templates',
  label: 'Email Templates',
  icon: 'iconoir:send-mail',
  children: [{
    key: 'email-templates-basic',
    label: 'Basic Action Email',
    url: '/email-templates/basic',
    parentKey: 'email-templates'
  }, {
    key: 'email-templates-alert',
    label: 'Alert Email',
    url: '/email-templates/alert',
    parentKey: 'email-templates'
  }, {
    key: 'email-templates-billing',
    label: 'Billing Email',
    url: '/email-templates/billing',
    parentKey: 'email-templates'
  }]
}, {
  key: 'crafted',
  label: 'CRAFTED',
  isTitle: true
}, {
  key: 'pages',
  label: 'Pages',
  isTitle: false,
  icon: 'iconoir:page-star',
  children: [{
    key: 'page-profile',
    label: 'Profile',
    url: '/pages/profile',
    parentKey: 'pages'
  }, {
    key: 'page-notifications',
    label: 'Notifications',
    url: '/pages/notifications',
    parentKey: 'pages'
  }, {
    key: 'page-timeline',
    label: 'Timeline',
    url: '/pages/timeline',
    parentKey: 'pages'
  }, {
    key: 'page-tree-view',
    label: 'Treeview',
    url: '/pages/treeview',
    parentKey: 'pages'
  }, {
    key: 'page-starter',
    label: 'Starter Page',
    url: '/pages/starter',
    parentKey: 'pages'
  }, {
    key: 'page-pricing',
    label: 'Pricing',
    url: '/pages/pricing',
    parentKey: 'pages'
  }, {
    key: 'page-blogs',
    label: 'Blogs',
    url: '/pages/blogs',
    parentKey: 'pages'
  }, {
    key: 'page-faqs',
    label: 'FAQs',
    url: '/pages/faqs',
    parentKey: 'pages'
  }, {
    key: 'page-gallery',
    label: 'Gallery',
    url: '/pages/gallery',
    parentKey: 'pages'
  }]
}, {
  key: 'page-authentication',
  label: 'Authentication',
  isTitle: false,
  icon: 'iconoir:fingerprint-lock-circle',
  children: [{
    key: 'log-in',
    label: 'Log In',
    url: '/auth/login',
    parentKey: 'page-authentication'
  }, {
    key: 'register',
    label: 'Register',
    url: '/auth/register',
    parentKey: 'page-authentication'
  }, {
    key: 'reset-pass',
    label: 'Re-Password',
    url: '/auth/reset-pass',
    parentKey: 'page-authentication'
  }, {
    key: 'lock-screen',
    label: 'Lock Screen',
    url: '/auth/lock-screen',
    parentKey: 'page-authentication'
  }, {
    key: 'maintenance',
    label: 'Maintenance',
    url: '/maintenance',
    target: '_blank',
    parentKey: 'page-authentication'
  }, {
    key: 'error-404',
    label: 'Error 404',
    url: '/not-found',
    parentKey: 'page-authentication'
  }, {
    key: 'error-500',
    label: 'Error 500',
    url: '/error-500',
    parentKey: 'page-authentication'
  }]
}];/*}*/];