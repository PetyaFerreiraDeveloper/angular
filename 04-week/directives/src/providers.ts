import { InjectionToken } from "@angular/core";

export const MyValueInjectionToken = new InjectionToken('MyValueInjectionToken');
export function createMyValueProvider(value: string) {
    return {
        provide: MyValueInjectionToken,
        useValue: value
    }
}