import keys from '../Base/ActionTypeKeys';

//Types
interface IShowBubbles {
    type: keys.SHOW_BUBBLES;
}

interface IHideBubbles {
    type: keys.HIDE_BUBBLES;
}

interface IChangePage {
    type: keys.CHANGE_PAGE;
    currentPage: string;
}

//Action creator
export function showBubbles(): IShowBubbles {
    return {
        type: keys.SHOW_BUBBLES
    };
}

export function hideBubbles(): IHideBubbles {
    return {
        type: keys.HIDE_BUBBLES
    };
}

export function changePage(page: string): IChangePage {
    return {
        currentPage: page,
        type: keys.CHANGE_PAGE
    };
}

export type AboutActionTypes =
    IShowBubbles
    | IHideBubbles
    | IChangePage;