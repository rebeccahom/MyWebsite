import keys from '../Base/ActionTypeKeys';

//Types
interface IShowBubbles {
    type: keys.SHOW_BUBBLES;
}

interface IHideBubbles {
    type: keys.HIDE_BUBBLES;
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

export type AboutActionTypes =
    IShowBubbles
    | IHideBubbles;