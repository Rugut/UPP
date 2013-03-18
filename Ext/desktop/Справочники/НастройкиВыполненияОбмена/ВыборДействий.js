Ext.define('Справочники.НастройкиВыполненияОбмена.ВыборДействий',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:256px;height:266px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор действий',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:241px;width:256px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Отмена',
				},
				{
					text:'ОК',
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
					width:'241',
				},
			]
		},
	]
});