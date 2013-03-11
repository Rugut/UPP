Ext.define('Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбораТаблицыИсточника',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 236,
	iconCls: 'bogus',
	title: 'Таблицы источника',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:220px;height:320px;',
			height: 320,width: 220,
			columns:
			[
				{
					text:'ОписаниеПоля',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:336px;width:236px;height:25px;',
			items:
			[
				{
					text:'СохранитьЗначения___',
				},
				{
					text:'КнопкаВыбратьНажатие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});