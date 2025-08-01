import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";

import { auth } from "../utils/firebase";

// import { app } from "../utils/firebase";

// const auth = getAuth(app);

export const registerUser = async (email, password, profile) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateUserProfile(profile);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (profile) => {
  try {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, profile);
    }
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    signOut(auth);
  } catch (error) {
    throw error;
  }
};

//
// 🔐 Mobile OTP Auth
//

export const sendOtp = async (phoneNumber) => {
  try {
    if (!auth) throw new Error("Firebase Auth not initialized");

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("reCAPTCHA solved", response);
          },
        }
      );

      await window.recaptchaVerifier.render();
    }

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      window.recaptchaVerifier
    );

    window.confirmationResult = confirmationResult;
    return confirmationResult;
  } catch (error) {
    console.error("OTP sending failed:", error.message, error);
    throw error;
  }
};

export const verifyOtp = async (otp) => {
  try {
    if (!window.confirmationResult) {
      throw new Error("No confirmation result. Send OTP first.");
    }

    const result = await window.confirmationResult.confirm(otp);
    return result.user;
  } catch (error) {
    console.error("OTP verification failed:", error);
    throw error;
  }
};
