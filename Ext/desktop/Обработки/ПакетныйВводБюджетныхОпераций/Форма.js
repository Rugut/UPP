Ext.define('Обработки.ПакетныйВводБюджетныхОпераций.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Пакетный ввод бюджетных операций',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сценарий',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:764px;height:360px;',
			height: 360,width: 764,
			items:
			[
				{
					title:'Бюджетные операции',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:750px;height:154px;',
			height: 154,width: 750,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Период',
					width:'100',
					dataIndex:'ПериодПланирования',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'100',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Цена',
					width:'100',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Валюта',
					width:'100',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'ЦФО',
					width:'100',
					dataIndex:'ЦФО',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'100',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Состояние',
					width:'100',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'100',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПакетныйВводБюджетныхОпераций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ПериодПланирования',
					},
					{
						name:'СтатьяОборотов',
					},
					{
						name:'Количество',
					},
					{
						name:'Цена',
					},
					{
						name:'Сумма',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'ЦФО',
					},
					{
						name:'Проект',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Состояние',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Зависимые обороты',
			style: 'position:absolute;left:6px;top:189px;width:750px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:210px;width:750px;height:124px;',
			height: 124,width: 750,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПакетныйВводБюджетныхОпераций/ВыбратьПоСсылке/100'},
				fields:
				[
				]
			},
		},
					]
				},
				{
					title:'Общие реквизиты бюджетных операций',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Период планирования:',
			style: 'position:absolute;left:6px;top:6px;width:136px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Статья оборотов:',
			style: 'position:absolute;left:6px;top:30px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтатьяОборотов',
			style: 'position:absolute;left:142px;top:30px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:520px;top:30px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Валюта операции:',
			style: 'position:absolute;left:408px;top:30px;width:112px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ЦФО:',
			style: 'position:absolute;left:6px;top:54px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЦФО',
			style: 'position:absolute;left:142px;top:54px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проект:',
			style: 'position:absolute;left:408px;top:54px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Проект',
			style: 'position:absolute;left:520px;top:54px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент:',
			style: 'position:absolute;left:6px;top:78px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Контрагент',
			style: 'position:absolute;left:142px;top:78px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:408px;top:78px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номенклатура',
			style: 'position:absolute;left:520px;top:78px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ответственный:',
			style: 'position:absolute;left:6px;top:102px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:142px;top:102px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Состояние:',
			style: 'position:absolute;left:408px;top:102px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Состояние',
			style: 'position:absolute;left:520px;top:102px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Комментарий:',
			style: 'position:absolute;left:6px;top:126px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:142px;top:126px;width:614px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ПериодПланирования',
			style: 'position:absolute;left:142px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Период',
			text: '',
			style: 'position:absolute;left:160px;top:6px;width:115px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'ПлюсПериод',
			text: '+',
			style: 'position:absolute;left:274px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'МинусПериод',
			text: '-',
			style: 'position:absolute;left:142px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ВыборПериода',
			text: '',
			style: 'position:absolute;left:294px;top:6px;width:15px;height:19px;',
		},
					]
				},
				{
					title:'Сформированные документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:750px;height:304px;',
			height: 304,width: 750,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Бюджетная операция',
					width:'265',
					dataIndex:'ДокументОперация',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'183',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
				{
					text:'Валюта',
					width:'124',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Сумма',
					width:'143',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПакетныйВводБюджетныхОпераций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДокументОперация',
					},
					{
						name:'СтатьяОборотов',
					},
					{
						name:'Валюта',
					},
					{
						name:'Сумма',
					},
				]
			},
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:780px;height:25px;',
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