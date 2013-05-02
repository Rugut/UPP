Ext.define('Обработки.ФормированиеЗаказовНаОбслуживаниеОС.ФормаНастройкиЗаполненияОСДляРемонта',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:374px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка заполнения основных средств для обслуживания',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:54px;width:294px;height:24px;',
			items:
			[
				{
					text:'По наименованию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:78px;width:294px;height:263px;',
			height: 263,width: 294,
			columns:
			[
				{
					text:'',
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Основные средства',
					width:'261',
					dataIndex:'ОС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаказовНаОбслуживаниеОС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ОС',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:306px;top:54px;width:294px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:306px;top:78px;width:294px;height:263px;',
			height: 263,width: 294,
			columns:
			[
				{
					text:'',
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Услуги по обслуживанию ОС',
					width:'260',
					dataIndex:'Номенклатура',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаказовНаОбслуживаниеОС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:349px;width:608px;height:25px;',
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
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата окончания интервала планирования:',
			style: 'position:absolute;left:8px;top:8px;width:221px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПланирования',
			style: 'position:absolute;left:233px;top:8px;width:112px;height:19px;',
		},
	]
});