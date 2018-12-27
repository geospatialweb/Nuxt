CREATE EXTENSION postgis;

CREATE TABLE biosphere (
	id integer not null primary key,
	name varchar,
	description varchar,
	geom geometry
);

CREATE SEQUENCE biosphere_id_seq;
ALTER TABLE biosphere
ALTER COLUMN id
SET DEFAULT NEXTVAL('biosphere_id_seq');

INSERT into biosphere (name, description, geom) values ('FABR', 'Frontenac Arch Biosphere Reserve',
	ST_GeomFromText('POLYGON((-76.205278 44.297778, -75.903611 44.380833, -75.825278 44.430833, -75.809444 44.478611,
		-75.653333 44.599167, -75.676389 44.614722, -75.851389 44.648056, -76.086944 44.633611, -76.203889 44.660278,
		-76.331667 44.668611, -76.545278 44.773056, -76.674444 44.716944, -76.706389 44.504444, -76.880278 44.492222,
		-76.760556 44.326389, -76.425556 44.347778, -76.213611 44.483333, -76.205278 44.297778))'
	));

CREATE TABLE office (
	id integer not null primary key,
	name varchar,
	description varchar,
	geom geometry
);

CREATE SEQUENCE office_id_seq;
ALTER TABLE office
ALTER COLUMN id
SET DEFAULT NEXTVAL('office_id_seq');

INSERT into office (name, description, geom) values ('FABR Office', '19 Reynolds Road, Lansdowne, ON. Open Monday to Friday 8:30am - 4:30pm',
	ST_GeomFromText('POINT(-76.011422 44.384362)'));

CREATE TABLE places (
	id integer not null primary key,
	name varchar,
	description varchar,
	geom geometry
);

CREATE SEQUENCE places_id_seq;
ALTER TABLE places
ALTER COLUMN id
SET DEFAULT NEXTVAL('places_id_seq');

INSERT into places (name, description, geom) values ('Brockville', 'Known as the "City of the 1000 Islands" and Ontario''s first incorporated self-governing town in 1832. Lots of "old" money here! Interesting "underground railroad" history to explore...',
	ST_GeomFromText('POINT(-75.684201 44.589699)'));

INSERT into places (name, description, geom) values ('Gananoque', 'An awesome weekend getaway destination...',
	ST_GeomFromText('POINT(-76.162479 44.330009)'));

INSERT into places (name, description, geom) values ('Kingston', 'Home to Queen''s University, St. Lawrence College and Royal Military College. Only place in Canada where beer consumption actually goes DOWN in the summer with the students partying elsewhere... Indeed, quite a feat!',
	ST_GeomFromText('POINT(-76.494277 44.225560)'));

INSERT into places (name, description, geom) values ('Seeley''s Bay', 'Part of the Rideau Heritage Route on the Rideau Canal. Wonderful charm and facilities to enjoy during the summer months...',
	ST_GeomFromText('POINT(-76.233410 44.479690)'));

INSERT into places (name, description, geom) values ('Sharbot Lake', 'Located in the Land O'' Lakes Tourist Region, Sharbot Lake was once an important stop on the Kingston and Pembroke Railway. The rail bed now constitutes a multi-use section of the Trans-Canada Trail...',
	ST_GeomFromText('POINT(-76.687023 44.772732)'));

INSERT into places (name, description, geom) values ('Sydenham', 'The abandoned CPR/Grand Trunk Railway right-of-way is now part of the Trans-Canada Trail. Great ice cream parlor after another rewarding day hiking the Frontenac Challenge during the autumn months... Trousdale''s, Canada''s oldest general store, has been located here for five generations!',
	ST_GeomFromText('POINT(-76.596745 44.411096)'));

INSERT into places (name, description, geom) values ('Verona', 'A recreational paradise! Ideal place to visit, raise a family, or retire...',
	ST_GeomFromText('POINT(-76.693935 44.480988)'));

INSERT into places (name, description, geom) values ('Westport', 'About 1/3 of the way to Ottawa from Kingston on the winding Rideau Trail. Not quite as affluent as Westport, Connecticut...',
	ST_GeomFromText('POINT(-76.398313 44.675168)'));

