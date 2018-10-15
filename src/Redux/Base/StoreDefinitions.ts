export interface IApplicationState {
    bubblesAreShown: boolean;
    currentPage: string;
}

export const initialState: IApplicationState = {
    bubblesAreShown: true,
    currentPage: ""
};