type RouteType = {
  label: string;
  path: string;
  children?: RouteType[];
}

export const routes: Array<RouteType> = [
	{
		label: 'Dashboard',
		path: '/dashboard',
	},
	{
		label: 'Jobs',
		path: '/jobs',
	}
];