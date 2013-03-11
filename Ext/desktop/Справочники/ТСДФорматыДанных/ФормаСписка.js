Ext.define('Справочники.ТСДФорматыДанных.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 413,
	iconCls: 'bogus',
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
			style: 'position:absolute;left:0px;top:0px;width:413px;height:25px;',
			items:
			[
			]
		},
	]
});