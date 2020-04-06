import appRoutes from 'routes/appRoutes';

function authenticated() {
    let access = window.cache.storage.get('access');
    console.log('sessionLoggedIn access', access);
    //return false;
    return (access.id !== undefined);
}

export { appRoutes, authenticated};
