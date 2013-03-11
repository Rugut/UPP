Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиСемейноеПоложение',
	{
	extend: 'Ext.window.Window',
	height: 95,width: 354,
	iconCls: 'bogus',
	title: 'Семейное положение физ. лица',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:266px;top:43px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СемейноеПоложение',
			style: 'position:absolute;left:126px;top:8px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:70px;width:354px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'КнопкаИстория',
				},
				{
					text:'РазделительИстория',
				},
				{
					text:'Действие2',
				},
			]
		},
	]
});