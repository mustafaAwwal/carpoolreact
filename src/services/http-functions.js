import {Observable} from 'rxjs';
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
            res=>
            observer.next(res)
        ).catch(error=> observer.error(error))
    })
    return postObservable;
}

export const base_url = 'http://localhost:4000/'