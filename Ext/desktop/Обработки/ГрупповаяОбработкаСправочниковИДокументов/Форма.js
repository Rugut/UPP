Ext.define('Обработки.ГрупповаяОбработкаСправочниковИДокументов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:573px;height:414px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Групповая обработка справочников и документов',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:557px;height:348px;',
			height: 348,width: 557,
			items:
			[
				{
					title:'Объекты отбора',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип объекта:',
			style: 'position:absolute;left:8px;top:11px;width:68px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:78px;top:11px;width:163px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:65px;width:543px;height:93px;',
			height: 93,width: 543,
			columns:
			[
				{
					text:'Представление таблицы',
					width:'100',
					dataIndex:'ПредставлениеТаблицы',
					flex:1,
				},
				{
					text:'Имя таблицы',
					width:'194',
					dataIndex:'ИмяТаблицы',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрупповаяОбработкаСправочниковИДокументов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПредставлениеТаблицы',
					},
					{
						name:'ИмяТаблицы',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:202px;width:543px;height:120px;',
			height: 120,width: 543,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'63',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'98',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'98',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'98',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрупповаяОбработкаСправочниковИДокументов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Отбор',
			style: 'position:absolute;left:6px;top:163px;width:543px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:178px;width:543px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Обрабатывать табличные части',
			style: 'position:absolute;left:246px;top:11px;width:186px;height:19px;',
		},
					]
				},
				{
					title:'Обработка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:543px;height:231px;',
			height: 231,width: 543,
			columns:
			[
				{
					text:'Вид',
					width:'100',
					dataIndex:'Ш_ВидПредставление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрупповаяОбработкаСправочниковИДокументов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Ш_ВидПредставление',
					},
				]
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:286px;width:280px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаДействия',
			width: 174,
			height: 19,
			style: 'position:absolute;left:291px;top:286px;width:174px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Выполнить',
			text: 'Выполнить',
			style: 'position:absolute;left:469px;top:286px;width:80px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Действие',
			style: 'position:absolute;left:6px;top:266px;width:543px;height:16px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:573px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Настройка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:389px;width:573px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Отобрать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});