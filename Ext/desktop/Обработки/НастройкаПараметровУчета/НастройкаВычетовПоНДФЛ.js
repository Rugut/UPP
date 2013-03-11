Ext.define('Обработки.НастройкаПараметровУчета.НастройкаВычетовПоНДФЛ',
	{
	extend: 'Ext.window.Window',
	height: 500,width: 508,
	iconCls: 'bogus',
	title: 'Настройка вычетов по НДФЛ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:475px;width:508px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:278px;width:492px;height:189px;',
			height: 189,width: 492,
			columns:
			[
				{
					text:'КодДохода',
				},
				{
					text:'ГодовойВычет',
				},
				{
					text:'НормативЗатрат',
				},
				{
					text:'Период',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:314px;top:320px;width:109px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:51px;width:492px;height:192px;',
			height: 192,width: 492,
			columns:
			[
				{
					text:'КодВычета',
				},
				{
					text:'Размер',
				},
				{
					text:'ОграничениеПоДоходам',
				},
				{
					text:'Период',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:321px;top:124px;width:95px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
			]
		},
	]
});