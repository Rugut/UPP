Ext.define('Обработки.КонсольОтчетов.ФормаВыбораСтрокиДереваЗапросов',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 336,
	iconCls: 'bogus',
	title: 'Выберите строку дерева отчетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:29px;width:324px;height:265px;',
			height: 265,width: 324,
			columns:
			[
				{
					text:'Отчет',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНаВерхнийУровень',
			text: 'Перенести на верхний уровень',
			style: 'position:absolute;left:6px;top:6px;width:324px;height:19px;',
		},
	]
});