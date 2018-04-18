export default [
  {
    title: 'Home',
    icon: ['s7-home icon'],
    path: '/'
  },
  {
    title: 'MyERS',
    subtitle: 'create or manage your account',
    icon: ['icon-my-ers icon'],
    path: 'https://my.ersnet.org',
    external: true
  },
  {
    title: 'Profile',
    icon: ['icon-business-card icon'],
    path: '/profile',
    private: true
  },
  {
    title: 'Publications',
    icon: ['icon-publications icon'],
    path: 'https://www.ersnet.org/publications',
    external: true
  },
  {
    title: 'ERS Vision',
    icon: ['icon-vision icon'],
    path: 'https://www.ersvision.org',
    external: true
  },
  {
    title: 'E-learning',
    icon: ['icon-e-learn icon'],
    path: 'http://www.ers-education.org/home.aspx',
    external: true
  },
  {
    title: 'Supported Websites',
    group: true,
    icon: ['web'],
    items: [
      {
        title: 'European Lung Fundation',
        icon: ['icon-elf icon'],
        path: 'http://www.europeanlung.org/en/',
        external: true
      },
      {
        title: 'Healthy Lung for life',
        icon: ['icon-hlfl icon'],
        path: 'http://www.europeanlung.org/en/projects-and-research/projects/healthy-lungs-for-life/home/',
        external: true
      },
      {
        title: 'TB Consilium',
        icon: ['icon-ers icon pull-left', 'icon-who icon pull-right'],
        path: 'http://www.europeanlung.org/en/projects-and-research/projects/healthy-lungs-for-life/home/',
        external: true
      },
      {
        title: 'FIRS',
        subtitle: 'United For lung Health',
        icon: [],
        path: 'http://www.europeanlung.org/en/projects-and-research/projects/healthy-lungs-for-life/home/',
        external: true
      }
    ]
  },
  {
    title: 'Contact ERS',
    icon: ['s7-mail icon'],
    path: 'http://www.ers-education.org/home.aspx',
    external: true
  }
]
