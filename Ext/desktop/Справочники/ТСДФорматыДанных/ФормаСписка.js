Ext.define('Справочники.ТСДФорматыДанных.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:413px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Форматы выгрузки для терминалов сбора данных',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:397px;height:259px;',
			height: 259,width: 397,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'35',
				},
				{
					text:'Наименование',
					width:'175',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:413px;height:25px;',
			items:
			[
			]
		},
	]
});