import { AbstractControl } from "@angular/forms";

export function ageValidation(control:AbstractControl){
    if(control.value < 17){
        return {'ageValidation':true};
    }
    return null ;
}