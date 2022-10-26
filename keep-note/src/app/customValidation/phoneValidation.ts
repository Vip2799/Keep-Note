import { AbstractControl } from "@angular/forms";

export function phoneValidation(obj:AbstractControl):{[key:string]:any} | null{
    if (!(/^[789]\d{9}$/).test(obj.value)){
        return {'invalidPhone':true};
    }
    return null;
} 