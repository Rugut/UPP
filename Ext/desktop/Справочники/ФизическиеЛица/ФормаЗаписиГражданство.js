Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиГражданство',
	{
	extend: 'Ext.window.Window',
	height: 417,width: 418,
	iconCls: 'bogus',
	title: 'Гражданство физического лица',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:203px;top:365px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГражданинСтраны',
			style: 'position:absolute;left:145px;top:8px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:392px;width:418px;height:25px;',
			items:
			[
				{
					text:'КнопкаИстория',
				},
				{
					text:'РазделительИстория',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:243px;width:402px;height:100px;',
			height: 100,width: 402,
			columns:
			[
				{
					text:'ПринятПоДолгосрочномуДоговору',
				},
				{
					text:'Организация',
				},
				{
					text:'Период',
				},
				{
					text:'ПериодЗавершения',
				},
			]
		},
	]
});