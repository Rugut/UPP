Ext.define('Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияВыгрузки',
	{
	extend: 'Ext.window.Window',
	height: 461,width: 496,
	iconCls: 'bogus',
	title: 'Выполнение выгрузки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:436px;width:496px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Назад',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Далее',
				},
				{
					text:'Действие1',
				},
				{
					text:'Готово',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:480px;height:400px;',
			height: 400,width: 480,
			items:
			[
				{
					title:'ЗаполнениеТаблицыПолей',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:480px;height:360px;',
			height: 360,width: 480,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Использование',
				},
				{
					text:'Тип',
				},
				{
					text:'СинонимПоля',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:480px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Действие8',
				},
			]
		},
					]
				},
				{
					title:'НастройкаВыгрузкиЗначений',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:480px;height:360px;',
			height: 360,width: 480,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОбъектВыгрузки',
				},
				{
					text:'Владелец',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:480px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'ЗаполнитьВсеЭлементы',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Очистить',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
			]
		},
					]
				},
			]
		},
	]
});