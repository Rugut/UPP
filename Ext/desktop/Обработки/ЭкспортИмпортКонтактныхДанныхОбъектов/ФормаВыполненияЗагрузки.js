Ext.define('Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияЗагрузки',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 767,
	iconCls: 'bogus',
	title: 'Выполнение загрузки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:767px;height:25px;',
			items:
			[
				{
					text:'Далее',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Назад',
				},
				{
					text:'Действие1',
				},
				{
					text:'Готово',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:7px;width:752px;height:360px;',
			height: 360,width: 752,
			items:
			[
				{
					title:'ЗаполнениеТаблицыПолей',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:752px;height:320px;',
			height: 320,width: 752,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ИмяРеквизита',
				},
				{
					text:'НазначениеРеквизита1С',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:752px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'НастройкаФормированияНаименованияОбъекта',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
			]
		},
					]
				},
				{
					title:'НастройкаПоискаОбъектов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:752px;height:320px;',
			height: 320,width: 752,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Использование',
				},
				{
					text:'Значение1С',
				},
				{
					text:'Условие',
				},
				{
					text:'ЗначениеФайла',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:752px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Действие7',
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
					title:'НастройкаЗагрузкиЗначений',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:69px;width:752px;height:291px;',
			height: 291,width: 752,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Использование',
				},
				{
					text:'ПредставлениеОбъектаФайла',
				},
				{
					text:'ПредставлениеОбъекта1С',
				},
				{
					text:'Объект1С',
				},
				{
					text:'ЮрФизЛицо',
				},
				{
					text:'Владелец',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:45px;width:752px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'ПосмотретьИнформациюИзФайлаПоТекущейСтроке',
				},
				{
					text:'Действие8',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РодительДляЗагрузки',
			style: 'position:absolute;left:200px;top:21px;width:252px;height:19px;',
		},
					]
				},
			]
		},
	]
});