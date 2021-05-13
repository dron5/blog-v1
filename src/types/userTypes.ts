export const SET_AUTHORIZED = "SET_AUTHORIZED";
export const SET_USER = "SET_USER";

export type UserType = {
  user: {
    email: string,
    token: string,
    username: string,
    bio: null | string,
    image: null | string,
  }
}

export type InitialUserStateType = {
  authorized: boolean,
  user: UserType | null,
}

export type SetUserActionType = {
  type: typeof SET_USER,
  payload: UserType | null
}

export type SetAuthorizedFlagActionType = {
  type: typeof SET_AUTHORIZED,
  payload: boolean
}

export type UserActionsType =
| SetUserActionType
| SetAuthorizedFlagActionType
