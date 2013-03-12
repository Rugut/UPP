Ext.define('Справочники.РегиональныеСегментыПоМСФО.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:348px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Региональные сегменты по МСФО',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:332px;height:280px;',
			height: 280,width: 332,
			columns:
			[
				{
					text:'',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:348px;height:25px;',
			items:
			[
			]
		},
	]
});