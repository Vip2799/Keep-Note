import { AbstractControl } from "@angular/forms";

export function emailValidator(control:AbstractControl){
    // alert("hello")
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g ;
    if (!reg.test(control.value)){
        return {'invalidEmail':true} ;
    }
    // const email = control.value.match(reg);
    // if(!email == null){
    //     return {'invalidEmail':true}
    // }
    return null ;
}