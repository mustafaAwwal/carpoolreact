import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators'
import store from '../redux/store';
import { showNotificationSuccess, showNotificationError } from '../redux/slices/notification-slice';
export const post = (url,body,headers=null)=>{
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
    return postObservable.pipe(
        tap(event=>{
            store.dispatch(showNotificationSuccess(event))
        },
        err=>{
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