export default [
  {
    title: 'Home', icon: 'home', path: '/', group: false
  },
  {
    title: 'Profile', icon: 'account_box', path: '/profile', group: false, private: true
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
