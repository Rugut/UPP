Ext.define('Справочники.ГруппыЗаявокКандидатов.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 558,
	iconCls: 'bogus',
	title: 'Группы кандидатов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:542px;height:259px;',
			height: 259,width: 542,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:558px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействияФормыВыбрать',
				},
			]
		},
	]
});