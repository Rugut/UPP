Ext.define('Справочники.СтатьиЗатрат.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 368,
	iconCls: 'bogus',
	title: 'Группы статей затрат',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:352px;height:259px;',
			height: 259,width: 352,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:368px;height:25px;',
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