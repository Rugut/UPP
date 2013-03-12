Ext.define('Справочники.СтрокиФинансовогоРасчета.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:742px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Строки финансового расчета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:560px;height:280px;',
			height: 280,width: 560,
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});