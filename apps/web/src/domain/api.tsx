import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { BillingApi } from './billing/billing.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { LocationApi } from './location/location.api'

import { OrganizerApi } from './organizer/organizer.api'

import { EventApi } from './event/event.api'

import { ReviewApi } from './review/review.api'

import { FavoriteApi } from './favorite/favorite.api'

import { CalendarApi } from './calendar/calendar.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Billing extends BillingApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Location extends LocationApi {}

  export class Organizer extends OrganizerApi {}

  export class Event extends EventApi {}

  export class Review extends ReviewApi {}

  export class Favorite extends FavoriteApi {}

  export class Calendar extends CalendarApi {}
}
