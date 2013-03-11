Ext.define('Справочники.СтатьиАналитическогоБаланса.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 364,
	iconCls: 'bogus',
	title: 'Справочник Статьи аналитического баланса',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:348px;height:320px;',
			height: 320,width: 348,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:364px;height:25px;',
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