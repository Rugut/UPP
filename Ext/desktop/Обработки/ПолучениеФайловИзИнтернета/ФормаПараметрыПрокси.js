Ext.define('Обработки.ПолучениеФайловИзИнтернета.ФормаПараметрыПрокси',
	{
	extend: 'Ext.window.Window',
	height: 154,width: 284,
	iconCls: 'bogus',
	title: 'Параметры прокси-сервера',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:129px;width:284px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПользователя',
			style: 'position:absolute;left:93px;top:32px;width:183px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольПользователя',
			style: 'position:absolute;left:93px;top:56px;width:183px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПроксиСервера',
			style: 'position:absolute;left:93px;top:8px;width:183px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПортПроксиСервера',
			style: 'position:absolute;left:93px;top:81px;width:183px;height:19px;',
		},
	]
});