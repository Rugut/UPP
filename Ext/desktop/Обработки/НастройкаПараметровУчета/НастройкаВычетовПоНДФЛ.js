Ext.define('Обработки.НастройкаПараметровУчета.НастройкаВычетовПоНДФЛ',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:508px;height:500px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка вычетов по НДФЛ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьВычетыНДФЛ',
			text: 'Вычеты по НДФЛ',
			style: 'position:absolute;left:8px;top:8px;width:180px;height:25px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:278px;width:492px;height:189px;',
			height: 189,width: 492,
			columns:
			[
				{
					text:'Код дохода',
					width:'100',
					dataIndex:'КодДохода',
					flex:1,
				},
				{
					text:'Годовой вычет',
					width:'100',
					dataIndex:'ГодовойВычет',
					flex:1,
				},
				{
					text:'Норматив затрат',
					width:'100',
					dataIndex:'НормативЗатрат',
					flex:1,
				},
				{
					text:'Период',
					width:'100',
					dataIndex:'Период',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПараметровУчета/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'КодДохода',
					},
					{
						name:'ГодовойВычет',
					},
					{
						name:'НормативЗатрат',
					},
					{
						name:'Период',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:314px;top:320px;width:109px;height:24px;',
			items:
			[
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Вычеты к доходам по НДФЛ',
			style: 'position:absolute;left:8px;top:261px;width:470px;height:14px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:51px;width:492px;height:192px;',
			height: 192,width: 492,
			columns:
			[
				{
					text:'Код вычета',
					width:'100',
					dataIndex:'КодВычета',
					flex:1,
				},
				{
					text:'Размер',
					width:'100',
					dataIndex:'Размер',
					flex:1,
				},
				{
					text:'Ограничение по доходам',
					width:'100',
					dataIndex:'ОграничениеПоДоходам',
					flex:1,
				},
				{
					text:'Период',
					width:'100',
					dataIndex:'Период',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПараметровУчета/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'КодВычета',
					},
					{
						name:'Размер',
					},
					{
						name:'ОграничениеПоДоходам',
					},
					{
						name:'Период',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Размеры вычетов по НДФЛ',
			style: 'position:absolute;left:8px;top:34px;width:470px;height:14px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:475px;width:508px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:321px;top:124px;width:95px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Вывести список...',
				},
			]
		},
	]
});