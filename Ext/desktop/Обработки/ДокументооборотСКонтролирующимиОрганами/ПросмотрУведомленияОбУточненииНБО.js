Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрУведомленияОбУточненииНБО',
	{
	extend: 'Ext.window.Window',
	height: 696,width: 662,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:671px;width:662px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:646px;height:654px;',
			height: 654,width: 646,
			items:
			[
				{
					title:'РезультатыПроверки',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:54px;width:632px;height:573px;',
			height: 573,width: 632,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:71px;width:632px;height:502px;',
			height: 502,width: 632,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТекстСообщения',
				},
				{
					text:'ЭтоОшибка',
				},
				{
					text:'Местоположение',
				},
				{
					text:'ОшибочноеЗначение',
				},
				{
					text:'КодОшибки',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:348px;width:632px;height:95px;',
			height: 95,width: 632,
			items:
			[
				{
					title:'ЮрЛицо',
					items:
					[
					]
				},
				{
					title:'ФизЛицо',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
	]
});