Ext.define('Обработки.РасшифровкаРегламентированнойОтчетности.РасшифровкаЗначенияПоказателя',
	{
	extend: 'Ext.window.Window',
	height: 543,width: 408,
	iconCls: 'bogus',
	title: 'Расшифровка значений показателей',
	
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
					text:'Разделитель',
				},
				{
					text:'КнопкаВывестиНаПечать',
				},
				{
					text:'КнопкаСохранить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'КнопкаАктивизироватьРодительскийОтчет',
				},
				{
					text:'Разделитель2',
				},
			]
		},
	]
});