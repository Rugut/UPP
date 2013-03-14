Ext.define('Документы.СчетФактураПолученный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:792px;height:489px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Счет-фактура полученный',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:32px;width:75px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:198px;top:32px;width:16px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:437px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:116px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:216px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:437px;width:686px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:792px;height:25px;',
			items:
			[
				{
					text:'Открыть актуальный электронный документ',
				},
				{
					text:'Перезаполнить данными из электронного документа',
				},
				'-',
				{
					text:'Список электронных документов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:464px;width:792px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Список',
			style: 'position:absolute;left:696px;top:152px;width:59px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:413px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:413px;width:686px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:175px;width:776px;height:143px;',
			height: 143,width: 776,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Одно основание',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:76px;top:0px;width:417px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОснование',
			text: 'Основание:
',
			style: 'position:absolute;left:0px;top:0px;width:73px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:41px;width:776px;height:97px;',
			height: 97,width: 776,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Описание возможностей',
				},
				{
					title:'Данные по авансу',
					items:
					[
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьДокументыОснования',
			text: 'Для полученных счетов-фактур можно указать несколько документов-оснований (флаг «Список»), если поступление от поставщика по одному счету-фактуре отражено разными документами ',
			style: 'position:absolute;left:6px;top:6px;width:481px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС',
			text: 'Ставка НДС:',
			style: 'position:absolute;left:206px;top:32px;width:66px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:276px;top:32px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДС',
			text: 'Сумма НДС:',
			style: 'position:absolute;left:0px;top:57px;width:66px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДС',
			style: 'position:absolute;left:79px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаСНДС',
			text: 'Сумма с НДС:',
			style: 'position:absolute;left:0px;top:32px;width:75px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаСНДС',
			style: 'position:absolute;left:79px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Список',
			style: 'position:absolute;left:434px;top:4px;width:59px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУвеличение',
			text: 'Увеличение:',
			style: 'position:absolute;left:0px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Увеличение',
			style: 'position:absolute;left:79px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНДСУвеличение',
			text: 'НДС (в т.ч.):',
			style: 'position:absolute;left:185px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НДСУвеличение',
			style: 'position:absolute;left:276px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУменьшение',
			text: 'Уменьшение:',
			style: 'position:absolute;left:0px;top:58px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Уменьшение',
			style: 'position:absolute;left:79px;top:58px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНДСУменьшение',
			text: 'НДС (в т.ч.):',
			style: 'position:absolute;left:185px;top:58px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НДСУменьшение',
			style: 'position:absolute;left:276px;top:58px;width:92px;height:19px;',
		},
					]
				},
				{
					title:'Данные по авансу несколько',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Список',
			style: 'position:absolute;left:434px;top:6px;width:59px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:30px;width:776px;height:67px;',
			height: 67,width: 776,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сумма с НДС',
					width:'120',
				},
				{
					text:'% НДС',
					width:'80',
				},
				{
					text:'Сумма НДС',
					width:'120',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Поступление не подлежит налогообложению (освобождается от налогообложения) ',
			style: 'position:absolute;left:0px;top:23px;width:486px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Бланк строгой отчетности',
			style: 'position:absolute;left:491px;top:23px;width:150px;height:15px;',
		},
					]
				},
				{
					title:'Несколько оснований',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:776px;height:119px;',
			height: 119,width: 776,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Документ - основание для выписки счета-фактуры',
					width:'313',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Поступление не подлежит налогообложению (освобождается от налогообложения) ',
			style: 'position:absolute;left:0px;top:122px;width:478px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:317px;width:776px;height:67px;',
			height: 67,width: 776,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница 1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКодВидаОперации',
			text: 'Код вида операции:',
			style: 'position:absolute;left:0px;top:19px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВидаОперации',
			style: 'position:absolute;left:106px;top:19px;width:50px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодСпособаПолучения',
			text: 'Способ получения:',
			style: 'position:absolute;left:166px;top:19px;width:98px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'На бумажном носителе',
			style: 'position:absolute;left:272px;top:19px;width:139px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В электронном виде',
			style: 'position:absolute;left:413px;top:19px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеЭД',
			text: 'Состояние ЭД:',
			style: 'position:absolute;left:0px;top:43px;width:105px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:387px;width:776px;height:24px;',
			height: 24,width: 776,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница всего',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаДокумента',
			text: 'Всего:
',
			style: 'position:absolute;left:0px;top:1px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ВалютаДокумента',
			text: '',
			style: 'position:absolute;left:148px;top:1px;width:47px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:40px;top:1px;width:105px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДСДокумента',
			text: 'НДС (в т.ч.):',
			style: 'position:absolute;left:265px;top:1px;width:66px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДСДокумента',
			style: 'position:absolute;left:336px;top:1px;width:105px;height:19px;',
		},
					]
				},
				{
					title:'Страница увеличениеи уменьшение',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаУвеличение',
			text: 'Увеличение:',
			style: 'position:absolute;left:0px;top:0px;width:69px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаУвеличение',
			style: 'position:absolute;left:72px;top:0px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаУменьшение',
			text: 'Уменьшение:',
			style: 'position:absolute;left:389px;top:0px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаУменьшение',
			style: 'position:absolute;left:475px;top:0px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ВалютаДокумента1',
			text: '',
			style: 'position:absolute;left:173px;top:0px;width:47px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ВалютаДокумента2',
			text: '',
			style: 'position:absolute;left:576px;top:0px;width:47px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДСУменьшение',
			text: 'НДС (в т.ч.):',
			style: 'position:absolute;left:628px;top:0px;width:65px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДСУменьшение',
			style: 'position:absolute;left:694px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДСКДоплате',
			text: 'НДС (в т.ч.):',
			style: 'position:absolute;left:225px;top:0px;width:65px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДСУвеличение',
			style: 'position:absolute;left:291px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:364px;height:92px;',
			height: 92,width: 364,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКонтрагент1',
			text: 'Контрагент:
',
			style: 'position:absolute;left:0px;top:24px;width:75px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорКонтрагента',
			text: 'Договор:
',
			style: 'position:absolute;left:0px;top:49px;width:75px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:75px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:107px;top:0px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:107px;top:24px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:107px;top:49px;width:257px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидСчетаФактуры',
			text: 'Вид счета-фактуры:',
			style: 'position:absolute;left:0px;top:73px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСчетаФактуры',
			style: 'position:absolute;left:107px;top:73px;width:257px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:379px;top:82px;width:376px;height:44px;',
			height: 44,width: 376,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница корректировочный',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИсходногоДокумента',
			style: 'position:absolute;left:172px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсходногоДокумента',
			text: 'от:',
			style: 'position:absolute;left:265px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсходногоДокумента',
			style: 'position:absolute;left:285px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИсправленияИсходногоДокумента',
			style: 'position:absolute;left:172px;top:25px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсправленияИсходногоДокумента',
			text: 'от:',
			style: 'position:absolute;left:265px;top:25px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсправленияИсходногоДокумента',
			style: 'position:absolute;left:285px;top:25px;width:91px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'с учетом исправления номер:',
			style: 'position:absolute;left:0px;top:25px;width:169px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерИсходногоДокумента',
			text: 'К счету-фактуре номер:',
			style: 'position:absolute;left:0px;top:0px;width:126px;height:19px;',
		},
					]
				},
				{
					title:'Страница обычный',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:379px;top:32px;width:376px;height:19px;',
			height: 19,width: 376,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящего',
			style: 'position:absolute;left:172px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВходящего',
			style: 'position:absolute;left:286px;top:0px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящийНомер',
			text: 'Вх. номер:',
			style: 'position:absolute;left:0px;top:0px;width:58px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящаяДата',
			text: 'от:',
			style: 'position:absolute;left:265px;top:0px;width:20px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:379px;top:57px;width:376px;height:19px;',
			height: 19,width: 376,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница исправление',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Исправление номер:',
			style: 'position:absolute;left:0px;top:0px;width:126px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИсправления',
			style: 'position:absolute;left:172px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсправления',
			text: 'от:',
			style: 'position:absolute;left:265px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсправления',
			style: 'position:absolute;left:285px;top:0px;width:91px;height:19px;',
		},
					]
				},
				{
					title:'Страница корректировка',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИсходногоДокумента3',
			style: 'position:absolute;left:172px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсходногоДокумента3',
			text: 'от',
			style: 'position:absolute;left:265px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсходногоДокумента3',
			style: 'position:absolute;left:285px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерИсходногоДокумента3',
			text: 'К счету-фактуре номер:',
			style: 'position:absolute;left:0px;top:0px;width:126px;height:19px;',
		},
					]
				},
			]
		},
	]
});