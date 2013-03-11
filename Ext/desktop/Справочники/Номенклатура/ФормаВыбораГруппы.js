Ext.define('Справочники.Номенклатура.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 366,
	iconCls: 'bogus',
	title: 'Группы номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:350px;height:280px;',
			height: 280,width: 350,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:366px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});