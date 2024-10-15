import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('user'),
  },
  {
    title: 'Circles',
    path: '/circles',
    icon: icon('shield'),
  },
  {
    title: 'States',
    path: '/state',
    icon: icon('shield'),
  },
  {
    title: 'Agency',
    path: '/agency',
    icon: icon('shield'),
  },
  {
    title: 'First Responders',
    path: '/first-responders',
    icon: icon('responder'),
  },
  {
    title: 'Administrators',
    path: '/Administrators',
    icon: icon('admin'),
  },
  {
    title: 'broadcast',
    path: '/broadcast',
    icon: icon('broadcast'),
  },
  {
    title: 'Settings',
    path: '/Settings',
    icon: icon('settings'),
  },

  // {
  //   title: 'product',
  //   path: '/products',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
