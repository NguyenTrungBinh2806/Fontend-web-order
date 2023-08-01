import { toaster } from "evergreen-ui";

export const handleError = (errorCode: string) => {
    // if(errorCode === '401') {
    //     return toaster.warning('Please login to continue');
    // } 
    // if(errorCode === '403') {
    //     return toaster.warning('You do not have permission to access');
    // }
    // if(errorCode === '404') {
    //     return toaster.warning('Not found');
    // }
    // if(errorCode === '500') {
    //     return toaster.warning('Server error');
    // }
    // if(errorCode === '400') {
    //     return toaster.warning('Bad request');
    // }
    // if(errorCode === '409') {
    //     return toaster.warning('Conflict');
    // }
    // if(errorCode === '503') {
    //     return toaster.warning('Service unavailable');
    // }
    if(errorCode === 'ERR_NETWORK'){
        return toaster.warning('Network error');
    }
    if(errorCode === 'ERR_SERVER'){
        return toaster.warning('Server error');
    }
    if(errorCode === 'ERR_CLIENT'){
        return toaster.warning('Client error');
    }
    if(errorCode === 'ERR_UNKNOWN'){
        return toaster.warning('Unknown error');
    }
    if(errorCode === 'ERR_UNAUTHORIZED'){
        return toaster.warning('Unauthorized');
    }
    if(errorCode === 'ERR_BAD_REQUEST'){
        return toaster.warning('Bad request');
    }
    // return toaster.warning('Unknown error');

};