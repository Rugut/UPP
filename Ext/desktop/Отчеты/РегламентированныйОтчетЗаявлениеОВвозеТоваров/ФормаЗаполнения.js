Ext.define('Отчеты.РегламентированныйОтчетЗаявлениеОВвозеТоваров.ФормаЗаполнения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Серия, номер и дата товаро-транспортного документа',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:226px;',
			height: 226,width: 384,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентированныйОтчетЗаявлениеОВвозеТоваров/ВыбратьПоСсылке/100'},
				fields:
				[
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
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
					text:'Отмена',
				},
			]
		},
	]
});