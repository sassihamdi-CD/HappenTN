import { Event } from '../event'

export class Location {
  id: string

  name: string

  address: string

  region: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  events?: Event[]
}
