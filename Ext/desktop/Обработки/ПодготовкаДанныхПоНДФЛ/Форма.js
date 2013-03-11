Ext.define('Обработки.ПодготовкаДанныхПоНДФЛ.Форма',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 1000,
	iconCls: 'bogus',
	title: 'Подготовка данных по НДФЛ для передачи в налоговые органы',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:287px;top:8px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСформировать',
			text: 'Сформировать справки',
			style: 'position:absolute;left:8px;top:8px;width:192px;height:34px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:69px;width:365px;height:24px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Добавить',
				},
				{
					text:'ДействиеОбновить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПометитьНаУдаление',
				},
				{
					text:'ПринятоВИФНС',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:93px;width:365px;height:131px;',
			height: 131,width: 365,
			columns:
			[
				{
					text:'Справка',
				},
				{
					text:'ОбщаяСуммаДохода',
				},
				{
					text:'НалогаИсчислено',
				},
				{
					text:'НалогаУдержано',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:381px;top:69px;width:611px;height:155px;',
			height: 155,width: 611,
			items:
			[
				{
					title:'СтраницаДанных',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСоставления',
			style: 'position:absolute;left:112px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить',
			text: 'Проверить',
			style: 'position:absolute;left:503px;top:58px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Печать',
			text: 'Печать',
			style: 'position:absolute;left:503px;top:84px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПоказатьФайл',
			text: 'Показать файл',
			style: 'position:absolute;left:503px;top:109px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'НаДиск',
			text: 'Файл на диск',
			style: 'position:absolute;left:503px;top:134px;width:108px;height:21px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКАТО',
			style: 'position:absolute;left:331px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайла',
			style: 'position:absolute;left:331px;top:32px;width:280px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:330px;top:60px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОснованиеДляПредставленияСправок',
			style: 'position:absolute;left:112px;top:60px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:330px;top:86px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьПодписавшегоЛица',
			style: 'position:absolute;left:330px;top:111px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГлавныйБухгалтер',
			style: 'position:absolute;left:112px;top:86px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СправкуПодписал',
			style: 'position:absolute;left:112px;top:111px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИФНС',
			style: 'position:absolute;left:112px;top:32px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'ПустаяСтраница',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:251px;width:984px;height:292px;',
			height: 292,width: 984,
			items:
			[
				{
					title:'ДанныеФизлица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:349px;height:268px;',
			height: 268,width: 349,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'НомерСправки',
				},
				{
					text:'Ставка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:349px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Пронумеровать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Перенести',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:358px;top:0px;width:626px;height:292px;',
			height: 292,width: 626,
			items:
			[
				{
					title:'Разделы3_5',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:293px;height:138px;',
			height: 138,width: 293,
			columns:
			[
				{
					text:'Месяц',
				},
				{
					text:'КодДохода',
				},
				{
					text:'СуммаДохода',
				},
				{
					text:'КодВычета',
				},
				{
					text:'СуммаВычета',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:309px;top:23px;width:309px;height:91px;',
			height: 91,width: 309,
			columns:
			[
				{
					text:'КодВычета',
				},
				{
					text:'СуммаВычета',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУведомления',
			style: 'position:absolute;left:407px;top:142px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерУведомления',
			style: 'position:absolute;left:324px;top:142px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодНалоговогоОрганаУведомления',
			style: 'position:absolute;left:558px;top:142px;width:60px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:166px;width:612px;height:100px;',
			height: 100,width: 612,
			items:
			[
				{
					title:'Страница2010',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исчислено',
			style: 'position:absolute;left:249px;top:24px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Удержано',
			style: 'position:absolute;left:249px;top:48px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Перечислено',
			style: 'position:absolute;left:435px;top:48px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбщаяСуммаДохода',
			style: 'position:absolute;left:68px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОблагаемаяСуммаДохода',
			style: 'position:absolute;left:68px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Задолженность',
			style: 'position:absolute;left:249px;top:72px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИзлишнеУдержано',
			style: 'position:absolute;left:435px;top:24px;width:72px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеОДоходах',
			text: 'Обновить',
			style: 'position:absolute;left:504px;top:79px;width:108px;height:21px;',
		},
					]
				},
				{
					title:'Страница2011',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:70px;height:91px;',
			height: 91,width: 70,
			columns:
			[
				{
					text:'Ставка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:389px;top:9px;width:150px;height:57px;',
			height: 57,width: 150,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Перечислено1',
			style: 'position:absolute;left:90px;top:38px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИзлишнеУдержано1',
			style: 'position:absolute;left:90px;top:16px;width:60px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:247px;top:47px;width:132px;height:22px;',
			height: 22,width: 132,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Удержано1',
			style: 'position:absolute;left:72px;top:0px;width:60px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Задолженность1',
			style: 'position:absolute;left:319px;top:70px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбщаяСуммаДохода1',
			style: 'position:absolute;left:148px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОблагаемаяСуммаДохода1',
			style: 'position:absolute;left:148px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исчислено1',
			style: 'position:absolute;left:319px;top:24px;width:60px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеОДоходах1',
			text: 'Обновить',
			style: 'position:absolute;left:504px;top:79px;width:108px;height:21px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел2',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:62px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:225px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:415px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРФВФорме',
			style: 'position:absolute;left:94px;top:81px;width:524px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:94px;top:156px;width:251px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:94px;top:181px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:245px;top:181px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЗарубежомВФорме',
			style: 'position:absolute;left:160px;top:106px;width:458px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Гражданство',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:94px;top:31px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:225px;top:31px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатусНалогоплательщика',
			style: 'position:absolute;left:398px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:510px;top:245px;width:108px;height:21px;',
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
		{
			xtype: 'button',
			name: 'КнопкаОК2',
			text: 'ОК',
			style: 'position:absolute;left:931px;top:551px;width:36px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Справка2',
			text: '',
			style: 'position:absolute;left:969px;top:551px;width:23px;height:21px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:624px;top:8px;width:80px;height:19px;',
		},
	]
});