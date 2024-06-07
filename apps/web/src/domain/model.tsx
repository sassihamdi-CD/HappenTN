import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'
import {
  BillingPayment as BillingPaymentModel,
  BillingProduct as BillingProductModel,
  BillingSubscription as BillingSubscriptionModel,
} from './billing/billing.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Location as LocationModel } from './location/location.model'

import { Organizer as OrganizerModel } from './organizer/organizer.model'

import { Event as EventModel } from './event/event.model'

import { Review as ReviewModel } from './review/review.model'

import { Favorite as FavoriteModel } from './favorite/favorite.model'

import { Calendar as CalendarModel } from './calendar/calendar.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  export class BillingProduct extends BillingProductModel {}
  export class BillingPayment extends BillingPaymentModel {}
  export class BillingSubscription extends BillingSubscriptionModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Location extends LocationModel {}

  export class Organizer extends OrganizerModel {}

  export class Event extends EventModel {}

  export class Review extends ReviewModel {}

  export class Favorite extends FavoriteModel {}

  export class Calendar extends CalendarModel {}
}
