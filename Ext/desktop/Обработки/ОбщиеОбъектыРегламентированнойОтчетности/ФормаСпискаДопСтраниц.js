Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаСпискаДопСтраниц',
	{
	extend: 'Ext.window.Window',
	height: 262,width: 367,
	iconCls: 'bogus',
	title: 'Выберите страницу',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:237px;width:367px;height:25px;',
			items:
			[
				{
					text:'КнопкаВыбрать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:351px;height:197px;',
			height: 197,width: 351,
			columns:
			[
				{
					text:'Представление',
				},
				{
					text:'АвтоматическоеПредставление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:367px;height:25px;',
			items:
			[
				{
					text:'СортироватьПоВозрастанию',
				},
				{
					text:'СортироватьПоУбыванию',
				},
				{
					text:'Действие1',
				},
				{
					text:'ПереместитьВниз',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});