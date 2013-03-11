Ext.define('Обработки.ПолучениеФайловИзИнтернета.ФормаПараметрыДоступаНаСервер',
	{
	extend: 'Ext.window.Window',
	height: 194,width: 325,
	iconCls: 'bogus',
	title: 'Параметры доступа на сервер',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:169px;width:325px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодДоступаНаСервер',
			style: 'position:absolute;left:74px;top:98px;width:243px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольДоступаНаСервер',
			style: 'position:absolute;left:74px;top:122px;width:243px;height:19px;',
		},
	]
});