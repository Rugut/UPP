Ext.define('Справочники.РегламентированныеОтчеты.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 308,
	iconCls: 'bogus',
	title: 'Группы регламентированных отчетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:292px;height:280px;',
			height: 280,width: 292,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:308px;height:25px;',
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