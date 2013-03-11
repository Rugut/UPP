Ext.define('Справочники.БанковскиеСчета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 608,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'Банк',
				},
				{
					text:'ВалютаДенежныхСредств',
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