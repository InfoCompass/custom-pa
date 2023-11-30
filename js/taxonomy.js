(function(exports){


	exports.categories = [
		{
			name:	'health',				//Gesundheit
			colors:	['#B32A67'],
			tags:	[]
		},
		{
			name:	'counseling',			//Beratung
			colors:	['#6b4fad'],
			tags: 	[
						'financial_counseling',	//Schuldner- und Sozialberatung
						'legal_counseling',		//Rechtliche Beratung						
					]
		},
		{
			name:	'sports',				//Bewegung und Sport
			colors:	['#4fa8e0'],
			tags:	[]
		},
		{
			name:	'education',			//Bildung und Sprache
			colors:	['#9d7be2'],
			tags:	[],
		},
		{
			name:	'volunteer_work',		//Freiwilliges Engagement
			colors:	['#f59c00'],
			tags: 	[]
		},
		{
			name:	'addiction',			//Sucht
			colors:	['#60b2b8'],
			tags: 	[]
		},
		{
			name:	'labour',				//Arbeit und Beschäftigung
			colors:	['#fbc100'],
			tags: 	[]
		},
		{
			name:	'neighborhood',			//Stadtteilarbeit und Nachbarschaft
			colors:	['#71904c'],
			tags: 	[]
		},
		{
			name:	'arts',					//Kreativität und Kunst
			colors:	['#dd535c'],
			tags: 	[]
		},
		{
			name:	'victim_support',		//Opferhilfe
			colors:	['#40b657'],
			tags: 	[]
		},
		{
			name:	'care',					//Pflege
			colors:	['#00adc5'],
			tags: 	[]
		},
		{
			name:	'self_help',			//Selbsthilfe
			colors:	['#49b3ff'],
			tags: 	[]
		},
		{
			name:	'housing',				//Wohnen
			colors:	['#e66d00'],
			tags: 	[]
		},
		{
			name:	'recreation',			//Freizeit
			colors:	['#ed74c2'],
			tags:	[]
		},

		{
			name:	'hospice',				//Hospiz
			colors:	['#2c8471'],
			tags: 	[]
		},

		{
			name:	'kindergarden',			//Kinderbetreuung
			colors:	['#f5548a'],
			tags:	[]
		},

		{
			name:	'offender_services',	//Straffälligenhilfe
			colors:	['#7a88dc'],
			tags:	[]
		},

		{
			name:	'lobby',				//Interessenvertretung
			colors:	['#03D342'],
			tags:	[]
		}


	]

	exports.types = [
		{
			name:		'location',
			colors:		['#015ca9', '#015ca9'],
		},		
		{
			name:		'service',
			colors:		['#888', '#888'],
		}		
	]


	exports.tags = {

		target_groups: [
			'professionals',			//Fachkräfte
			'senior_citizens',			//Ältere Menschen
			'families',					//Familien
			'women',					//Frauen
			'young',					//Kinder und Jugendliche
			'queer',					//Queere Menschen
			'men',						//Männer
			'disability_background',	//Menschen mit Behinderung
			'refugee_background',		//Menschen mit Fluchtgeschichte
			'migration_background',		//Menschen mit Migrationsgeschichte
			'houseless'					//Wohnungs-und obdachlose Menschen
		],	
		districts: [
			'mitte',
			'friedrichshain_kreuzberg',
			'pankow',
			'charlottenburg_wilmersdorf',
			'spandau',
			'steglitz_zehlendorf',
			'tempelhof_schoeneberg',
			'neukoelln',
			'treptow_koepenik',
			'marzahn_hellersdorf',
			'lichtenberg',
			'reinickendorf'
		],

		languages: [
			'albanian',
			'amharic',
			'aramaic',
			'arabic',
			'armenian',
			'azerbaijani',
			'bengali',
			'bulgarian',
			'chechen',
			'chinese',
			'creole',
			'dari',
			'dutch',
			'english',
			'farsi',
			'french',
			'greek',
			'german',
			'german_sign_langauge',
			'georgian',
			'yoruba',
			'indonesian',
			'hebrew',
			'hindu',
			'hungarian',
			'italian',
			'japanese',
			'kikuyu',
			'korean',
			'kurdish',
			'laz',
			'lithuanian',
			'luo',
			'macedonian',
			'montenegrin',
			'nepali',
			'norwegian',
			'oromo',
			'pashto',
			'polish',
			'portuguese',
			'punjabi',
			'romani',
			'romanian',
			'russian',
			'slovene',
			'serbian_croatian',
			'spanish',
			'suomi',
			'swahili',
			'tajiki',
			'thai',
			'tigrinya',
			'turkish',
			'turkmen',
			'ukranian',
			'urdu',
			'uzbek',
			'vietnamese',
			'wolof',
		],

		accessibility:[				
			'wheelchair',				//Rollstuhlgerecht
			'bathroom_accessible',		//Behindertengerechtes WC
			'physical_disability',		//körperliche Behinderung
			'mental_disability',		//Lernbehinderung / geistige Behinderung (??)
			'mental_disability_2',		//psychische (seelische) Behinderung
			'sight_impaired',			//Blindheit und Sehbeeinträchtigung
			'hearing_impaired',			//Gehörlosigkeit und Schwerhörigkeit
			'deafblind',				//Taubblindheit
			'speech_impairment'			//Sprachbehinderung
		],


		institution_type: [
			'daycare_children',			//Kindertagesstätte
			'workshop_disabilities',	//Werkstatt für Menschen mit Behinderung
			'daycare',					//Tagesstätte
			'counseling_center',		//Beratungsstelle
			'educational_center',		//Bildungszentrum
			'family_center',			//Familienzentrum
			'youth_facility',			//Jugendeinrichtung			
			'cultural_center',			//Kulturzentrum
			'multigenerational_house',	//Mehrgenerationenhaus
			'neighborhood_house',		//Nachbarschaftshaus
			'emergency_shelter',		//Notunterkunft
			'self_help_contact_point',	//Selbsthilfe-Kontaktstelle
			'senior_citizen_meeting',	//Seniorenbegegnungsstätte
			'district_center',			//Stadtteilzentrum
			'meeting_center',			//Begegnungszentrum
			'assisted_living',			//Betreutes Wohnen
			'retirement_home',			//Seniorenheim
			'nursing_home',				//Pflegeheim
			'interpreting_service',		//Dolmetscherdienst
			'contact_point_ce'			//Kontaktstelle PflegeEngagement
		],

		service_type: [
			'group', 					//Gruppenangebot
			'in_person', 				//Persönlich
			'online',					//Online
			'by_phone'					//Telefonisch
		]

		// service_times: [
		// 	'morning',					//Vormittags
		// 	'afternoon',				//Nachmittags
		// 	'evening',					//Abends
		// 	'weekend',					//Wochenende
		// 	'daily',					//Täglich
		// 	'weekly',					//Wöchentlich
		// 	'monthly',					//Monatlich
		// 	'by_arrangement'			//Nach Absprache
		// ]


		// sponsors:[
		// 	'senias',
		// 	'senias_partin',
		// 	'senias_akrom',
		// 	'senias_intlot',
		// 	'senias_msd',
		// 	'senias_mifl',
		// 	'senbjf',
		// 	'jobcenter',
		// 	'bamf_mbe',
		// 	'bamf_jmd',
		// 	'amif',
		// 	'iq',
		// 	'senjustva',
		// 	'sengpg',
		// 	'ba_charlottenburg_wilmersdorf',
		// 	'ba_friedrichshain_kreuzberg',
		// 	'ba_lichtenberg',
		// 	'ba_marzahn_hellersdorf',
		// 	'ba_mitte',
		// 	'ba_neukölln',
		// 	'ba_pankow',
		// 	'ba_reinickendorf',
		// 	'ba_spandau',
		// 	'ba_steglitz_zehlendorf',
		// 	'ba_tempelhof_schoeneberg',
		// 	'ba_treptow_koepenik',
		// 	'bmfsfj',
		// 	'bmas',
		// 	'bmi',
		// 	'bzga',
		// 	'ehap',
		// 	'esf',
		// 	'lotto',
		// 	'aktion_mensch'
		// ]
	}


}(
	('undefined' !== typeof exports) 
	? exports
	: (this['ic'] = this['ic'] || {})['taxonomy'] = (this['ic']['taxonomy'] || {})
))
