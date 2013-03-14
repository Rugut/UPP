Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПоказВходящихСообщений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:771px;height:436px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сообщения для просмотра',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:411px;width:771px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				'-',
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
					width:'101',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:364px;width:755px;height:39px;',
			height: 39,width: 755,
			tabBar:{hidden:true},
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
		{
			xtype: 'label',
			name: 'НадписьЗаголовок',
			text: '',
			style: 'position:absolute;left:8px;top:8px;width:755px;height:31px;',
		},
	]
});