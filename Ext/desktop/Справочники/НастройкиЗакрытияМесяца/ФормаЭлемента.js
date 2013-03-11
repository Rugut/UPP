Ext.define('Справочники.НастройкиЗакрытияМесяца.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 587,width: 850,
	iconCls: 'bogus',
	title: 'Настройка закрытия месяца',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:850px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'ОтчетыРегламентныхОпераций',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие6',
				},
				{
					text:'ПереключениеСправкиФормы',
				},
				{
					text:'ДокументыРегламентныхОпераций',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:562px;width:850px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:834px;height:521px;',
			height: 521,width: 834,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});