import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('9b99cd8e-fb09-4bf1-8370-e7e24d4c675e', '1Brown85@yahoo.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_44556', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('5452df33-19ff-4c25-8ab6-045207c8a2a2', '8Elmore66@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=10', 'cus_78901', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('d034b191-b676-4df8-9716-cf86362d84d0', '22Nathanial68@yahoo.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=24', 'cus_67890', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('83ae115f-8c9a-4489-bf21-0edbabd72de0', '29Creola.Schmidt69@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=31', 'cus_12345', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('5eb95e4d-f4a1-43b8-a036-99278d2c9c68', '36Dorris.Schiller@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=38', 'cus_44556', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('7e44a92e-25db-48a8-b3b1-c2be3d6c679b', '43Milton10@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_44556', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('cfcd52a5-5bc4-43d8-858c-9b3693e590a9', '50Giovanni_Lind90@yahoo.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=52', 'cus_67890', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('b1ce5457-cf28-46ed-b96c-c1981f60c30d', '57Gust55@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=59', 'cus_11223', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('4d0b7b23-f64e-431b-88b6-b9f9d13ab03e', '64Spencer.Lind@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=66', 'cus_11223', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('595de181-fa4f-49a9-8b35-27ac833d3a94', 'Music Festival in Djerba', 'Taste the best of Tunisian cuisine at the food festival in Hammamet.', 'Tech Enthusiast', '74Andreanne52@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=75', 'https://i.imgur.com/YfJQV5z.png?id=76', '7e44a92e-25db-48a8-b3b1-c2be3d6c679b');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('cd4cd6c0-506c-4bc1-a4ac-b90cd21e92e6', 'Art Exhibition in Sousse', 'Enjoy live music performances at the festival in Djerba.', 'Local Artist', '81Gabriella.Wintheiser12@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=82', 'https://i.imgur.com/YfJQV5z.png?id=83', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('f227850d-4f8e-44fc-8a98-0f07902c4b20', 'Art Exhibition in Sousse', 'Learn about the latest tech trends at the conference in Sfax.', 'Food Critic', '88Eriberto.OKeefe51@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=89', 'https://i.imgur.com/YfJQV5z.png?id=90', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('2e16d33c-b0d2-4e0b-9050-c07916b59fa9', 'Tech Conference in Sfax', 'Enjoy live music performances at the festival in Djerba.', 'Tech Enthusiast', '95Leora.Murphy@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=96', 'https://i.imgur.com/YfJQV5z.png?id=97', 'b1ce5457-cf28-46ed-b96c-c1981f60c30d');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('faa31e35-8667-4808-be6e-ddc9c03a56b2', 'Concert in Tunis', 'Dont miss the art exhibition in Sousse featuring local artists.', 'Food Critic', '102Maritza_Haley@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=103', 'https://i.imgur.com/YfJQV5z.png?id=104', '5452df33-19ff-4c25-8ab6-045207c8a2a2');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d53021c1-f394-47d5-b6a5-4e77e583c6ee', 'Tech Conference in Sfax', 'Enjoy live music performances at the festival in Djerba.', 'Music Lover', '109Mariane_Volkman@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=110', 'https://i.imgur.com/YfJQV5z.png?id=111', '5eb95e4d-f4a1-43b8-a036-99278d2c9c68');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('56858f30-e549-4da9-a2e2-6ddaf47933c8', 'Concert in Tunis', 'Taste the best of Tunisian cuisine at the food festival in Hammamet.', 'Music Lover', '116Consuelo.Jacobi74@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=117', 'https://i.imgur.com/YfJQV5z.png?id=118', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('64416bba-f30c-4ed3-a2df-7ba7c9fdeda9', 'Tech Conference in Sfax', 'Join us for an amazing concert in Tunis this weekend', 'Local Artist', '123Jerel30@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=124', 'https://i.imgur.com/YfJQV5z.png?id=125', 'd034b191-b676-4df8-9716-cf86362d84d0');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6ea0902c-6941-4e4f-a18e-487d4f134137', 'Concert in Tunis', 'Enjoy live music performances at the festival in Djerba.', 'Local Artist', '130Julian.Tremblay@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=131', 'https://i.imgur.com/YfJQV5z.png?id=132', 'd034b191-b676-4df8-9716-cf86362d84d0');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7dbc042f-bdb8-4c76-a5c2-e6b8204b2527', 'Music Festival in Djerba', 'Learn about the latest tech trends at the conference in Sfax.', 'Food Critic', '137Krystel69@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=138', 'https://i.imgur.com/YfJQV5z.png?id=139', '5eb95e4d-f4a1-43b8-a036-99278d2c9c68');

INSERT INTO "location" ("id", "name", "address", "region") VALUES ('36f90a49-a084-4abe-b660-5c0b40594ca8', 'Carthage Amphitheatre', '142 430 Lafayette St, New York, NY 10003', 'Tunis');
INSERT INTO "location" ("id", "name", "address", "region") VALUES ('205fcf9e-a025-4481-885c-d6f7fdf6a687', 'Bardo National Museum', '146 91 Christopher St, New York, NY 10014', 'Mahdia');
INSERT INTO "location" ("id", "name", "address", "region") VALUES ('25147955-277b-4922-8a6e-9df06612c306', 'Sidi Bou Said Park', '150 18 Spring St, New York, NY 10012', 'Ariana');
INSERT INTO "location" ("id", "name", "address", "region") VALUES ('bbe52e6f-e253-416d-8fdd-35d5fff4bfc1', 'Medina Cultural Center', '154 330 W Broadway, New York, NY 10013', 'Monastir');
INSERT INTO "location" ("id", "name", "address", "region") VALUES ('1deab121-fb01-41a0-81e4-414afc79794f', 'Bardo National Museum', '158 136 E 13th St, New York, NY 10003', 'Mahdia');
INSERT INTO "location" ("id", "name", "address", "region") VALUES ('9efb0028-4448-443c-b18e-aeb25223802c', 'Bardo National Museum', '162 430 Lafayette St, New York, NY 10003', 'Mahdia');
INSERT INTO "location" ("id", "name", "address", "region") VALUES ('203296cf-7a7d-40ec-bb56-2bd01ac19c16', 'Sidi Bou Said Park', '166 91 Christopher St, New York, NY 10014', 'Tunis');
INSERT INTO "location" ("id", "name", "address", "region") VALUES ('13a8e69a-1477-4ce7-8ea0-744efb754f7e', 'Bardo National Museum', '170 136 E 13th St, New York, NY 10003', 'Monastir');
INSERT INTO "location" ("id", "name", "address", "region") VALUES ('0f56c18d-4e42-4c57-8260-69ba2f09b389', 'Carthage Amphitheatre', '174 430 Lafayette St, New York, NY 10003', 'Tunis');
INSERT INTO "location" ("id", "name", "address", "region") VALUES ('d0629d20-eeff-4f90-b4e0-3552f8ea75dd', 'El Jem Museum', '178 18 Spring St, New York, NY 10012', 'Sousse');

INSERT INTO "organizer" ("id", "name", "contactInfo") VALUES ('d028e724-1b8c-41eb-b7b0-f764546371d2', 'Maghreb Gatherings', 'infomaghrebgatherings.com');
INSERT INTO "organizer" ("id", "name", "contactInfo") VALUES ('89a9aa71-8dc4-4ee0-abca-f65145cf22b6', 'Tunisia Events Co.', 'supportsaharacelebrations.tn');
INSERT INTO "organizer" ("id", "name", "contactInfo") VALUES ('3169261b-9546-497f-bbca-12089e3ba685', 'Maghreb Gatherings', 'contacttunisiaevents.co');
INSERT INTO "organizer" ("id", "name", "contactInfo") VALUES ('7b9b8014-ab90-423e-9240-f55c73a51544', 'Carthage Festivals', 'infomaghrebgatherings.com');
INSERT INTO "organizer" ("id", "name", "contactInfo") VALUES ('f8bc416b-3206-4b87-a57c-1c6e0aa29137', 'Sahara Celebrations', 'contactdjerbaevents.net');
INSERT INTO "organizer" ("id", "name", "contactInfo") VALUES ('f72cad00-1d0a-434c-8d45-2b4ec44f9f50', 'Djerba Events', 'infomaghrebgatherings.com');
INSERT INTO "organizer" ("id", "name", "contactInfo") VALUES ('b32cbca9-3bf3-4e1f-b1fc-241111cdcd3c', 'Tunisia Events Co.', 'supportsaharacelebrations.tn');
INSERT INTO "organizer" ("id", "name", "contactInfo") VALUES ('f4607cff-e866-4fb7-87b6-cdd32ffbc871', 'Tunisia Events Co.', 'contactdjerbaevents.net');
INSERT INTO "organizer" ("id", "name", "contactInfo") VALUES ('2f08b0ca-a069-4f1c-97df-2f5f55968044', 'Djerba Events', 'infomaghrebgatherings.com');
INSERT INTO "organizer" ("id", "name", "contactInfo") VALUES ('5ab9e3b5-b441-4bb1-9e40-a67b03dd5634', 'Maghreb Gatherings', 'hellocarthagefestivals.org');

INSERT INTO "event" ("id", "name", "description", "date", "time", "locationId", "organizerId") VALUES ('58d24b84-53e6-49e6-b4d1-d104c78efa8a', 'Carthage Film Festival', 'A culinary event featuring local and international cuisine.', '2024-11-17T17:51:18.752Z', '20240725T060000Z', '205fcf9e-a025-4481-885c-d6f7fdf6a687', 'b32cbca9-3bf3-4e1f-b1fc-241111cdcd3c');
INSERT INTO "event" ("id", "name", "description", "date", "time", "locationId", "organizerId") VALUES ('31ec3dcc-c20a-476e-98b6-07457dbb734c', 'Tunis Marathon', 'A marathon through the historic streets of Tunis.', '2023-12-14T17:39:11.150Z', '20231215T180000Z', '9efb0028-4448-443c-b18e-aeb25223802c', 'b32cbca9-3bf3-4e1f-b1fc-241111cdcd3c');
INSERT INTO "event" ("id", "name", "description", "date", "time", "locationId", "organizerId") VALUES ('e717ceda-521e-4258-8d95-d16af8c5cdc3', 'Sousse Beach Party', 'A marathon through the historic streets of Tunis.', '2024-08-11T10:45:17.301Z', '20240725T060000Z', '25147955-277b-4922-8a6e-9df06612c306', '5ab9e3b5-b441-4bb1-9e40-a67b03dd5634');
INSERT INTO "event" ("id", "name", "description", "date", "time", "locationId", "organizerId") VALUES ('234f05d3-e6d8-4c9b-81ee-0015322b04e7', 'Tunis Marathon', 'A grand celebration of music from around the world.', '2024-12-05T16:47:31.330Z', '20231215T180000Z', '9efb0028-4448-443c-b18e-aeb25223802c', 'f8bc416b-3206-4b87-a57c-1c6e0aa29137');
INSERT INTO "event" ("id", "name", "description", "date", "time", "locationId", "organizerId") VALUES ('f5c53bea-7c5c-4d8e-aed8-855ca7ed564b', 'Djerba Food Expo', 'A lively beach party with DJs and live performances.', '2024-08-18T18:33:30.681Z', '20240305T220000Z', '0f56c18d-4e42-4c57-8260-69ba2f09b389', '5ab9e3b5-b441-4bb1-9e40-a67b03dd5634');
INSERT INTO "event" ("id", "name", "description", "date", "time", "locationId", "organizerId") VALUES ('6df0f9b9-5656-4672-b5b3-ed45d0b078f5', 'Sousse Beach Party', 'Showcasing the best films from Tunisia and beyond.', '2025-05-10T17:03:16.968Z', '20240725T060000Z', '36f90a49-a084-4abe-b660-5c0b40594ca8', 'f4607cff-e866-4fb7-87b6-cdd32ffbc871');
INSERT INTO "event" ("id", "name", "description", "date", "time", "locationId", "organizerId") VALUES ('c485d4b6-bbb9-4f5f-a60c-973c0d531d17', 'Sousse Beach Party', 'A lively beach party with DJs and live performances.', '2025-03-03T00:20:09.204Z', '20240305T220000Z', '1deab121-fb01-41a0-81e4-414afc79794f', 'f8bc416b-3206-4b87-a57c-1c6e0aa29137');
INSERT INTO "event" ("id", "name", "description", "date", "time", "locationId", "organizerId") VALUES ('a2fe6b95-0772-417b-84ec-9726ccb9b1e2', 'Tunisia Music Festival', 'Showcasing the best films from Tunisia and beyond.', '2024-03-12T02:27:48.837Z', '20240725T060000Z', 'bbe52e6f-e253-416d-8fdd-35d5fff4bfc1', 'b32cbca9-3bf3-4e1f-b1fc-241111cdcd3c');
INSERT INTO "event" ("id", "name", "description", "date", "time", "locationId", "organizerId") VALUES ('7bcd66bf-1e6e-430f-b4ac-8a4a8e888145', 'Tunis Marathon', 'Showcasing the best films from Tunisia and beyond.', '2025-02-18T10:47:13.854Z', '20240120T200000Z', '203296cf-7a7d-40ec-bb56-2bd01ac19c16', 'b32cbca9-3bf3-4e1f-b1fc-241111cdcd3c');
INSERT INTO "event" ("id", "name", "description", "date", "time", "locationId", "organizerId") VALUES ('0625d06f-0ada-4012-95fe-2cc6aa8bede2', 'Tunisia Music Festival', 'Showcasing the best films from Tunisia and beyond.', '2024-10-14T08:37:22.915Z', '20240120T200000Z', '0f56c18d-4e42-4c57-8260-69ba2f09b389', 'f72cad00-1d0a-434c-8d45-2b4ec44f9f50');

INSERT INTO "review" ("id", "rating", "comment", "userId", "eventId") VALUES ('5dfdcb4f-0655-4025-8c27-a057c00ceabe', 569, 'It was okay could have been better.', '83ae115f-8c9a-4489-bf21-0edbabd72de0', '0625d06f-0ada-4012-95fe-2cc6aa8bede2');
INSERT INTO "review" ("id", "rating", "comment", "userId", "eventId") VALUES ('8e432288-ad05-4931-b844-6ecc87db84ca', 33, 'It was okay could have been better.', '4d0b7b23-f64e-431b-88b6-b9f9d13ab03e', '0625d06f-0ada-4012-95fe-2cc6aa8bede2');
INSERT INTO "review" ("id", "rating", "comment", "userId", "eventId") VALUES ('e50a741c-e87a-4b54-b241-fcf5d4620f81', 235, 'Fantastic organization and great performances', '83ae115f-8c9a-4489-bf21-0edbabd72de0', '58d24b84-53e6-49e6-b4d1-d104c78efa8a');
INSERT INTO "review" ("id", "rating", "comment", "userId", "eventId") VALUES ('acef7700-ac10-4b99-9ae2-d06a7acb56ef', 267, 'Fantastic organization and great performances', 'b1ce5457-cf28-46ed-b96c-c1981f60c30d', '7bcd66bf-1e6e-430f-b4ac-8a4a8e888145');
INSERT INTO "review" ("id", "rating", "comment", "userId", "eventId") VALUES ('f1348ab4-a84e-4e98-a980-e572902ec269', 893, 'Amazing event had a great time', 'b1ce5457-cf28-46ed-b96c-c1981f60c30d', 'e717ceda-521e-4258-8d95-d16af8c5cdc3');
INSERT INTO "review" ("id", "rating", "comment", "userId", "eventId") VALUES ('09ea9a9b-8702-48e1-b889-e18060019af0', 258, 'Fantastic organization and great performances', '4d0b7b23-f64e-431b-88b6-b9f9d13ab03e', 'a2fe6b95-0772-417b-84ec-9726ccb9b1e2');
INSERT INTO "review" ("id", "rating", "comment", "userId", "eventId") VALUES ('9ad137c7-4f22-46b9-bbb8-3c1310071d77', 653, 'It was okay could have been better.', '4d0b7b23-f64e-431b-88b6-b9f9d13ab03e', '31ec3dcc-c20a-476e-98b6-07457dbb734c');
INSERT INTO "review" ("id", "rating", "comment", "userId", "eventId") VALUES ('c94b42e8-20fe-4fee-b8a0-8bca9003fe8f', 739, 'Not what I expected quite disappointing.', '5eb95e4d-f4a1-43b8-a036-99278d2c9c68', 'a2fe6b95-0772-417b-84ec-9726ccb9b1e2');
INSERT INTO "review" ("id", "rating", "comment", "userId", "eventId") VALUES ('7bfaffb5-fa3e-4bcf-96e8-04d68e3930c1', 944, 'Amazing event had a great time', '5eb95e4d-f4a1-43b8-a036-99278d2c9c68', '31ec3dcc-c20a-476e-98b6-07457dbb734c');
INSERT INTO "review" ("id", "rating", "comment", "userId", "eventId") VALUES ('80042b40-4b73-4f50-a878-606729eea325', 576, 'It was okay could have been better.', 'b1ce5457-cf28-46ed-b96c-c1981f60c30d', '58d24b84-53e6-49e6-b4d1-d104c78efa8a');

INSERT INTO "favorite" ("id", "userId", "eventId") VALUES ('abf8b8fd-b337-4a43-87d6-8dee855b825f', '4d0b7b23-f64e-431b-88b6-b9f9d13ab03e', '0625d06f-0ada-4012-95fe-2cc6aa8bede2');
INSERT INTO "favorite" ("id", "userId", "eventId") VALUES ('842263d4-c791-4f29-8c63-3c99e3541d6a', '83ae115f-8c9a-4489-bf21-0edbabd72de0', '58d24b84-53e6-49e6-b4d1-d104c78efa8a');
INSERT INTO "favorite" ("id", "userId", "eventId") VALUES ('e1818e8b-00a0-490a-808a-b2822f9ba82c', '9b99cd8e-fb09-4bf1-8370-e7e24d4c675e', '6df0f9b9-5656-4672-b5b3-ed45d0b078f5');
INSERT INTO "favorite" ("id", "userId", "eventId") VALUES ('9f7ff01f-e8ed-44f1-8511-cedcf427b229', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '234f05d3-e6d8-4c9b-81ee-0015322b04e7');
INSERT INTO "favorite" ("id", "userId", "eventId") VALUES ('6e9dc3dc-d7c7-44af-827a-e71dc9455f88', '7e44a92e-25db-48a8-b3b1-c2be3d6c679b', '7bcd66bf-1e6e-430f-b4ac-8a4a8e888145');
INSERT INTO "favorite" ("id", "userId", "eventId") VALUES ('0384c92a-e1e7-49fc-8deb-327d78d01f69', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '7bcd66bf-1e6e-430f-b4ac-8a4a8e888145');
INSERT INTO "favorite" ("id", "userId", "eventId") VALUES ('814f2c95-3dad-49f1-9afb-e882249514f6', '4d0b7b23-f64e-431b-88b6-b9f9d13ab03e', '234f05d3-e6d8-4c9b-81ee-0015322b04e7');
INSERT INTO "favorite" ("id", "userId", "eventId") VALUES ('8dec3f0e-7dcf-471a-b82c-281229c53cf5', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '6df0f9b9-5656-4672-b5b3-ed45d0b078f5');
INSERT INTO "favorite" ("id", "userId", "eventId") VALUES ('ab0cb961-0e25-4755-a919-c8b4188904b0', '9b99cd8e-fb09-4bf1-8370-e7e24d4c675e', 'e717ceda-521e-4258-8d95-d16af8c5cdc3');
INSERT INTO "favorite" ("id", "userId", "eventId") VALUES ('b8aed053-fcbe-4f6e-b837-3029355823c1', 'cfcd52a5-5bc4-43d8-858c-9b3693e590a9', 'e717ceda-521e-4258-8d95-d16af8c5cdc3');

INSERT INTO "calendar" ("id", "userId", "eventId") VALUES ('a98f23bf-d3b8-4b65-9a18-766b4e1a44c0', '7e44a92e-25db-48a8-b3b1-c2be3d6c679b', '58d24b84-53e6-49e6-b4d1-d104c78efa8a');
INSERT INTO "calendar" ("id", "userId", "eventId") VALUES ('010578b7-8a21-435a-a824-fb6bb175097c', 'b1ce5457-cf28-46ed-b96c-c1981f60c30d', 'c485d4b6-bbb9-4f5f-a60c-973c0d531d17');
INSERT INTO "calendar" ("id", "userId", "eventId") VALUES ('c22dd54f-67a7-4468-85a3-76e3a3ca0221', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '7bcd66bf-1e6e-430f-b4ac-8a4a8e888145');
INSERT INTO "calendar" ("id", "userId", "eventId") VALUES ('84e92bfd-abf9-458c-a21d-01028d8c3697', '5452df33-19ff-4c25-8ab6-045207c8a2a2', '31ec3dcc-c20a-476e-98b6-07457dbb734c');
INSERT INTO "calendar" ("id", "userId", "eventId") VALUES ('087eaeb9-a0f7-4af9-9d1b-e9adb989e32d', 'd034b191-b676-4df8-9716-cf86362d84d0', 'c485d4b6-bbb9-4f5f-a60c-973c0d531d17');
INSERT INTO "calendar" ("id", "userId", "eventId") VALUES ('9340321c-3655-40c6-ba65-84db7a25f27b', '4d0b7b23-f64e-431b-88b6-b9f9d13ab03e', '58d24b84-53e6-49e6-b4d1-d104c78efa8a');
INSERT INTO "calendar" ("id", "userId", "eventId") VALUES ('692b902f-8a3b-45da-8115-df4903654cab', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '234f05d3-e6d8-4c9b-81ee-0015322b04e7');
INSERT INTO "calendar" ("id", "userId", "eventId") VALUES ('3ac62800-f67d-4ccc-abe0-e90c2e69d01f', 'b1ce5457-cf28-46ed-b96c-c1981f60c30d', '58d24b84-53e6-49e6-b4d1-d104c78efa8a');
INSERT INTO "calendar" ("id", "userId", "eventId") VALUES ('e52b6b19-acf5-4666-bae4-2f1fa899a11f', '9b99cd8e-fb09-4bf1-8370-e7e24d4c675e', 'e717ceda-521e-4258-8d95-d16af8c5cdc3');
INSERT INTO "calendar" ("id", "userId", "eventId") VALUES ('492ff588-f54f-4e39-91bb-1240f8965620', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c485d4b6-bbb9-4f5f-a60c-973c0d531d17');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
