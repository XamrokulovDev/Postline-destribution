export interface PhoneState {
    phone: string;
    loading: boolean;
    error: string | null;
    success: boolean;
}
  
export interface PhoneRequest {
    phone: string;
}
  
export interface PhoneResponse {
    message: string;
}  