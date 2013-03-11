Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПоказВходящихСообщений',
	{
	extend: 'Ext.window.Window',
	height: 436,width: 771,
	iconCls: 'bogus',
	title: 'Сообщения для просмотра',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:411px;width:771px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:49px;width:755px;height:311px;',
			height: 311,width: 755,
			columns:
			[
				{
					text:'Описание',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:364px;width:755px;height:39px;',
			height: 39,width: 755,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
	]
});