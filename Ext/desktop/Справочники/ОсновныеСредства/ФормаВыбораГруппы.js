Ext.define('Справочники.ОсновныеСредства.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 408,
	iconCls: 'bogus',
	title: 'Группы основных средств',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:392px;height:280px;',
			height: 280,width: 392,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:408px;height:25px;',
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