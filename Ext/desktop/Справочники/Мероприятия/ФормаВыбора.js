Ext.define('Справочники.Мероприятия.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:470px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Мероприятия предприятия',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:454px;height:280px;',
			height: 280,width: 454,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Дата начала',
					width:'80',
				},
				{
					text:'Дата окончания',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:470px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
			]
		},
	]
});