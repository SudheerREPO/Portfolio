export type * from './auth';
export type * from './navigation';
export type * from './ui';

/**
 * Standard Inertia page props type.
 * Every Inertia page receives at minimum `auth` from the HandleInertiaRequests middleware.
 * Use PageProps<{ myProp: MyType }> to add page-specific props.
 */
export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: import('./auth').Auth;
};
