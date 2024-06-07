import { User } from '../user'

import { Event } from '../event'

export class Favorite {
  id: string

  userId: string

  user?: User

  eventId: string

  event?: Event

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
