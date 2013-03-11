Ext.define('Справочники.СтрокиФинансовогоРасчета.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 742,
	iconCls: 'bogus',
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});