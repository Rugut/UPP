Ext.define('Документы.СправкаПоНДФЛВНалоговыйОрган.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 623,width: 805,
	iconCls: 'bogus',
	title: 'Справки 2-НДФЛ для передачи в ИФНС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:598px;width:805px;height:25px;',
			items:
			[
				{
					text:'НаДискетку',
				},
				{
					text:'ОК',
				},
				{
					text:'Файл',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительПечать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:805px;height:25px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'РедактироватьКодНомер',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:789px;height:43px;',
			height: 43,width: 789,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:789px;height:35px;',
			height: 35,width: 789,
			items:
			[
				{
					title:'Страница1',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:76px;width:789px;height:513px;',
			height: 513,width: 789,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:548px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:648px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:25px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:548px;top:25px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:106px;top:494px;width:683px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:123px;width:789px;height:24px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеЗаполнить',
				},
				{
					text:'Действие4',
				},
				{
					text:'ДействиеПронумеровать',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительПечать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:147px;width:254px;height:292px;',
			height: 292,width: 254,
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:106px;top:0px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:405px;top:445px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьПодписавшегоЛица',
			style: 'position:absolute;left:405px;top:470px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторФайла',
			style: 'position:absolute;left:106px;top:100px;width:662px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКАТО',
			style: 'position:absolute;left:106px;top:50px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГлавныйБухгалтер',
			style: 'position:absolute;left:106px;top:445px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СправкуПодписал',
			style: 'position:absolute;left:106px;top:470px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:262px;top:147px;width:527px;height:292px;',
			height: 292,width: 527,
			items:
			[
				{
					title:'Разделы3_5',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:28px;width:326px;height:125px;',
			height: 125,width: 326,
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
			style: 'position:absolute;left:341px;top:28px;width:178px;height:58px;',
			height: 58,width: 178,
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
			style: 'position:absolute;left:439px;top:109px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерУведомления',
			style: 'position:absolute;left:356px;top:109px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодНалоговогоОрганаУведомления',
			style: 'position:absolute;left:408px;top:134px;width:60px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеОДоходах',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:245px;width:82px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:156px;width:513px;height:87px;',
			height: 87,width: 513,
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
			style: 'position:absolute;left:245px;top:24px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Удержано',
			style: 'position:absolute;left:245px;top:46px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Перечислено',
			style: 'position:absolute;left:245px;top:68px;width:60px;height:19px;',
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
			style: 'position:absolute;left:68px;top:46px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Задолженность',
			style: 'position:absolute;left:413px;top:46px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИзлишнеУдержано',
			style: 'position:absolute;left:413px;top:24px;width:60px;height:19px;',
		},
					]
				},
				{
					title:'Страница2011',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:63px;height:87px;',
			height: 87,width: 63,
			columns:
			[
				{
					text:'Ставка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:363px;top:8px;width:150px;height:57px;',
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
			name: 'ИзлишнеУдержано1',
			style: 'position:absolute;left:90px;top:16px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Перечислено1',
			style: 'position:absolute;left:90px;top:38px;width:60px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:226px;top:46px;width:132px;height:22px;',
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
			name: 'ОбщаяСуммаДохода1',
			style: 'position:absolute;left:137px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОблагаемаяСуммаДохода1',
			style: 'position:absolute;left:136px;top:46px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Задолженность1',
			style: 'position:absolute;left:298px;top:68px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исчислено1',
			style: 'position:absolute;left:298px;top:24px;width:60px;height:19px;',
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
			style: 'position:absolute;left:59px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:217px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:399px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРФВФорме',
			style: 'position:absolute;left:94px;top:106px;width:425px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:94px;top:188px;width:425px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:94px;top:213px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:252px;top:213px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЗарубежомВФорме',
			style: 'position:absolute;left:160px;top:131px;width:359px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Гражданство',
			style: 'position:absolute;left:94px;top:56px;width:425px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:94px;top:31px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:252px;top:31px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатусНалогоплательщика',
			style: 'position:absolute;left:94px;top:81px;width:425px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:245px;width:82px;height:21px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОснованиеДляПредставленияСправок',
			style: 'position:absolute;left:548px;top:50px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИФНС',
			style: 'position:absolute;left:372px;top:50px;width:60px;height:19px;',
		},
					]
				},
			]
		},
	]
});