INSERT into places (name, description, geom) values ('Marble Rock', 'I dearly want to hike this spectacular trail... someday...',
	ST_GeomFromText('POINT(-76.150647 44.393997)'));

INSERT into places (name, description, geom) values ('Holland', 'Sorry, wrong Holland. No cafes here serving up a pot and hashish menu... yet!',
	ST_GeomFromText('POINT(-75.947522 44.414892)'));

INSERT into places (name, description, geom) values ('Inverary', 'Check out the Inverary Golf and Country Club. Less frustrating than the links courses in Scotland...',
	ST_GeomFromText('POINT(-76.473035 44.388844)'));

INSERT into places (name, description, geom) values ('Hayes Corner', 'Have you ever wondered how places get their unique names? Place names (toponyms) have from the beginning of time been assigned to cultural and natural features on the landscape including cities, towns, rivers, lakes and islands. Place names are not just labels on maps and signs, but vital communication tools that reflect patterns of settlement, exploration, migration, heritage, culture and natural resources that may otherwise be overlooked by residents, visitors, and future generations...',
	ST_GeomFromText('POINT(-75.920904 44.592884)'));

INSERT into places (name, description, geom) values ('Bolingbroke', 'Bowling for Dollars!',
	ST_GeomFromText('POINT(-76.519139 44.759089)'));

INSERT into places (name, description, geom) values ('Bedford', 'Built solid on granite bedrock!',
	ST_GeomFromText('POINT(-76.565216 44.623057)'));

INSERT into places (name, description, geom) values ('Sand Bay Corner', 'Nothing better than the feeling of a sandy bottom and warm water!',
	ST_GeomFromText('POINT(-76.081310 44.460719)'));

INSERT into places (name, description, geom) values ('South Frontenac', 'You guessed it! Located just below the southern expanse of the majestic Frontenac Provincial Park in the heart of Frontenac County. Close to the Frontenac Challenge trailheads...',
	ST_GeomFromText('POINT(-76.516628 44.517936)'));

INSERT into places (name, description, geom) values ('Piccadilly', 'Escape the circus of living in the big city...',
	ST_GeomFromText('POINT(-76.690350 44.524039)'));

INSERT into places (name, description, geom) values ('Rockport', 'Close your eyes for a moment and you will pass right through town! "Must See" tourist venue with stunning scenery viewable from both land and water...',
	ST_GeomFromText('POINT(-75.936261 44.380454)'));

INSERT into places (name, description, geom) values ('Harrowsmith', 'Home to the magazine of the same name. Ahead of their time. Strong green, ecological, biodiversity and local sustainability roots. No, High Times magazine was not published here!',
	ST_GeomFromText('POINT(-76.665418 44.404445)'));

INSERT into places (name, description, geom) values ('Kingston Mills', 'Start of the historic Rideau Canal. The locks are where a tragic car drowning took place. First mass murder in the history of Kingston sadly...',
	ST_GeomFromText('POINT(-76.444675 44.292735)'));

INSERT into places (name, description, geom) values ('Thousand Islands Bridge', 'Absolutely magnificant view in all directions!',
	ST_GeomFromText('POINT(-75.982182 44.363591)'));

INSERT into places (name, description, geom) values ('Florida', 'Sorry, wrong Florida! But no worry of hurricanes here...',
	ST_GeomFromText('POINT(-76.681676 44.333757)'));

INSERT into places (name, description, geom) values ('Newboro', 'Founded during the construction of the Rideau Canal and hosts the annual Rideau Lakes Cup Dog Sled Races...',
	ST_GeomFromText('POINT(-76.318122 44.651617)'));

INSERT into places (name, description, geom) values ('Landon Bay', 'Tranquility and a sense of spiritual presence are experienced as one walks the trails and meadows. I would love to live here someday...',
	ST_GeomFromText('POINT(-76.064780 44.353725)'));

INSERT into places (name, description, geom) values ('Howe Island', 'TWO short ferry services connect to the mainland across the Bateau Channel at either end. Take your pick! Kingston to the west and Gananoque to the east...',
	ST_GeomFromText('POINT(-76.263503 44.277575)'));

