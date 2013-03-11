Ext.define('Справочники.НастройкиВыполненияОбмена.ВыборДействий',
	{
	extend: 'Ext.window.Window',
	height: 266,width: 256,
	iconCls: 'bogus',
	title: 'Выбор действий',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:241px;width:256px;height:25px;',
			items:
			[
				{
					text:'КнопкаОК',
				},
				{
					text:'КнопкаОтмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:240px;height:225px;',
			height: 225,width: 240,
			columns:
			[
				{
					text:'Действие',
				},
			]
		},
	]
});