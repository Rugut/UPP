Ext.define('Обработки.ПоискИЗаменаДублирующихсяЭлементов.ФормаПоиска',
	{
	extend: 'Ext.window.Window',
	height: 182,width: 675,
	iconCls: 'bogus',
	title: 'Поиск дублирующихся элементов справочников',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:157px;width:675px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Да',
				},
				{
					text:'Нет',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:659px;height:119px;',
			height: 119,width: 659,
			columns:
			[
			]
		},
	]
});