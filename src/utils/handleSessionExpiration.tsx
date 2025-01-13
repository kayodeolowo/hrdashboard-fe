// utils/authUtils.ts

import toast, { Toaster } from 'react-hot-toast';


export const handleSessionExpiration = (errorMessage: string) => {
    if (
      errorMessage.includes("Unauthorized access")
    ) {
      try {
        // Clear user data and token from local storage
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        toast.error("Unauthorized access. Please login.");
  
        // Redirect to login page
        window.location.href = "/login";
      } catch (e) {
        // Fallback redirect if there's an error in clearing local storage
        window.location.href = "/login";
      }
    }
};
