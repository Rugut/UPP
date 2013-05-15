Ext.define('Обработки.ИзменениеДокументовБюджетирования.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:644px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение документов бюджетирования',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:628px;height:384px;',
			height: 384,width: 628,
			items:
			[
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:88px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Вид документа:',
			style: 'position:absolute;left:6px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:94px;width:614px;height:259px;',
			height: 259,width: 614,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Реквизит',
					width:'220',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'120',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'240',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'120',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИзменениеДокументовБюджетирования/ВыбратьПоСсылке/100'},
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
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сценарий',
			style: 'position:absolute;left:88px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сценарий:',
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:328px;top:6px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНач',
			style: 'position:absolute;left:386px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:484px;top:6px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКон',
			style: 'position:absolute;left:502px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:600px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Отбор документов',
			style: 'position:absolute;left:6px;top:54px;width:614px;height:16px;',
		},
					]
				},
				{
					title:'Обработка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:265px;width:614px;height:93px;',
			height: 93,width: 614,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Действие',
					width:'222',
					dataIndex:'Действие',
					flex:1,
				},
				{
					text:'Уточнение действия',
					width:'204',
					dataIndex:'УточнениеДействия',
					flex:1,
				},
				{
					text:'Параметр действия',
					width:'239',
					dataIndex:'ПараметрДействия',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИзменениеДокументовБюджетирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Действие',
					},
					{
						name:'УточнениеДействия',
					},
					{
						name:'ПараметрДействия',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:241px;width:614px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Документы для обработки',
			style: 'position:absolute;left:6px;top:6px;width:614px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:614px;height:174px;',
			height: 174,width: 614,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИзменениеДокументовБюджетирования/ВыбратьПоСсылке/100'},
				fields:
				[
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Выполняемые действия',
			style: 'position:absolute;left:6px;top:225px;width:614px;height:16px;',
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
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:644px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});