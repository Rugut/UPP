Ext.define('Отчеты.МСФОПрибылиИУбытки.ФормаДопПараметров',
	{
	extend: 'Ext.window.Window',
	height: 140,width: 334,
	iconCls: 'bogus',
	title: 'Дополнительные параметры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:115px;width:334px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаСуммаДивидендовКон',
			style: 'position:absolute;left:206px;top:41px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаСуммаДивидендовПред',
			style: 'position:absolute;left:206px;top:65px;width:120px;height:19px;',
		},
	]
});