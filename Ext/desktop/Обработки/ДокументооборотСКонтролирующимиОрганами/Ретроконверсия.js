Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Ретроконверсия',
	{
	extend: 'Ext.window.Window',
	height: 501,width: 465,
	iconCls: 'bogus',
	title: 'Ретроконверсия - параметры ответа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:476px;width:465px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:128px;width:449px;height:340px;',
			height: 340,width: 449,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:69px;width:449px;height:271px;',
			height: 271,width: 449,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:449px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлажкиУВсех',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СнятьФлажкиУВсех',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Открыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:449px;height:247px;',
			height: 247,width: 449,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Файл',
				},
			]
		},
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