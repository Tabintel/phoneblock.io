
// ------------- API REQUEST ROUTE -----------------
// eslint-disable-next-line no-undef
export const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:4000" : "";

export const PRODUCTS_URL = "/api/v1/product";
export const USERS_URL = "/api/v1/users";
export const AUTH_URL = "/api/v1/auth";
export const UPLOAD_URL = "/api/v1/upload";
export const PAYMENT_URL = "/api/v1/payment";
export const NOTIFICATION_URL = "/api/v1/notification";
export const REVIEW_URL = "/api/v1/review";
export const STAT_URL = "/api/v1/stat";

// ------------- API REQUEST ROUTE END -----------------
export type ProfileFormDataItem = {
    id: number;
    name: keyof FormValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};
export type FormValueType = {
    name: string;
    username: string;
    email: string;
    linkedln: string;
    country: string;
    password: string;
    salary?: string
};

// -------- Login form Data Type Start ----------------------
export type LoginValueType = {
    email: string;
    password: string;
};
export type LoginFormDataItem = {
    id: number;
    name: keyof LoginValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};
// -------- Login form Data Type End ----------------------

// -------- Register form Data Type Start ----------------------
export type RegisterValueType = {
    email: string;
    password: string;
    name: string;
    username: string;
};
export type RegisterFormDataItem = {
    id: number;
    name: keyof RegisterValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};
// -------- Login form Data Type End ----------------------


export type PasswordFormValueType = {
    password: string;
    confirmpassword: string;
};

export type ProfilePasswordDataItem = {
    id: number;
    name: keyof PasswordFormValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};



// --------------------------- form Data List Start --------------------

export const ProfileFormData: ProfileFormDataItem[] = [
    {
        id: 4,
        name: "name",
        type: "text",
        text: "Change your Name",
        label: "Alfred Dow",
        required: true,
    },
    {
        id: 43,
        name: "username",
        type: "text",
        text: "Change your preferred Name",
        label: "JohnDoe123",
        required: true,
    },
    {
        id: 1,
        name: "email",
        type: "email",
        text: "Change your Email",
        label: "hello@example.com",
        required: true,
    },
    {
        id: 42,
        name: "linkedln",
        type: "text",
        text: "Change your Linkedin Profile",
        label: "linkedin.com/in/johndoe3",
        required: true,
    },
];
export const LoginFormData: LoginFormDataItem[] = [
    {
        id: 1,
        name: "email",
        type: "email",
        text: "Email",
        label: "hello@example.com",
        required: true,
    },
    {
        id: 4,
        name: "password",
        type: "password",
        text: "Password",
        label: "my password",
        required: true,
    },
  
];
export const RegisterFormData: RegisterFormDataItem[] = [
    {
        id: 12,
        name: "name",
        type: "text",
        text: "Name",
        label: "Jane Doe",
        required: true,
    },
    {
        id: 12,
        name: "username",
        type: "text",
        text: "UserName",
        label: "JaneDoe@",
        required: true,
    },
    {
        id: 1,
        name: "email",
        type: "email",
        text: "Email",
        label: "hello@example.com",
        required: true,
    },
    {
        id: 4,
        name: "password",
        type: "password",
        text: "Password",
        label: "my password",
        required: true,
    },

];
export const PasswordFormData: ProfilePasswordDataItem[] = [
    {
        id: 4,
        name: "password",
        type: "password",
        text: "Change your Password",
        label: "my password",
        required: true,
    },
    {
        id: 43,
        name: "confirmpassword",
        type: "password",
        text: "Change your preferred Password",
        label: "Confirm your password",
        required: true,
    },
];

// --------------------------- form Data List End --------------------
