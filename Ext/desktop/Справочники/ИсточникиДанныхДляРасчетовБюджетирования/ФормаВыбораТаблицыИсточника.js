Ext.define('Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбораТаблицыИсточника',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:236px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'Описание поля',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:336px;width:236px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});