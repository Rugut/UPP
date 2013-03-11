Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.РезультатыПоиска',
	{
	extend: 'Ext.window.Window',
	height: 235,width: 728,
	iconCls: 'bogus',
	title: 'Результаты поиска',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:728px;height:25px;',
			items:
			[
				{
					text:'Назад',
				},
				{
					text:'Вперед',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:728px;height:210px;',
			height: 210,width: 728,
			columns:
			[
				{
					text:'НаименованиеЛиста',
				},
				{
					text:'Страница',
				},
				{
					text:'НайденоВСтроке',
				},
				{
					text:'ИмяЯчейки',
				},
				{
					text:'Раздел',
				},
				{
					text:'СтрокаПП',
				},
			]
		},
	]
});