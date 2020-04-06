import SecureLS from 'secure-ls'


const storage = new SecureLS({
    encodingType: 'aes'
})

const store =  {
        WebApi: null,
        WebApiExceptionHandler: null,
        Websocket: null,
        WebsocketListener: null,
        TokenLifeManager: null,
        Tour: null,
        branding: {
            default: {},
            company: {},
        },
        storage: storage,
        auth: {
            validated: false,
            access: storage.get('access'),
            account: storage.get('account'),
            notifications: null,
            notificationsMeta: {},
        },
        config: {
            LoaderEnabled: false,
            ConfettiEnabled: false,
            AchievementsEnabled: false,
            TranslatorEnabled: true,
            WebSocketsEnabled: false,
            NotificationsEnabled: false,
        },
        transitions: {
            duration: {
                enter: 300,
                leave: 300,
            },
            enterClass: 'animated fadeIn',
            leaveClass: 'animated fadeOut',
        },
        page: {
            title: false,
            icon: false,
            loading: false,
            fullpage: false,
        },
        references: {
            Loader: null,
        }
    }

export default store;