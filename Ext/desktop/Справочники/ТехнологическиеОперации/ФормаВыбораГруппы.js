Ext.define('Справочники.ТехнологическиеОперации.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 561,
	iconCls: 'bogus',
	title: 'Группы технологических операций',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:545px;height:259px;',
			height: 259,width: 545,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:561px;height:25px;',
			items:
			[
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});