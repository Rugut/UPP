Ext.define('Справочники.Кассы.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:304px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы касс',
	
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
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
			]
		},
	]
});