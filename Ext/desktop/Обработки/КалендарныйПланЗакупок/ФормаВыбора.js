Ext.define('Обработки.КалендарныйПланЗакупок.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:376px;height:322px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группировки отчета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:360px;height:280px;',
			height: 280,width: 360,
			columns:
			[
				{
					text:'ПредставлениеФильтра',
					width:'209',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:297px;width:376px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});