(function(exports){


	exports.categories = [
		{
			name:	'labour',				//Arbeit und Beschäftigung
			colors:	['#438eba'],
			tags: 	[]
		},
		{
			name:	'sports',				//Bewegung und Sport
			colors:	['#999'],
			tags:	[]
		},
		{
			name:	'counseling',			//Beratung
			colors:	['#FA9A20'],
			tags: 	[]
		},
		{
			name:	'education',			//Bildung und Sprache
			colors:	['#65B2B7'],
			tags:	[],
		},
		{
			name:	'volunteer_work',		//Freiwilliges Engagement
			colors:	['#66B2FF'],
			tags: 	[]
		},
		{
			name:	'recreation',			//Freizeit
			colors:	['#999'],
			tags:	[]
		},
		{
			name:	'health',				//Gesundheit
			colors:	['#BC8BD8'],
			tags:	[]
		},
		{
			name:	'hospice',				//Hospiz
			colors:	['#D69255'],
			tags: 	[]
		},
		{
			name:	'arts',					//Kreativität und Kunst
			colors:	['#999'],
			tags: 	[]
		},
		{
			name:	'victim_support',		//Opferhilfe
			colors:	['#999'],
			tags: 	[]
		},
		{
			name:	'care',					//Pflege
			colors:	['#53C294'],
			tags: 	[]
		},
		{
			name:	'self_help',			//Selbsthilfe
			colors:	['#E25C56'],
			tags: 	[]
		},
		{
			name:	'neighborhood',			//Stadtteilarbeit und Nachbarschaft
			colors:	['#999'],
			tags: 	[]
		},
		{
			name:	'financial_counseling',	//Schuldner- und Sozialberatung
			colors:	['#999'],
			tags: 	[]
		},
		{
			name:	'addiction',			//Sucht
			colors:	['#999'],
			tags: 	[]
		},
		{
			name:	'offender_services',	//Straffälligenhilfe
			colors:	['#999'],
			tags: 	[]
		},
		{
			name:	'housing',				//Wohnen
			colors:	['#999'],
			tags: 	[]
		},
		{
			name:	'legal_counseling',		//Rechtliche Beratung
			colors:	['#9FC060'],
			tags: 	[]
		},		

	]

	exports.types = []

	exports.tags = {
		target_groups: [
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

		// languages: [
		// 	'albanian',
		// 	'amharic',
		// 	'aramaic',
		// 	'arabic',
		// 	'armenian',
		// 	'azerbaijani',
		// 	'bengali',
		// 	'bulgarian',
		// 	'chechen',
		// 	'chinese',
		// 	'creole',
		// 	'dari',
		// 	'dutch',
		// 	'english',
		// 	'farsi',
		// 	'french',
		// 	'greek',
		// 	'hebrew',
		// 	'hindu',
		// 	'hungarian',
		// 	'italian',
		// 	'japanese',
		// 	'kikuyu',
		// 	'korean',
		// 	'kurdish',
		// 	'laz',
		// 	'lithuanian',
		// 	'luo',
		// 	'macedonian',
		// 	'montenegrin',
		// 	'nepali',
		// 	'oromo',
		// 	'pashto',
		// 	'polish',
		// 	'portuguese',
		// 	'punjabi',
		// 	'romani',
		// 	'romanian',
		// 	'russian',
		// 	'slovene',
		// 	'serbian_croatian',
		// 	'spanish',
		// 	'suomi',
		// 	'swahili',
		// 	'tajiki',
		// 	'thai',
		// 	'tigrinya',
		// 	'turkish',
		// 	'turkmen',
		// 	'ukranian',
		// 	'urdu',
		// 	'uzbek',
		// 	'vietnamese',
		// 	'wolof',
		// ],

		accessibility:[				//zugänglich für ...
			'wheelchair',			//Rollstuhlgerecht
			'bathroom_accessible',	//Behindertengerechtes WC
			'physical_disability',	//körperliche Behinderung
			'mental_disability',	//Lernbehinderung / geistige Behinderung (??)
			'mental_disability_2',	//psychische (seelische) Behinderung
			'sight_impaired',		//Blindheit und Sehbeeinträchtigung
			'hearing_impaired',		//Gehörlosigkeit und Schwerhörigkeit
			'deafblind',			//Taubblindheit
			'speech_impairment'		//Sprachbehinderung
		],


		misc: [
			'counseling_center',		//Beratungsstelle
			'educational_center',		//Bildungszentrum
			'youth_facility',			//Jugendeinrichtung
			'kindergarden',				//Kindergarten
			'cultural_center',			//Kulturzentrum
			'multigenerational_house',	//Mehrgenerationenhaus
			'neighborhood_house',		//Nachbarschaftshaus
			'emergency_shelter',		//Notunterkunft
			'self_help_contact_point',	//Selbsthilfe-Kontaktstelle
			'senior_citizen_meeting',	//Seniorenbegegnungsstätte
			'district_center'			//Stadtteilzentrum
		]


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
