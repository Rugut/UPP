Ext.define('Справочники.Банки.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 316,
	iconCls: 'bogus',
	title: 'Группы банков',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:300px;height:320px;',
			height: 320,width: 300,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:316px;height:25px;',
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