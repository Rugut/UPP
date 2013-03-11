Ext.define('Справочники.Бюджеты.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 376,
	iconCls: 'bogus',
	title: 'Группы бюджетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:360px;height:280px;',
			height: 280,width: 360,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:25px;',
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