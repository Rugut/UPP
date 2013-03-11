Ext.define('Справочники.СтрокиФинансовогоРасчета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 616,
	iconCls: 'bogus',
	title: 'Строки финансового расчета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:600px;height:320px;',
			height: 320,width: 600,
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
					text:'ВидСтроки',
				},
				{
					text:'Измерение',
				},
				{
					text:'Формула',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:616px;height:25px;',
			items:
			[
				{
					text:'КоманднаяПанельПереместитьВверх1',
				},
				{
					text:'КоманднаяПанельПереместитьВниз1',
				},
			]
		},
	]
});