INSERT into places (name, description, geom) values ('Wolfe Island', 'Lots of steady wind for the turbines! Accessible by ferry from Kingston and Cape Vincent, NY. Largest of the Thousand Islands. Venerable Don Cherry has a summer cottage here...',
	ST_GeomFromText('POINT(-76.354505 44.174915)'));

INSERT into places (name, description, geom) values ('Missouri', 'The "SHOW ME" town!',
	ST_GeomFromText('POINT(-76.477944 44.418963)'));

INSERT into places (name, description, geom) values ('Perth Road', 'Small town on the road to Perth!',
	ST_GeomFromText('POINT(-76.491977 44.466287)'));

INSERT into places (name, description, geom) values ('Thousand Islands', 'Don Ross (FABR Executive Director) published an informative book called "Discovering the Thousand Islands". Great read with lots of pics! Don also owns cool antique mahogany boats...',
	ST_GeomFromText('POINT(-75.979880 44.354685)'));

INSERT into places (name, description, geom) values ('Athens', 'Famous for a series of large outdoor murals depicting historical local life, painted on the sides of various buildings. Delicious Souflaki and Tzatziki sauce!',
	ST_GeomFromText('POINT(-75.952157 44.626067)'));

INSERT into places (name, description, geom) values ('Crosby', 'Sorry, not the hometown of "Sid the Kid"...',
	ST_GeomFromText('POINT(-76.256726 44.654463)'));

INSERT into places (name, description, geom) values ('Mallorytown', 'Local area is a bird watching haven! Duracell batteries in high demand always...',
	ST_GeomFromText('POINT(-75.879321 44.477661)'));

INSERT into places (name, description, geom) values ('Grenadier Island', 'The Grenadier Island Country Club, founded in 1927, is one of the oldest island golf courses in Canada!',
	ST_GeomFromText('POINT(-75.873316 44.406851)'));

INSERT into places (name, description, geom) values ('Battersea', 'Located on the southern shore of Loughborough Lake. Dan Ackroyd has a cottage on this lake famous for its many small islands and natural beauty...',
	ST_GeomFromText('POINT(-76.383998 44.432012)'));

INSERT into places (name, description, geom) values ('Kingston Penitentiary', 'KP officially opened on June 1, 1835. Closed September 30, 2013. Was one of the oldest prisons in continuous use in the world and is designated a National Historic Site. Kingston Pen is one of nine prisons in the Kingston area...',
	ST_GeomFromText('POINT(-76.513459 44.219776)'));

INSERT into places (name, description, geom) values ('Charleston', 'Great place to go dancing and reminisce along the shores of Charleston Lake...',
	ST_GeomFromText('POINT(-75.997920 44.575354)'));

INSERT into places (name, description, geom) values ('California', 'Sorry, wrong California! But no traffic conjestion or air pollution here...',
	ST_GeomFromText('POINT(-76.264056 44.543202)'));

INSERT into places (name, description, geom) values ('Lansdowne', 'Quaint community to live within the Biosphere...',
	ST_GeomFromText('POINT(-76.018099 44.405991)'));

INSERT into places (name, description, geom) values ('Lake Opinicon', 'Fisherman''s earthly Heaven and heavenly Earth!',
	ST_GeomFromText('POINT(-76.370520 44.533378)'));

INSERT into places (name, description, geom) values ('Little Brockville', 'No Brockville Jail here!',
	ST_GeomFromText('POINT(-76.143528 44.583633)'));

INSERT into places (name, description, geom) values ('Glendower', 'About half way between Piccadilly and Bedford for a restful sleepover...',
	ST_GeomFromText('POINT(-76.630209 44.564217)'));

INSERT into places (name, description, geom) values ('Black Rapids', 'One of the many locks in the Rideau Canal system. A dam was built adjacent to the lock to raise the water level by 6 feet (1.8m). When the dam was completed, it was soon found that with the river flowing over it during spring flood, erosion of the bedrock on the downstream side of the dam threatened to undermine it.  Sounds to me like they could have used a GIS!',
	ST_GeomFromText('POINT(-76.089451 44.509962)'));

INSERT into places (name, description, geom) values ('Bedford Mills', 'Mill town (much like the others in the surrounding area) supplied lumber for the construction of the Rideau Canal...',
	ST_GeomFromText('POINT(-76.40476 44.602361)'));

