

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Replace these example values with your actual Firebase configuration.
const firebaseConfig = {
    apiKey: "AIzaSyDz_q3pKsdU-SyztWxL9nOhtoGGBXrRXkg",
    authDomain: "bizboost-7cdf0.firebaseapp.com",
    projectId: "bizboost-7cdf0",
    storageBucket: "bizboost-7cdf0.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

const showLoginButton = document.getElementById("showLoginButton");
const showRegisterButton = document.getElementById("showRegisterButton");

const accountTitle = document.getElementById("accountTitle");
const accountDescription = document.getElementById("accountDescription");
const authMessage = document.getElementById("authMessage");

// Switch to the login form
showLoginButton.addEventListener("click", () => {
    registerForm.hidden = true;
    loginForm.hidden = false;

    accountTitle.textContent = "Welcome Back!";
    accountDescription.textContent =
        "Log in to continue growing your business.";

    authMessage.textContent = "";
});

// Switch to the registration form
showRegisterButton.addEventListener("click", () => {
    loginForm.hidden = true;
    registerForm.hidden = false;

    accountTitle.textContent = "Welcome to BizBoost";
    accountDescription.textContent =
        "Join our community and discover opportunities to grow your business.";

    authMessage.textContent = "";
});

// Register a new user
registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;

    authMessage.textContent = "Creating your account...";

    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        await updateProfile(userCredential.user, {
            displayName: name
        });

        authMessage.textContent =
            `Welcome to BizBoost, ${name}! Your account has been created.`;

        registerForm.reset();

    } catch (error) {
        console.error(error);

        const messages = {
            "auth/email-already-in-use":
                "An account with this email already exists.",
            "auth/invalid-email":
                "Please enter a valid email address.",
            "auth/weak-password":
                "Please choose a stronger password.",
            "auth/operation-not-allowed":
                "Email and password sign-in is not enabled in Firebase."
        };

        authMessage.textContent =
            messages[error.code] ||
            "We couldn't create your account. Please check your Firebase settings and try again.";
    }
});

// Log in an existing user
loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    authMessage.textContent = "Logging in...";

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        authMessage.textContent =
            `Welcome back, ${userCredential.user.displayName || email}!`;

        loginForm.reset();

    } catch (error) {
        console.error(error);

        authMessage.textContent =
            "Login failed. Please check your email and password and try again.";
    }
});
