import { AbstractControl } from "@angular/forms";

export function passwordValidation(fg: AbstractControl): { [key: string]: any } | null {
    const passwordValue = fg.get("password")?.value;
    const confirmPasswordValue = fg.get("confirmPassword")?.value;
    if (!passwordValue || !confirmPasswordValue) {
        return null;
    }
    if (passwordValue != confirmPasswordValue) {
        return { 'passwordMisMatch': true }
    }
    return null;

}

