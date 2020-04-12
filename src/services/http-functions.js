import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators'
import store from '../redux/store';
import {actions} from '../redux/slices/loader-slice'
import { showNotificationSuccess, showNotificationError } from '../redux/slices/notification-slice';
export const post = (url,body,headers=null)=>{
    store.dispatch(actions.setLoaderCenter())
    let postObservable = new Observable(observer=>{
        let response = fetch(url,{
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                'Content-Type':'application/json'
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


export const wrapper = req=>{
    return req.pipe(
        tap(event=>{
            store.dispatch(actions.setLoaderOff())
            store.dispatch(showNotificationSuccess(event))
        },
        err=>{
            store.dispatch(actions.setLoaderOff())
            if(err.msgtype){
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