Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ПользователиУчетныхЗаписейДокументооборота_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 689,
	iconCls: 'bogus',
	title: 'Пользователи учетных записей документооборота и их настройки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:673px;height:259px;',
			height: 259,width: 673,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'УчетнаяЗапись',
				},
				{
					text:'Пользователь',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:689px;height:25px;',
			items:
			[
			]
		},
	]
});