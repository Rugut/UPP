Ext.define('Обработки.КалендарныйПланЗакупок.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 322,width: 376,
	iconCls: 'bogus',
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
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:297px;width:376px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'СохранитьЗначения___',
				},
				{
					text:'КнопкаВыбратьНажатие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Справка',
				},
			]
		},
	]
});