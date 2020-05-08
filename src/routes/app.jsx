import appRoutes from 'routes/appRoutes';

function authenticated() {
    let access = window.cache.storage.get('access');
    return (access.id !== undefined);
}

export { appRoutes, authenticated};
