Ext.define('Справочники.БанковскиеСчета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Банковские счета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:592px;height:320px;',
			height: 320,width: 592,
			columns:
			[
				{
					text:' ',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Банк',
					width:'220',
				},
				{
					text:'Валюта счета',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
			]
		},
	]
});