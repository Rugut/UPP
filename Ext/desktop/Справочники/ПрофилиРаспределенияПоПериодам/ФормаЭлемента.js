Ext.define('Справочники.ПрофилиРаспределенияПоПериодам.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 404,width: 406,
	iconCls: 'bogus',
	title: 'Профили распределения по периодам',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:318px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:94px;top:60px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подпериод',
			style: 'position:absolute;left:94px;top:84px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:127px;width:390px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:151px;width:390px;height:220px;',
			height: 220,width: 390,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НомерПодпериода',
				},
				{
					text:'ДоляПодпериода',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:379px;width:406px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});