INSERT into places (name, description, geom) values ('Front of Yonge', 'Sorry, the Hockey Hall of Fame is in downtown Toronto at Front and Yonge! Front of Yonge is a local Township...',
	ST_GeomFromText('POINT(-75.877363 44.514345)'));

INSERT into places (name, description, geom) values ('Napanee', 'Napanee is the home of now famous "La Pizzeria", made famous by Avril Lavinge''s declaration that her "favourite pizza" is served there...',
	ST_GeomFromText('POINT(-76.951717 44.249381)'));

CREATE TABLE trails (
	id integer not null primary key,
	name varchar,
	description varchar,
	lng numeric(9,6) not null,
	lat numeric(9,6) not null,
	geom geometry
);

CREATE SEQUENCE trails_id_seq;
ALTER TABLE trails
ALTER COLUMN id
SET DEFAULT NEXTVAL('trails_id_seq');

INSERT into trails (name, description, lng, lat, geom) values ('Blue Mountain Trail', 'Moderate 5km. Steep terrain. Awesome romantic views!',
	-76.025152, 44.494558,
	ST_GeomFromText('LINESTRING(-76.025103 44.494547, -76.023807 44.495356, -76.021906 44.495812, -76.021418 44.496309,
		-76.020480 44.496886, -76.019886 44.497205, -76.018982 44.497527, -76.018538 44.498220, -76.017709 44.499119,
		-76.016240 44.500345, -76.017246 44.498910, -76.017573 44.497293, -76.017327 44.496135, -76.017851 44.495878,
		-76.018333 44.495827, -76.019245 44.495388, -76.019697 44.494939, -76.019976 44.494237, -76.020314 44.493537,
		-76.020410 44.492776, -76.020743 44.491858, -76.021455 44.491258, -76.022319 44.490643, -76.023122 44.490097,
		-76.024273 44.490800, -76.025128 44.491289, -76.025952 44.491713, -76.025625 44.492702, -76.025372 44.493681,
		-76.025120 44.494417)'
	));

INSERT into trails (name, description, lng, lat, geom) values ('Charleston Lake East Trail', 'Moderate 10km. Real Canadian Shield wilderness!',
	-76.043048, 44.499439,
	ST_GeomFromText('LINESTRING(-76.043160 44.499436, -76.039073 44.503404, -76.034741 44.504182, -76.032240 44.506241,
		-76.030126 44.508727, -76.028083 44.510510, -76.026744 44.512418, -76.023116 44.513297, -76.020791 44.514050,
		-76.016952 44.513571, -76.017694 44.510281, -76.021288 44.507294, -76.023754 44.503954, -76.025341 44.500639,
		-76.030447 44.499887, -76.035835 44.499360, -76.042948 44.499386)'
	));

INSERT into trails (name, description, lng, lat, geom) values ('Charleston Lake West Trail', 'Difficult 15km. Real Canadian Shield wilderness!',
	-76.064538, 44.500868,
	ST_GeomFromText('LINESTRING(-76.064479 44.500614, -76.051281 44.505879, -76.050239 44.507860, -76.044681 44.509346,
		-76.043465 44.512566, -76.041814 44.515662, -76.039121 44.520121, -76.039033 44.525323, -76.036514 44.526437,
		-76.035731 44.528357, -76.030953 44.529099, -76.029736 44.532939, -76.031907 44.535479, -76.036251 44.535170,
		-76.039552 44.533188, -76.042246 44.530402, -76.044158 44.527181, -76.045896 44.520679, -76.049891 44.517954,
		-76.051454 44.514858, -76.054060 44.512071, -76.053712 44.509470, -76.059270 44.506807, -76.062743 44.504144,
		-76.064653 44.500985)'
	));

INSERT into trails (name, description, lng, lat, geom) values ('Lemoine Point Conservation Trail', 'Easy 2km. Great view of Collins Bay. Be wary of low flying aircraft!',
	-76.606428, 44.216086,
	ST_GeomFromText('LINESTRING(-76.606740 44.222996, -76.605959 44.228712, -76.608216 44.232347, -76.611251 44.230028,
		-76.613479 44.227908, -76.615457 44.226023, -76.616498 44.223725, -76.616727 44.220896, -76.614366 44.223047,
		-76.611669 44.224827, -76.611084 44.227045, -76.609461 44.227358, -76.608163 44.226449, -76.607565 44.224587,
		-76.606740 44.222996, -76.606501 44.220816, -76.606499 44.218526, -76.606427 44.215839)'
	));

