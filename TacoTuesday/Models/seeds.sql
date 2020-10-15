-- Ensure we truncate the table and restart the identity so our Id column starts at 1 each time
TRUNCATE TABLE "Restaurants", "Reviews", "Users" RESTART IDENTITY;

INSERT INTO "Restaurants" ("Name", "Description", "Address", "Telephone", "Latitude", "Longitude") VALUES ('Thoughtbeat', 'Inverse zero administration benchmark', '07 Meadow Vale Drive', '314-651-9791', 27.7970127, -82.6403897);
INSERT INTO "Restaurants" ("Name", "Description", "Address", "Telephone", "Latitude", "Longitude") VALUES ('Dabtype', 'Organized stable firmware', '7 Miller Park', '523-760-6681', 27.7970543, -82.6557106);
INSERT INTO "Restaurants" ("Name", "Description", "Address", "Telephone", "Latitude", "Longitude") VALUES ('Topdrive', 'Object-based interactive application', '65 Eliot Lane', '650-993-7074', 27.7833108, -82.7159637 );
INSERT INTO "Restaurants" ("Name", "Description", "Address", "Telephone", "Latitude", "Longitude") VALUES ('Avaveo', 'Persistent zero defect process improvement', '2 Clarendon Junction', '715-663-5265', 27.7717197, -82.6522627);

-- Insert a fake user for the fake reviews below
INSERT INTO "Users" ("FullName", "Email") VALUES ('Susan', 'susan@suncoast.io');

INSERT INTO "Reviews" ("RestaurantId", "CreatedAt", "Summary", "Body", "Stars", "UserId") VALUES (1, '2020-01-01 14:23:55', 'Yummy Food', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima modi impedit quisquam sit, saepe enim placeat a vero voluptas asperiores atque laudantium in, nobis sunt blanditiis dignissimos. Deleniti, esse optio!', 3, 1);
INSERT INTO "Reviews" ("RestaurantId", "CreatedAt", "Summary", "Body", "Stars", "UserId") VALUES (1, '2020-01-01 18:23:55', 'Mmmmm, good', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima modi impedit quisquam sit, saepe enim placeat a vero voluptas asperiores atque laudantium in, nobis sunt blanditiis dignissimos. Deleniti, esse optio!', 4, 1);