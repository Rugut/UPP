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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:475px;width:508px;height:25px;',
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
				},
				{
					text:'Годовой вычет',
					width:'100',
				},
				{
					text:'Норматив затрат',
					width:'100',
				},
				{
					text:'Период',
					width:'100',
				},
			]
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:51px;width:492px;height:192px;',
			height: 192,width: 492,
			columns:
			[
				{
					text:'Код вычета',
					width:'100',
				},
				{
					text:'Размер',
					width:'100',
				},
				{
					text:'Ограничение по доходам',
					width:'100',
				},
				{
					text:'Период',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:321px;top:124px;width:95px;height:24px;',
			items:
			[
				{
					text:'Вывести список...',
				},
			]
		},
	]
});