Ext.define('Обработки.ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей.Форма',
	{
	extend: 'Ext.window.Window',
	height: 424,width: 740,
	iconCls: 'bogus',
	title: 'Настройка обмена данными',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:399px;width:740px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Назад',
				},
				{
					text:'Далее',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:183px;top:0px;width:557px;height:399px;',
			height: 399,width: 557,
			items:
			[
				{
					title:'Главная',
					items:
					[
					]
				},
				{
					title:'ВозможностьПодключенияКоВторойИнформационнойБазе',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:161px;top:111px;width:390px;height:19px;',
			height: 19,width: 390,
			items:
			[
				{
					title:'ПодключениеФайловаяИБ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогИнформационнойБазыДляПодключения1',
			style: 'position:absolute;left:85px;top:0px;width:305px;height:19px;',
		},
					]
				},
				{
					title:'ПодключениеСервернаяИБ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяСервераИнформационнойБазыДляПодключения1',
			style: 'position:absolute;left:84px;top:0px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяИнформационнойБазыНаСервереДляПодключения1',
			style: 'position:absolute;left:269px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПользовательИнформационнойБазыДляПодключения1',
			style: 'position:absolute;left:246px;top:152px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольИнформационнойБазыДляПодключения1',
			style: 'position:absolute;left:431px;top:152px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ТестПодключения1',
			text: 'Проверить...',
			style: 'position:absolute;left:431px;top:189px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'СозданиеНовогоОбмена',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеИнформационнойБазыДляОбмена',
			style: 'position:absolute;left:28px;top:117px;width:413px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:141px;width:546px;height:253px;',
			height: 253,width: 546,
			items:
			[
				{
					title:'НастройкиОбменаПоОрганизации',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:61px;width:546px;height:192px;',
			height: 192,width: 546,
			items:
			[
				{
					title:'СоответствияМагазиновИСкладов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:532px;height:136px;',
			height: 136,width: 532,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'КодМагазина',
				},
				{
					text:'СкладМагазина',
				},
				{
					text:'Организация',
				},
				{
					text:'КассаМагазина',
				},
				{
					text:'КассаККММагазина',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:532px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ТипыЦен',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:532px;height:136px;',
			height: 136,width: 532,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТипЦеныНоменклатуры',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:532px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ВыгрузкаСебестоимости',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаВыгрузкиСебестоимости',
			style: 'position:absolute;left:232px;top:30px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодичностьПередачиСебестоимости',
			style: 'position:absolute;left:232px;top:54px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособВыгрузкиСебестоимости',
			style: 'position:absolute;left:232px;top:6px;width:191px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ПустаяСтраница',
				},
			]
		},
					]
				},
				{
					title:'ФильтрацияСправочников',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:178px;width:543px;height:215px;',
			height: 215,width: 543,
			items:
			[
				{
					title:'Организации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:159px;',
			height: 159,width: 529,
			columns:
			[
				{
					text:'Организация',
				},
			]
		},
					]
				},
				{
					title:'Номенклатура',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:159px;',
			height: 159,width: 529,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Контрагенты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:159px;',
			height: 159,width: 529,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Склады',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:159px;',
			height: 159,width: 529,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Кассы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:159px;',
			height: 159,width: 529,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ОтветныеПакетыВторойИнформационнойБазы',
					items:
					[
					]
				},
				{
					title:'РедактированиеСуществующегоОбмена',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаНастроекОбменаПервойИнформационнойБазы',
			style: 'position:absolute;left:32px;top:101px;width:452px;height:19px;',
		},
					]
				},
				{
					title:'ОсновныеПараметрыНастройкиОбменаДанными',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:13px;top:206px;width:539px;height:160px;',
			height: 160,width: 539,
			items:
			[
				{
					title:'Файловый',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогОбменаИнформацией',
			style: 'position:absolute;left:87px;top:0px;width:452px;height:19px;',
		},
					]
				},
				{
					title:'FTPОбмен',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'FTPАдресОбмена',
			style: 'position:absolute;left:87px;top:0px;width:278px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить',
			text: 'Проверить...',
			style: 'position:absolute;left:419px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПользовательFTPСоединения',
			style: 'position:absolute;left:87px;top:24px;width:278px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольFTPСоединения',
			style: 'position:absolute;left:419px;top:24px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПортFTPСоединения',
			style: 'position:absolute;left:419px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПользовательПроксиFTP',
			style: 'position:absolute;left:87px;top:139px;width:278px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольПроксиFTP',
			style: 'position:absolute;left:419px;top:139px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерверПроксиFTP',
			style: 'position:absolute;left:87px;top:115px;width:278px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПортПроксиFTP',
			style: 'position:absolute;left:419px;top:115px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПротоколПроксиFTP',
			style: 'position:absolute;left:87px;top:92px;width:111px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаксимальныйРазмерОтправляемогоПолучаемогоПакетаЧерезFTP1',
			style: 'position:absolute;left:302px;top:48px;width:95px;height:19px;',
		},
					]
				},
				{
					title:'ОбменЧерезCOM',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:49px;width:533px;height:19px;',
			height: 19,width: 533,
			items:
			[
				{
					title:'ПодключениеФайловаяИБ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:148px;top:0px;width:385px;height:19px;',
		},
					]
				},
				{
					title:'ПодключениеСервернаяИБ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяСервераИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:148px;top:0px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяИнформационнойБазыНаСервереДляПодключения',
			style: 'position:absolute;left:398px;top:0px;width:135px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПользовательИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:154px;top:98px;width:178px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:403px;top:98px;width:136px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ТестПодключения',
			text: 'Проверить...',
			style: 'position:absolute;left:403px;top:74px;width:136px;height:19px;',
		},
					]
				},
				{
					title:'ОбменЧерезПочту',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УчетнаяЗаписьПриемаОтправкиСообщений',
			style: 'position:absolute;left:100px;top:72px;width:304px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПочтовыйАдресПолучателя',
			style: 'position:absolute;left:100px;top:24px;width:304px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'ДополнительныеНастройкиОбменаДанными',
			text: 'Дополнительно ...',
			style: 'position:absolute;left:442px;top:375px;width:110px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:50px;width:210px;height:150px;',
			height: 150,width: 210,
			items:
			[
				{
					title:'СтраницаКаталог',
					items:
					[
					]
				},
				{
					title:'СтраницаFTP',
				},
				{
					title:'СтраницаПодключение',
				},
				{
					title:'СтраницаПочта',
				},
			]
		},
					]
				},
				{
					title:'НастройкиЗнакомстваИнформационныхБаз',
					items:
					[
		{
			xtype: 'button',
			name: 'ДополнитеьльныеНастройкиФоновогоЗнакомства',
			text: 'Дополнительно ...',
			style: 'position:absolute;left:427px;top:372px;width:122px;height:19px;',
		},
					]
				},
				{
					title:'ИтоговаяСтраницаЗавершенияОбмена',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СозданнаяНастройкаОбмена1',
			style: 'position:absolute;left:36px;top:228px;width:390px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Выполнить1',
			text: 'Выполнить обмен',
			style: 'position:absolute;left:430px;top:228px;width:122px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаНастроекОбменаПервойИнформационнойБазы1',
			style: 'position:absolute;left:36px;top:154px;width:516px;height:19px;',
		},
					]
				},
				{
					title:'ИтоговаяСтраницаЗавершенияОбменаCOM',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СозданнаяНастройкаОбмена',
			style: 'position:absolute;left:39px;top:73px;width:385px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Выполнить',
			text: 'Выполнить обмен',
			style: 'position:absolute;left:430px;top:73px;width:122px;height:19px;',
		},
					]
				},
				{
					title:'ПараметрыОбменаДокументами',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаВыгрузкиДокументов',
			style: 'position:absolute;left:282px;top:50px;width:100px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:120px;width:545px;height:273px;',
			height: 273,width: 545,
			items:
			[
				{
					title:'НастройкиВыгрузки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:531px;height:214px;',
			height: 214,width: 531,
			columns:
			[
				{
					text:'ЭтоНастройкаДляВыгрузки',
				},
				{
					text:'НаименованиеПравилаВыгрузки',
				},
				{
					text:'НастройкаВыгрузки',
				},
				{
					text:'ВыгружатьДанные',
				},
				{
					text:'ВыгружатьПоСсылке',
				},
				{
					text:'КодПравилаВыгрузки',
				},
				{
					text:'КодПравилаОбмена',
				},
				{
					text:'НастройкаНеПоддерживается',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:531px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'ИзменитьНастройку',
				},
			]
		},
					]
				},
				{
					title:'СопоставлениеОбъектов',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:531px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:35px;width:531px;height:212px;',
			height: 212,width: 531,
			columns:
			[
				{
					text:'ЭтоНастройкаДляВыгрузки',
				},
				{
					text:'НаименованиеПравилаОбмена',
				},
				{
					text:'ИмяНастройкиДляПользователя',
				},
				{
					text:'ОписаниеНастройкиДляПользователя',
				},
				{
					text:'ИмяНастройкиДляАлгоритма',
				},
				{
					text:'НастройкаНеПоддерживается',
				},
				{
					text:'ВариантПоискаНеПоддерживается',
				},
				{
					text:'КодПравилаОбмена',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрефиксДляЗагружаемыхДокументов',
			style: 'position:absolute;left:376px;top:73px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрефиксДляДокументовВТекущейИБ',
			style: 'position:absolute;left:376px;top:97px;width:64px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:399px;',
			height: 399,width: 181,
			items:
			[
				{
					title:'СтраницаНастройки',
					items:
					[
					]
				},
				{
					title:'СтраницаГотово',
				},
			]
		},
	]
});