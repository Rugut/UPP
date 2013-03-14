Ext.define('Справочники.КлассификаторОКОПФ.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:476px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Классификатор ОКОПФ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:460px;height:280px;',
			height: 280,width: 460,
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
					width:'80',
				},
				{
					text:'Наименование полное',
					width:'220',
				},
				{
					text:'Быстрый выбор',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:476px;height:25px;',
			items:
			[
				'-',
				{
					text:'',
				},
			]
		},
	]
});