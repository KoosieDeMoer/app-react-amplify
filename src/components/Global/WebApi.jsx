import { Component } from 'react';
import Axios from 'axios'

const basePath = 'https://api-sandbox.slvrcld.com/v1';

class WebApi extends Component {

    constructor( props ) {
        super( props );
        this.state = {
        };
        this.client = Axios.create({
            baseURL: basePath
        })

     }


    /*
    |--------------------------------------------------------------------------
    | HTTP Client Request Query Parameter Constructor
    |--------------------------------------------------------------------------
    |
    | Builds the HTTP request query string parameters if any exist. The argument
    | passed to the function must be of standard object type.
    |
    */
    buildQueryParams(queryObject) {
        var q = []
        if (queryObject) {
            for (var p in queryObject)
                if (queryObject.hasOwnProperty(p)) {
                    q.push(encodeURIComponent(p) + "=" + encodeURIComponent(queryObject[p]))
                }
        }
        return '?' + q.join("&")
    }

    buildHeaders(testingToken) {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        }

        if (window.cache.auth.access && window.cache.auth.access.token) {
            headers.Authorization = `Bearer ${window.cache.auth.access.token}`
        }

        return headers
    }

    /*
    |--------------------------------------------------------------------------
    | HTTP Client Request Constructor
    |--------------------------------------------------------------------------
    |
    | Builds the HTTP request with common appendages to reduce repetition.
    |
    */
    request(method, url, q, data, uploadProgressHandler) {
        url += this.buildQueryParams(q)

        return this.client({
            method,
            url,
            data,
            headers: this.buildHeaders(),
            uploadProgressHandler: uploadProgressHandler
        })
    }
    
    

    /*
    |--------------------------------------------------------------------------
    | Account API's
    |--------------------------------------------------------------------------
    |
    | Management of the authenticated user's own account.
    |
    */
    accounts(accountId, q) {
        let that = this;
        return {
            avatars() {
                return {
                    create(file, progressHandler) {
                        return new Promise((resolve, reject) => {
                            that.signedUploads().upload(file, progressHandler).then((response) => {
                                that.request('post', `/accounts/${accountId}/avatars`, q, response.data.data).then((response) => {
                                    return resolve(response)
                                }).catch((error) => {
                                    return reject(error)
                                })
                            })
                        })
                    }
                }
            },
            create(data) {
                return that.request('post', `/accounts`, q, data)
            },
            find() {
                return that.request('get', '/accounts', {
                    ...q,
                    ...{
                        include_branding: 1
                    }
                })
            },
            notifications(notificationId, q) {
                return {
                    get(q) {
                        return that.request('get', `/accounts/${accountId}/notifications`, q)
                    },
                    destroy(q) {
                        return that.request('delete', `/accounts/${accountId}/notifications/${notificationId}`, q)
                    },
                    update(data, q) {
                        return that.request('put', `/accounts/${accountId}/notifications/${notificationId}`, q, data)
                    }
                }
            },
            update(data) {
                return that.request('post', `/accounts/${accountId}`, q, data)
            },
            subscriptions(q) {
                return {
                    update(data) {
                        return that.request('post', `/accounts/${accountId}/subscriptions`, q, data)
                    },
                    get(q) {
                        return that.request('get', `/accounts/${accountId}/subscriptions`, q)
                    }
                }
            },
        }
    }
    
    
    /*
    |--------------------------------------------------------------------------
    | Token API's
    |--------------------------------------------------------------------------
    |
    | Management of the authenticated user's own oauth tokens.
    |
    */
    tokens(tokenId, q) {
        let that = this;
        return {
            create(data) {
                return that.request('post', '/tokens', q, data)
            },
            destroy() {
                return that.request('delete', `/tokens/${tokenId}`, q)
            },
            get(q) {
                return that.request('get', '/tokens', q)
            },
            update(data) {
                return that.request('patch', `/tokens/${tokenId}`, q)
            },
        }
    }

	
}
export default WebApi;
