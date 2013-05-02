Ext.define('Отчеты.ОтчетПоБюджету.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:337px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет по бюджету',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:293px;',
			height: 293,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:142px;width:460px;height:125px;',
			height: 125,width: 460,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Представление',
					width:'320',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетПоБюджету/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Представление',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:118px;width:460px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Установить все',
				},
				{
					text:'Снять все',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:68px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:166px;top:6px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:184px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:282px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:68px;top:54px;width:398px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сценарий:',
			style: 'position:absolute;left:6px;top:54px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:68px;top:78px;width:398px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'Бюджет:',
			style: 'position:absolute;left:6px;top:78px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДанныхОтчета',
			style: 'position:absolute;left:68px;top:30px;width:398px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'Данные:',
			style: 'position:absolute;left:6px;top:30px;width:60px;height:19px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:460px;height:241px;',
			height: 241,width: 460,
			columns:
			[
				{
					text:'Группировка',
					width:'156',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'110',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетПоБюджету/ВыбратьПоСсылке/100'},
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:154px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппировкаГоризонтальная',
			style: 'position:absolute;left:346px;top:3px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:460px;height:242px;',
			height: 242,width: 460,
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
					width:'120',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'80',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетПоБюджету/ВыбратьПоСсылке/100'},
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
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись39',
			text: 'Развернуть по горизонтали по:',
			style: 'position:absolute;left:180px;top:3px;width:164px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:312px;width:490px;height:25px;',
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
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});