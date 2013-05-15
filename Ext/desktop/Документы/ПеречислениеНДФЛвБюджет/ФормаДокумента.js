Ext.define('Документы.ПеречислениеНДФЛвБюджет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:683px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перечисление НДФЛ в бюджет РФ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:367px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:455px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:535px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:555px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:367px;top:58px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:455px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:428px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:428px;width:579px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:212px;width:667px;height:207px;',
			height: 207,width: 667,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'220',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПеречислениеНДФЛвБюджет/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'Сумма',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Сотрудники',
			style: 'position:absolute;left:8px;top:170px;width:667px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:188px;width:667px;height:24px;',
			items:
			[
				{
					text:'Физ.лицами, получавшими доходы',
				},
				'-',
				{
					text:'Суммы налога',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:88px;width:667px;height:74px;',
			height: 74,width: 667,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа',
			text: 'Дата платежа:',
			style: 'position:absolute;left:6px;top:23px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаПлатежа',
			style: 'position:absolute;left:84px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МесяцНалоговогоПериода',
			style: 'position:absolute;left:193px;top:23px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлатежноеПоручение',
			text: 'Платежное поручение: №',
			style: 'position:absolute;left:316px;top:23px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПлатежноеПоручениеНомер',
			style: 'position:absolute;left:447px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ПлатежноеПоручениеДата',
			style: 'position:absolute;left:547px;top:23px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт1',
			text: 'от:',
			style: 'position:absolute;left:527px;top:23px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПоОКАТО',
			text: 'ОКАТО/КПП:',
			style: 'position:absolute;left:316px;top:48px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПоОКАТО',
			style: 'position:absolute;left:392px;top:48px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавка',
			text: 'Ставка:',
			style: 'position:absolute;left:170px;top:48px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ставка',
			style: 'position:absolute;left:215px;top:48px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСумма',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:48px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Сумма',
			style: 'position:absolute;left:84px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц1',
			text: 'за:',
			style: 'position:absolute;left:170px;top:23px;width:19px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Платеж',
			style: 'position:absolute;left:0px;top:0px;width:667px;height:16px;',
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
			style: 'position:absolute;left:0px;top:0px;width:683px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:683px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
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
	]
});