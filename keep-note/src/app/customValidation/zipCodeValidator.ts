import { AbstractControl } from "@angular/forms";

export function zipCodeValidators(control:AbstractControl):{[key:string]:any} | null {
    if (control.value < 9999){
        return {'invalidZip':true};
    }
    return null ;
}