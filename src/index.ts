import Handlebars from 'handlebars';
import { Button } from './components/button';
import { Page, Pages } from 'types/page';

Handlebars.registerPartial('Button', Button);

const root = document.querySelector('#root') as HTMLElement;

root.innerHTML = Handlebars.compile(`<div>{{>Button label="some text"}}</div>`)({});

const pages: Record<Pages, Page> = {
    [Pages.SingInPage]: {
        name: Pages.SingInPage,
    },
    [Pages.SingUpPage]: {
        name: Pages.SingUpPage,
    },
    [Pages.ChatsPage]: {
        name: Pages.ChatsPage,
    },
    [Pages.SpecificChatPage]: {
        name: Pages.SpecificChatPage,
    },
    [Pages.ProfilePage]: {
        name: Pages.ProfilePage,
    },
    [Pages.NotFoundPage]: {
        name: Pages.NotFoundPage,
    },
    [Pages.InternalErrorPage]: {
        name: Pages.InternalErrorPage,
    },
};
