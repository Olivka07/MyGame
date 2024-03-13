export interface IQuestion {
    id: number;
    task: string;
    score: number;
    answer: string;
    solved: boolean;
}

export interface IData {
    id: number;
    questions: IQuestion[];
    solved: boolean;
    title: string;
}
