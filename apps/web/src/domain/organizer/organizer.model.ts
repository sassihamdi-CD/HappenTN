import { Event } from '../event'

export class Organizer {
  id: string

  name: string

  contactInfo: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  events?: Event[]
}
