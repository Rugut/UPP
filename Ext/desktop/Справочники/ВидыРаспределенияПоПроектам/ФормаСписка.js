Ext.define('Справочники.ВидыРаспределенияПоПроектам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 548,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'МетодРаспределения',
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