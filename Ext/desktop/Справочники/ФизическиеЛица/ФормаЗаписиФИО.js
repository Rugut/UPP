Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиФИО',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:306px;height:141px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Фамилия, имя, отчество физ. лица',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Запись действует с:',
			style: 'position:absolute;left:8px;top:89px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:218px;top:89px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Фамилия:',
			style: 'position:absolute;left:8px;top:8px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:78px;top:8px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Имя:',
			style: 'position:absolute;left:8px;top:30px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:78px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Отчество:',
			style: 'position:absolute;left:8px;top:54px;width:68px;height:19px;',
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
					text:'История...',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});