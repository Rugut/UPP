Ext.define('Справочники.СтатьиБюджета.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 324,
	iconCls: 'bogus',
	title: 'Справочник Статьи бюджета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:308px;height:280px;',
			height: 280,width: 308,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:324px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});