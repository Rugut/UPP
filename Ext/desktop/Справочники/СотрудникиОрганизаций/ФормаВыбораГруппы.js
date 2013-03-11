Ext.define('Справочники.СотрудникиОрганизаций.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 275,
	iconCls: 'bogus',
	title: 'Сотрудники',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:259px;height:259px;',
			height: 259,width: 259,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:275px;height:25px;',
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