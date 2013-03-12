Ext.define('Обработки.ВыгрузкаДанныхCommerceML.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:611px;height:513px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выгрузка данных в формате CommerceML',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:611px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Укажите данные, которые нужно выгрузить:',
			style: 'position:absolute;left:44px;top:33px;width:274px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:488px;width:611px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Выгрузить данные',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:80px;width:603px;height:405px;',
			height: 405,width: 603,
			items:
			[
				{
					title:'Страница данные',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:71px;width:591px;height:334px;',
			height: 334,width: 591,
			items:
			[
				{
					title:'Выгрузка информации о товарах',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:67px;width:591px;height:262px;',
			height: 262,width: 591,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:42px;width:591px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Имя выгрузки:',
			style: 'position:absolute;left:0px;top:0px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяКаталога',
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
					]
				},
				{
					title:'Выгрузка прайса',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Имя прайс-листа:',
			style: 'position:absolute;left:0px;top:0px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПрайса',
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:67px;width:591px;height:259px;',
			height: 259,width: 591,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:42px;width:591px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Выгрузки документов',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:66px;width:591px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'Очистить',
				},
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиКонтрагент',
			style: 'position:absolute;left:256px;top:0px;width:201px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Контрагент:',
			style: 'position:absolute;left:0px;top:0px;width:97px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Период с:',
			style: 'position:absolute;left:0px;top:23px;width:97px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиСДокументДата',
			style: 'position:absolute;left:101px;top:23px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПоДокументДата',
			style: 'position:absolute;left:212px;top:23px;width:84px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:302px;top:23px;width:19px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:94px;width:591px;height:233px;',
			height: 233,width: 591,
			columns:
			[
				{
					text:'Контрагент/Документ',
					width:'352',
				},
				{
					text:'Обрабатывать',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:110px;width:242px;height:219px;',
			height: 219,width: 242,
			columns:
			[
				{
					text:'',
					width:'29',
				},
				{
					text:'Свойство',
					width:'387',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:248px;top:136px;width:343px;height:193px;',
			height: 193,width: 343,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:248px;top:108px;width:343px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выгружать каталог товаров',
			style: 'position:absolute;left:0px;top:23px;width:167px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выгружать сведения об организации',
			style: 'position:absolute;left:171px;top:23px;width:208px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПрайсаCML_1',
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Имя прайс-листа:',
			style: 'position:absolute;left:0px;top:0px;width:98px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаПоУмолчанию',
			style: 'position:absolute;left:130px;top:42px;width:102px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Единица по умолчанию:',
			style: 'position:absolute;left:0px;top:42px;width:127px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Действительно с:',
			style: 'position:absolute;left:0px;top:66px;width:127px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'по:',
			style: 'position:absolute;left:227px;top:66px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПрайсCML_1',
			text: '...',
			style: 'position:absolute;left:356px;top:66px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДействительноС',
			style: 'position:absolute;left:130px;top:66px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДействительноПо',
			style: 'position:absolute;left:257px;top:66px;width:91px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:48px;width:97px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:107px;top:48px;width:355px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:24px;width:591px;height:21px;',
			height: 21,width: 591,
			items:
			[
				{
					title:'Файл',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаВыгрузки',
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
					]
				},
				{
					title:'Каталог',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИмяФайла',
			text: 'Файл выгрузки:',
			style: 'position:absolute;left:0px;top:0px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяКаталога',
			text: 'Каталог выгрузки:',
			style: 'position:absolute;left:0px;top:0px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяКаталогаВыгрузки',
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пустая страница',
				},
			]
		},
	]
});