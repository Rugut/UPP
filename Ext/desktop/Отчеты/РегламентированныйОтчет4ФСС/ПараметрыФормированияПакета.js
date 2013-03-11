Ext.define('Отчеты.РегламентированныйОтчет4ФСС.ПараметрыФормированияПакета',
	{
	extend: 'Ext.window.Window',
	height: 120,width: 584,
	iconCls: 'bogus',
	title: 'Параметры формирования пакета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:95px;width:584px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатСтрахователяПредставление',
			style: 'position:absolute;left:157px;top:8px;width:419px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатФССПредставление',
			style: 'position:absolute;left:157px;top:34px;width:419px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогВыгрузки',
			style: 'position:absolute;left:157px;top:68px;width:419px;height:19px;',
		},
	]
});