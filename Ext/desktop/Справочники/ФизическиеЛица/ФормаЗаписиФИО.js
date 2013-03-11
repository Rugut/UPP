Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиФИО',
	{
	extend: 'Ext.window.Window',
	height: 141,width: 306,
	iconCls: 'bogus',
	title: 'Фамилия, имя, отчество физ. лица',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:218px;top:89px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:78px;top:8px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:78px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:78px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:116px;width:306px;height:25px;',
			items:
			[
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
				{
					text:'Действие',
				},
			]
		},
	]
});