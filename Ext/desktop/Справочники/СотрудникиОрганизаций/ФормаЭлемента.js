Ext.define('Справочники.СотрудникиОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 506,width: 700,
	iconCls: 'bogus',
	title: 'Сотрудники',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'МедицинскиеСтраховыеПолисы',
				},
				{
					text:'ВвестиДокумент',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'УДФОткрыть',
				},
				{
					text:'Подменю',
				},
				{
					text:'ПодменюПерейти',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:481px;width:700px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:480px;top:33px;width:212px;height:440px;',
			height: 440,width: 212,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:466px;height:440px;',
			height: 440,width: 466,
			items:
			[
				{
					title:'СтраницаНовыйСотрудник',
				},
				{
					title:'СтраницаСотрудник',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:650px;top:0px;width:50px;height:25px;',
			items:
			[
				{
					text:'ПереключениеСправкиФормы',
				},
			]
		},
	]
});