Ext.define('Справочники.ТехнологическиеКартыПроизводства.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 302,
	iconCls: 'bogus',
	title: 'Группы технологических карт производства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:286px;height:280px;',
			height: 280,width: 286,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:302px;height:25px;',
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