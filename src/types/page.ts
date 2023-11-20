export enum Pages {
    SingInPage = 'sign-in-page',
    SingUpPage = 'sign-up-page',
    ChatsPage = 'chats-page',
    SpecificChatPage = 'specific-chat-page',
    ProfilePage = 'profile-page',
    NotFoundPage = 'not-found-page',
    InternalErrorPage = 'internal-error-page',
}

export interface Page {
    name: Pages;
}
