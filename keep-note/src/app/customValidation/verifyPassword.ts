import { AbstractControl } from "@angular/forms";

export function verifyPassword(control: AbstractControl): { [key: string]: any } | null {
    if (!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/).test(control.value)) {
        return { 'invalidPassword': true };
    }
    return null;
}