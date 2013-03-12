Ext.define('Справочники.ВидыРаспределенияПоПроектам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:548px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Виды распределения по проектам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:532px;height:280px;',
			height: 280,width: 532,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'72',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Метод распределения',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:548px;height:25px;',
			items:
			[
			]
		},
	]
});