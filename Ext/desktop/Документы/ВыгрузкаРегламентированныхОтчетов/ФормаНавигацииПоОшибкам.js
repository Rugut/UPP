Ext.define('Документы.ВыгрузкаРегламентированныхОтчетов.ФормаНавигацииПоОшибкам',
	{
	extend: 'Ext.window.Window',
	height: 148,width: 649,
	iconCls: 'bogus',
	title: 'Навигация по ошибкам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:649px;height:124px;',
			height: 124,width: 649,
			columns:
			[
				{
					text:'Отчет',
				},
				{
					text:'Описание',
				},
				{
					text:'Страница',
				},
				{
					text:'Строка',
				},
				{
					text:'Графа',
				},
				{
					text:'ИмяЯчейки',
				},
				{
					text:'СтрокаПП',
				},
				{
					text:'ОтчетДок',
				},
				{
					text:'Раздел',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:24px;',
			items:
			[
				{
					text:'Назад',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Вперед',
				},
			]
		},
	]
});