import { User } from '../user'

import { Event } from '../event'

export class Calendar {
  id: string

  userId: string

  user?: User

  eventId: string

  event?: Event

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
