export const getBlogHubPage = (skill = '') => {
  if (!skill) return '/';

  return `/blogs/${skill}`
}

export const MenuLinks = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'JavaScript',
    url: getBlogHubPage('js'),
  },
  {
    label: 'HTML5',
    url: getBlogHubPage('html'),
  },
  {
    label: 'React',
    url: getBlogHubPage('react'),
  },
  {
    label: 'Programming',
    url: getBlogHubPage('programming'),
  },
  {
    label: 'Problems',
    url: getBlogHubPage('problems'),
  },
  // {
  //   label: 'Data Structures',
  //   url: getBlogHubPage('data-structures'),
  // },
  // {
  //   label: 'Algorithms',
  //   url: getBlogHubPage('algorithms'),
  // },
  // {
  //   label: 'Security',
  //   url: getBlogHubPage('security'),
  // },
  // {
  //   label: 'Performance',
  //   url: getBlogHubPage('performance'),
  // },
  {
    label: 'About',
    url: '/about'
  }
]