Ext.define('Справочники.ДоходыЕСН.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:487px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Способы отражения доходов в учете ЕСН',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:471px;height:280px;',
			height: 280,width: 471,
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
					text:'ФБ, взносы в ПФР',
					width:'107',
				},
				{
					text:'ФОМС',
					width:'40',
				},
				{
					text:'ФСС',
					width:'40',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:487px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});