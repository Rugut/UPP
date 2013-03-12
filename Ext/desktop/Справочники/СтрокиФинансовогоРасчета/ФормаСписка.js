Ext.define('Справочники.СтрокиФинансовогоРасчета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:616px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'81',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Вид строки',
					width:'120',
				},
				{
					text:'Измерение',
					width:'120',
				},
				{
					text:'Формула',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:616px;height:25px;',
			items:
			[
				{
					text:'Переместить вверх',
				},
				{
					text:'Переместить вниз',
				},
			]
		},
	]
});