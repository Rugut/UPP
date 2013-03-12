Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:287px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор из списка',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:584px;height:246px;',
			height: 246,width: 584,
			columns:
			[
				{
					text:'Код',
					width:'130',
				},
				{
					text:'Название',
					width:'457',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:262px;width:600px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
			]
		},
	]
});