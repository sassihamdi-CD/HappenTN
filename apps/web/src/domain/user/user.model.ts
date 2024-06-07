import { Notification } from '../notification'

import { Review } from '../review'

import { Favorite } from '../favorite'

import { Calendar } from '../calendar'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email?: string
  status: UserStatus
  name?: string
  pictureUrl?: string
  password?: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  reviews?: Review[]

  favorites?: Favorite[]

  calendars?: Calendar[]
}
