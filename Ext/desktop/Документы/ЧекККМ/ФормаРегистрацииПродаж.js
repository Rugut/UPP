Ext.define('Документы.ЧекККМ.ФормаРегистрацииПродаж',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 782,
	iconCls: 'bogus',
	title: 'Чек ККМ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:782px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЧекВозврата',
				},
				{
					text:'ИзТерминалаСбораДанных1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ZОтчет',
				},
				{
					text:'ОтчетОСменеБезГашения',
				},
				{
					text:'Авторизация',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'АннулированиеЧека',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'ВыходИзПрограммы',
				},
				{
					text:'Сервис',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ВнесениеДенег',
				},
				{
					text:'НазначитьСкидку',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ИзъятиеДенег',
				},
				{
					text:'ДействиеЗакрытиеЧека',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:5px;width:766px;height:336px;',
			height: 336,width: 766,
			items:
			[
				{
					title:'Товары',
				},
			]
		},
	]
});