INSERT into trails (name, description, lng, lat, geom) values ('Lyn Valley Conservation Trail', 'Easy - Moderate 5km. Bring a camera or a paintbrush and canvas!',
	-75.781781, 44.572347,
	ST_GeomFromText('LINESTRING(-75.781789 44.572240, -75.780664 44.570165, -75.780747 44.567740, -75.783588 44.566888,
		-75.784948 44.564163, -75.785454 44.562245, -75.788087 44.560281, -75.788097 44.558260, -75.790655 44.557054,
		-75.792012 44.554734, -75.792236 44.552410, -75.793449 44.550645, -75.795729 44.548125, -75.794385 44.547466,
		-75.792610 44.548118, -75.790478 44.549325, -75.787636 44.550682, -75.786071 44.551941, -75.784716 44.553503,
		-75.784497 44.554866, -75.783427 44.556329, -75.782852 44.557792, -75.783623 44.559613, -75.785034 44.561082,
		-75.782688 44.562440, -75.781259 44.564659, -75.779265 44.566321, -75.777768 44.567834, -75.776630 44.568538,
		-75.775914 44.569850, -75.774349 44.570756, -75.772997 44.571561, -75.773486 44.573129, -75.774474 44.574041,
		-75.774894 44.575103, -75.777025 44.574603, -75.776890 44.573188, -75.777680 44.571168, -75.780022 44.570972,
		-75.781789 44.572240)'
	));

INSERT into trails (name, description, lng, lat, geom) values ('Mac Johnson Wildlife Trail', 'Easy 4km. Go geocaching with the kids!',
	-75.723585, 44.602382,
	ST_GeomFromText('LINESTRING(-75.723592 44.602265, -75.728281 44.600819, -75.730862 44.600654, -75.734641 44.600321,
		-75.735836 44.599255, -75.734574 44.598311, -75.735705 44.596778, -75.737436 44.596144, -75.738858 44.594193,
		-75.738787 44.592540, -75.737349 44.591310, -75.735983 44.592236, -75.734911 44.592487, -75.734019 44.593120,
		-75.731932 44.593580, -75.731873 44.594556, -75.730261 44.595189, -75.728409 44.595227, -75.728228 44.596162,
		-75.727330 44.596543, -75.727568 44.597396, -75.727446 44.598505, -75.726905 44.599145, -75.725705 44.599484,
		-75.724147 44.599394, -75.722471 44.598919, -75.720794 44.598829, -75.720189 44.599469, -75.720181 44.600453,
		-75.721199 44.600756, -75.721974 44.601574, -75.723353 44.602007)'
	));

INSERT into trails (name, description, lng, lat, geom) values ('Seeley''s Bay Fitness Trail', 'Light - Moderate. 4km. 14 fitness exercise stations. No fitness club membership necessary!',
	-76.195031, 44.486368,
	ST_GeomFromText('LINESTRING(-76.194962 44.486054, -76.197083 44.484861, -76.198219 44.483724, -76.200571 44.483992,
		-76.201939 44.485072, -76.202019 44.486479, -76.203083 44.487344, -76.205967 44.487449, -76.206122 44.488747,
		-76.204835 44.489723, -76.205065 44.490589, -76.207039 44.490965, -76.208937 44.491071, -76.209775 44.492099,
		-76.209701 44.492911, -76.209325 44.493994, -76.208948 44.495077, -76.207888 44.495728, -76.206443 44.495134,
		-76.205455 44.494432, -76.204470 44.495028, -76.203865 44.495895, -76.202576 44.496493, -76.200602 44.496386,
		-76.199613 44.495575, -76.198247 44.495793, -76.196729 44.496174, -76.195134 44.495580, -76.195131 44.494281,
		-76.194447 44.493632, -76.193156 44.493525, -76.192091 44.492552, -76.191861 44.491307, -76.192769 44.489899,
		-76.194285 44.488869, -76.193752 44.488057, -76.195191 44.486919, -76.195114 44.486378)'
	));
