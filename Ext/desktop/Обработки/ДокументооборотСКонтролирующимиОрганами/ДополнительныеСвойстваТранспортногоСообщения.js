Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ДополнительныеСвойстваТранспортногоСообщения',
	{
	extend: 'Ext.window.Window',
	height: 434,width: 464,
	iconCls: 'bogus',
	title: 'Дополнительно...',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:409px;width:464px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:10px;width:448px;height:391px;',
			height: 391,width: 448,
			columns:
			[
				{
					text:'Имя',
				},
				{
					text:'Значение',
				},
			]
		},
	]
});