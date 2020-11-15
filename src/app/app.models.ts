export interface TitleDataLabel {
    title: string;
    firstText: string;
    secondText: string;
    firstImage: string;
    secondImage: string;
}

export interface Query {
    date: string;
    type: string;
    categories: string[];
    status: string;
    result: string;
}