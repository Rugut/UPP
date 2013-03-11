Ext.define('Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 181,width: 459,
	iconCls: 'bogus',
	title: 'Экспорт/Импорт контактных данных объектов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:459px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:156px;width:459px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПутьКФайлу',
			style: 'position:absolute;left:182px;top:57px;width:269px;height:19px;',
		},
	]
});