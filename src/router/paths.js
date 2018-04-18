export default [
  {
    title: 'Home',
    icon: 'home',
    path: '/'
  },
  {
    title: 'External',
    icon: 'home',
    path: 'https://www.ersnet.org',
    external: true
  },
  {
    title: 'Profile',
    icon: 'account_box',
    path: '/profile',
    private: true
  },
  {
    title: 'Programme',
    icon: 'date_range',
    group: true,
    path: '/programme',
    items: [
      {
        title: 'Test',
        icon: 'label',
        path: '/test'
      },
      {
        title: 'Test 2',
        icon: 'label_outline',
        path: '/test2'
      }
    ]
  }
]
