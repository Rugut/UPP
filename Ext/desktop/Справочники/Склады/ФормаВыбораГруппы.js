Ext.define('Справочники.Склады.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 304,
	iconCls: 'bogus',
	title: 'Группы складов (мест хранения)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:288px;height:280px;',
			height: 280,width: 288,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:25px;',
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