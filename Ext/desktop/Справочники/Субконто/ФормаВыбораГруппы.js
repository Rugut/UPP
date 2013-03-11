Ext.define('Справочники.Субконто.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 312,
	iconCls: 'bogus',
	title: 'Группы субконто',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:296px;height:320px;',
			height: 320,width: 296,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:312px;height:25px;',
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