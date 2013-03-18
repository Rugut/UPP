Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ДополнительныеСвойстваТранспортногоСообщения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:464px;height:434px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительно...',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:409px;width:464px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			style: 'position:absolute;left:8px;top:10px;width:448px;height:391px;',
			height: 391,width: 448,
			columns:
			[
				{
					text:'Имя',
					width:'221',
				},
				{
					text:'Значение',
					width:'194',
				},
			]
		},
	]
});