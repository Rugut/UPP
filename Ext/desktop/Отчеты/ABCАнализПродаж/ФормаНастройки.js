Ext.define('Отчеты.ABCАнализПродаж.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:522px;height:371px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка ABC-анализ продаж',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:506px;height:330px;',
			height: 330,width: 506,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 80,
			height: 19,
			style: 'position:absolute;left:68px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:30px;width:207px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать группировки',
			style: 'position:absolute;left:6px;top:51px;width:163px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:150px;top:6px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 80,
			height: 19,
			style: 'position:absolute;left:168px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:148px;top:97px;width:350px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:164px;width:492px;height:140px;',
			height: 140,width: 492,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Представление',
					width:'339',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ABCАнализПродаж/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Представление',
					},
				]
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:148px;top:74px;width:350px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Анализируемый параметр:',
			style: 'position:absolute;left:6px;top:74px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Анализируемый объект:',
			style: 'position:absolute;left:6px;top:97px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:250px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Показатели',
			style: 'position:absolute;left:6px;top:124px;width:492px;height:16px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:492px;height:280px;',
			height: 280,width: 492,
			columns:
			[
				{
					text:'Поле',
					width:'266',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'170',
					dataIndex:'Тип',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ABCАнализПродаж/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Поле',
					},
					{
						name:'Тип',
					},
				]
			},
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:73px;width:492px;height:231px;',
			height: 231,width: 492,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'157',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'112',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'81',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'81',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'81',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ABCАнализПродаж/ВыбратьПоСсылке/100'},
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
			xtype: 'checkbox',
			boxLabel: 'АВС-класс',
			style: 'position:absolute;left:6px;top:6px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборЗначениеКласс',
			width: 264,
			height: 19,
			style: 'position:absolute;left:234px;top:6px;width:264px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:102px;top:6px;width:127px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Отбор',
			style: 'position:absolute;left:6px;top:33px;width:492px;height:16px;',
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:492px;height:280px;',
			height: 280,width: 492,
			columns:
			[
				{
					text:'Поле',
					width:'290',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Направление сортировки',
					width:'138',
					dataIndex:'НаправлениеСортировки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ABCАнализПродаж/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Имя',
					},
					{
						name:'НаправлениеСортировки',
					},
				]
			},
		},
					]
				},
				{
					title:'АВС-классы',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'А-класс:',
			style: 'position:absolute;left:12px;top:27px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентAКласса',
			style: 'position:absolute;left:65px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'B-класс:',
			style: 'position:absolute;left:12px;top:51px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентBКласса',
			style: 'position:absolute;left:65px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'С-класс:',
			style: 'position:absolute;left:12px;top:75px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВвода3',
			style: 'position:absolute;left:65px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: '%',
			style: 'position:absolute;left:147px;top:51px;width:13px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: '%',
			style: 'position:absolute;left:147px;top:27px;width:13px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: '%',
			style: 'position:absolute;left:147px;top:75px;width:13px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Критерии распределения (процент от общей суммы параметров распределения)',
			style: 'position:absolute;left:6px;top:6px;width:492px;height:16px;',
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
			style: 'position:absolute;left:0px;top:346px;width:522px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});