Ext.define('Справочники.ХарактеристикиНоменклатуры.ФормаВыбораСРасширеннымОтбором',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:396px;height:486px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Характеристики номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:461px;width:396px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выбрать / Ввести',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:53px;width:380px;height:172px;',
			height: 172,width: 380,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Свойство',
					width:'179',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ХарактеристикиНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Свойство',
					},
					{
						name:'Значение',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:281px;width:380px;height:172px;',
			height: 172,width: 380,
			columns:
			[
				{
					text:'Характеристика',
					width:'251',
					dataIndex:'Характеристика',
					flex:1,
				},
				{
					text:'Характеристика ссылка',
					width:'153',
					dataIndex:'ХарактеристикаСсылка',
					flex:1,
				},
				{
					text:'Пометка удаления',
					width:'100',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Свойство',
					width:'131',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ХарактеристикиНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Характеристика',
					},
					{
						name:'ХарактеристикаСсылка',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Свойство',
					},
					{
						name:'Значение',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Значения свойств для отбора характеристик номенклатуры',
			style: 'position:absolute;left:8px;top:8px;width:380px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:257px;width:380px;height:24px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Свернуть все',
				},
				{
					text:'Развернуть все',
				},
				'-',
				{
					text:'Отображать активные',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Характеристики, отобранные по значениям свойств',
			style: 'position:absolute;left:8px;top:236px;width:380px;height:16px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:29px;width:380px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Равенство',
				},
				{
					text:'Содержит',
				},
			]
		},
	]
});