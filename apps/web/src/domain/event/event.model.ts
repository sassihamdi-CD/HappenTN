import { Location } from '../location'

import { Organizer } from '../organizer'

import { Review } from '../review'

import { Favorite } from '../favorite'

import { Calendar } from '../calendar'

export class Event {
  id: string

  name: string

  description?: string

  date: string

  time: string

  locationId: string

  location?: Location

  organizerId: string

  organizer?: Organizer

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  reviews?: Review[]

  favorites?: Favorite[]

  calendars?: Calendar[]
}
