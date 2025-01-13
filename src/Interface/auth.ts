export interface LoginFormInputs {
    email: string;
    password: string;
  }


export interface LoginResponse {
    success: boolean;
    message: string;
    data: {
      user: {     
        _id: string;
        email: string;
        phoneNumber: string;
        fullName: string;
      };
      accessToken: string;
    };
  }