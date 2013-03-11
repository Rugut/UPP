Ext.define('Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбораПоляИсточника',
	{
	extend: 'Ext.window.Window',
	height: 385,width: 236,
	iconCls: 'bogus',
	title: 'Поля запроса',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:220px;height:320px;',
			height: 320,width: 220,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:220px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:360px;width:236px;height:25px;',
			items:
			[
				{
					text:'КнопкаВыбратьНажатие',
				},
				{
					text:'СохранитьЗначения___',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});