Ext.define('Справочники.ОбъектыСтроительства.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 677,
	iconCls: 'bogus',
	title: 'Объекты строительства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:229px;top:33px;width:440px;height:280px;',
			height: 280,width: 440,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:677px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:217px;height:280px;',
			height: 280,width: 217,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
	]
});