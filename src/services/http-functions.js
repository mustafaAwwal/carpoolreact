import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators'
import store from '../redux/store';
import {actions} from '../redux/slices/loader-slice'
import { showNotificationSuccess, showNotificationError } from '../redux/slices/notification-slice';
import {getToken} from './authentication';
import { resetUser } from '../redux/slices/user-slice';
export const post = (url,body,headers=null)=>{
    store.dispatch(actions.setLoaderCenter())
    let postObservable = new Observable(observer=>{
        let token = getToken()
        let response = fetch(url,{
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                'Content-Type':'application/json',
                'Authorization':token
            }
        })
        response.then(
            res=>res.json()
        ).then(res=>{
            if(res.msgtype === 'success'){
                observer.next(res);
            }
            else {
                observer.error(res)
            }
        }).catch(error=> observer.error(error))
    })
    return wrapper(postObservable)
}

export const get = (url)=>{
    store.dispatch(actions.setLoaderCenter())
    let getObservable = new Observable(observer=>{
        let token = getToken()
        let response = fetch(url,{
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':token
            }
        })
        response.then(
            res=>res.json()
        ).then(res=>{
            if(res.msgtype === 'success'){
                observer.next(res);
            }
            else {
                observer.error(res)
            }
        }).catch(error=> observer.error(error))
    })
    return wrapper(getObservable)
}

export const wrapper = req=>{
    return req.pipe(
        tap(event=>{
            store.dispatch(actions.setLoaderOff())
            store.dispatch(showNotificationSuccess(event))
        },
        err=>{
            store.dispatch(actions.setLoaderOff())
            console.log(err)
            if(err.status === 405){
                localStorage.removeItem('token');
                store.dispatch(resetUser());
            }
            
            else if(err.msgtype==='error'){
                store.dispatch(showNotificationError(err))
            }
            else {
                store.dispatch(showNotificationError({msg:'Something went wrong'}))
            }
        }
        )
    )
}

export const base_url = 'http://localhost:4000/'