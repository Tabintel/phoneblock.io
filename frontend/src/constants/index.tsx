
import { FiSettings } from "react-icons/fi";
import { Network, Wifi, Phone, MessageSquare, ArrowRight, Shield, Users, Zap } from 'lucide-react'
import { BiMessage, BiSolidDashboard, BiStats } from "react-icons/bi";
import { BsLuggage } from "react-icons/bs";
// ------------- API REQUEST ROUTE -----------------
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

// ------------- USER DASHBOARD LINKS LISTS START -----------------
export const userDashboardLinks = [
    {
        id: 1,
        tab: {
            title: "Dashboard",
            path: "/user",
            icon: <BiSolidDashboard fontSize={"24px"} />,
        },
        list: [],
    },
    {
        id: 200,
        tab: {
            icon: <FiSettings fontSize={"20px"} />,
            title: "Candidate Profile",
            path: "/user/profile",
        },
        list: [],
    },
    {
        id: 61,
        tab: {
            icon: <BsLuggage fontSize={"22px"} />,
            title: "Jobs",
            path: "/user/jobs",
        },
        list: [],
    },
    {
        id: 6,
        tab: {
            icon: <BsLuggage fontSize={"22px"} />,
            title: "Applied Jobs",
            path: "/user/applied-jobs",
        },
        list: [],
    },
    {
        id: 6,
        tab: {
            icon: <BiMessage fontSize={"23px"} />,
            title: "Messages",
            path: "/user/message",
        },
        list: [],
    },
]
// ------------- USER DASHBOARD LINKS LISTS END -----------------
// ------------- whyChooseUs LISTS START -----------------
export const whyChooseUs = [
    {
        text: "Internet Access",
        subtext: "High-speed internet through our decentralized network.",
        icon: <Wifi className="h-8 w-8 text-blue-600" />
    },
    {
        text: "Phone Services",
        subtext:"Crystal-clear voice calls over our secure network.",  
        icon: <Phone className="h-8 w-8 text-blue-600" />
    }, {
        text: "Messaging",
        subtext: "Encrypted messaging for private communications.",
        icon: <Phone className="h-8 w-8 text-blue-600" />
    },
]
// ------------- whyChooseUs LISTS END -----------------


// ------------- USER DASHBOARD WIDGET LISTS START -----------------

export const widgetData = [
    {
        title: "Applied Jobs",
        subtext: "Browse your applied jobs here and check their respective progress..",
        bgColor: "#cdeed3",
        icon: <BsLuggage fontSize={"24px"} />,
        color: "#347345"
    },
    {
        title: "Messages",
        subtext: "Browse your applied jobs here and check their respective progress..",
        bgColor: "#deddff",
        icon: <BiMessage fontSize={"24px"} />,
        color: "#347345"
    }, {
        title: "Pending Jobs",
        subtext: "Browse your applied jobs here and check their respective progress..",
        bgColor: "#ffeec3",
        icon: <BsLuggage fontSize={"24px"} />,
        color: "#347345"
    }, {
        title: "Reviewed Jobs",
        subtext: "Browse your applied jobs here and check their respective progress..",
        bgColor: "#f3f3f1",
        icon: <BsLuggage fontSize={"24px"} />,
        color: "#347345"
    },
]
// ------------- USER DASHBOARD WIDGET LISTS END -----------------

// ------------- applicantsData DASHBOARD WIDGET LISTS START -----------------

export const applicantsData = [
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Javascript Developer",
        joblocation: "onsite",
        company: "Proxify",
        ApplicationStatus: "PENDING",
        bgColor: "#FFE1CC",
        companyImage: "/images/Proxify.png",
        applicantName: "Mary Benjamin",
        applicantLevel: "Senior Developer",
        dateApplied: "21st November 2024",
        applicationStatus: "Hiring",
        applicantImage: "/images/face/avatar_1.jpg"
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Senior Phyton Developer",
        joblocation: "hybrid",
        company: "Zello",
        ApplicationStatus: "ACTIVE",
        bgColor: "#D4F6ED",
        companyImage: "/images/Zello.png",
        applicantName: "Dainne Russel",
        applicantLevel: "Junior Developer",
        dateApplied: "21st November 2024",
        applicationStatus: "Hiring",
        applicantImage: "/images/face/avatar_2.png"
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Senior Full Stack Developer",
        joblocation: "remote",
        company: "alteroffice",
        ApplicationStatus: "HIRED",
        bgColor: "#ffe1cc",
        companyImage: "/images/alteroffice.png",
        applicantName: "Phillip Goodwill",
        applicantLevel: "Junior Developer",
        dateApplied: "21st November 2024",
        applicationStatus: "Rejected",
        applicantImage: "/images/face/avatar_3.png"
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Javascript Developer",
        joblocation: "onsite",
        company: "Proxify",
        ApplicationStatus: "PENDING",
        bgColor: "#FFE1CC",
        companyImage: "/images/Proxify.png",
        applicantName: "Mary Benjamin",
        applicantLevel: "Senior Developer",
        dateApplied: "21st November 2024",
        applicationStatus: "Hiring",
        applicantImage: "/images/face/avatar_1.jpg"
    },

]
// ------------- applicantsData DASHBOARD WIDGET LISTS END -----------------

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
