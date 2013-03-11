Ext.define('Обработки.РегламентированнаяОтчетностьСоотношенияПоказателей.РасшифровкаКонтрольныхСоотношений',
	{
	extend: 'Ext.window.Window',
	height: 543,width: 408,
	iconCls: 'bogus',
	title: 'Расшифровка соотношений показателей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:518px;width:408px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'КнопкаАктивизироватьРодительскийОтчет',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'КнопкаСохранить',
				},
			]
		},
	]
});