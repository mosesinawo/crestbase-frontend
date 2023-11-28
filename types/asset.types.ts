interface InspectionSchedule {
    date: string;
    time: string;
    _id: string;
    id: string;
}

interface View {
    name: string;
    url: string;
    _id: string;
    id: string;
}

interface Category {
    _id: string;
    name: string;
    id: string;
}

interface ApartmentType {
    _id: string;
    name: string;
    id: string;
}

interface GeoLocation {
    longitude: string; // You might want to update the type for longitude
    latitude: string;
    _id: string;
    id: string;
}

export interface Features {
    Bedroom: number;
    Sittingroom: number;
    Kitchen: number;
    Toilet: number;
    ParkingSpace: number;
}

interface SocialMedia {
    [index: number]: string;
    _id: string;
    id: string;
}

interface User {
    _id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    profilePicture: string;
    fullName: string;
    id: string;
}

interface Agent {
    _id: string;
    socialMedia: SocialMedia[];
    about: string;
    user: User;
}

export interface ApartmentData {
    viewsCount: {
        count: number;
        userIds: string[];
    };
    _id: string;
    paymentStatus: string;
    available: boolean;
    status: string;
    completestatus: string;
    __t: string;
    inspectionSchedule: InspectionSchedule[];
    documents: any[]; // You might want to replace `any` with a specific type for documents
    views: View[];
    category: Category;
    apartmentType: ApartmentType;
    geoLocation: GeoLocation;
    location: string;
    annualPayment: number;
    agentAgreementAmount: number;
    totalPrice: number;
    name: string;
    area: string;
    features: Features;
    description: string;
    listingType: string;
    agent: Agent;
    referenceNumber: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
}

export interface ApartmentResponse {
    status: string;
    data: ApartmentData;
}


