Ext.define('Справочники.ДоговорыКонтрагентов.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 312,width: 376,
	iconCls: 'bogus',
	title: 'Группы договоров взаиморасчетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:360px;height:272px;',
			height: 272,width: 360,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:25px;',
			items:
			[
				{
					text:'Разделитель8',
				},
				{
					text:'Действие14',
				},
			]
		},
	]
});