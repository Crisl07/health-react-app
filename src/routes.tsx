import { RouteProps } from './types/components/TypeRouteProps';
import Sicknesses from './components/Sicknesses/Sicknesses';
import MedicHistory from './components/MedicHistory/MedicHistory';
import LogOut from './components/LogOut/LogOut';
import Profile from './components/Profile/Profile';
import WellnessPlan from './components/WellnessPlan/WellnessPlan';
import AllSicknesss from './components/AllSicknesses/AllSicknesses';
import NewSickness from './components/NewSickness/NewSickness';
import FavoriteWellnessActivities from './components/FavoriteWellnessActivities/FavoriteWellnessActivities';
import SignUp from './components/SignUp/SignUp';
import { ForgetPassword } from './components/ForgetPassword/ForgetPassword';
import { ResetPassword } from './components/ResetPassword/ResetPassword';

export const routes: RouteProps[] = [
  {
    path: '/sicknesses',
    component: Sicknesses,
  },
  {
    path: '/allSicknesses',
    component: AllSicknesss,
  },
  {
    path: '/createSickness',
    component: NewSickness,
  },
  {
    path: '/medicHistory',
    component: MedicHistory,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/wellnessPlan/:id',
    component: WellnessPlan,
  },
  {
    path: '/favoriteWellnessActivities',
    component: FavoriteWellnessActivities,
  },
  {
    path: '/signup',
    component: SignUp,
  },
  {
    path: '/logout',
    component: LogOut,
  },
  {
    path: '/forgetPassword',
    component: ForgetPassword,
  },
  {
    path: '/auth/reset_password',
    component: ResetPassword,
  },
];
