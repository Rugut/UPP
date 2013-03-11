Ext.define('Обработки.ЗагрузкаДанныхИзТабличногоДокумента.Форма',
	{
	extend: 'Ext.window.Window',
	height: 573,width: 683,
	iconCls: 'bogus',
	title: 'Загрузка данных из табличного документа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:548px;width:683px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Загрузить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:56px;width:667px;height:466px;',
			height: 466,width: 667,
			items:
			[
				{
					title:'ТабличныйДокумент',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:653px;height:24px;',
			items:
			[
				{
					text:'Обновить',
				},
				{
					text:'КонтрольЗаполнения',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПредыдущееПримечание',
				},
				{
					text:'Открыть',
				},
				{
					text:'СледующееПримечание',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Сохранить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:398px;top:6px;width:214px;height:24px;',
			items:
			[
				{
					text:'ВыбратьЗначение',
				},
			]
		},
					]
				},
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:30px;width:653px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлажки',
				},
				{
					text:'РучнаяНумерацияКолонокТабличногоДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'События',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПеренумероватьКолонки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Перечитать',
				},
				{
					text:'СохранитьЗначенияВФайл',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'НумерацияКолонок',
				},
				{
					text:'ВосстановитьЗначенияИзФайла',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:54px;width:653px;height:386px;',
			height: 386,width: 653,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'ПредставлениеРеквизита',
				},
				{
					text:'ИмяРеквизита',
				},
				{
					text:'МожетБытьПолемПоиска',
				},
				{
					text:'ПолеПоиска',
				},
				{
					text:'ДоступноеОписаниеТипов',
				},
				{
					text:'ОписаниеТипов',
				},
				{
					text:'РежимЗагрузки',
				},
				{
					text:'НомерКолонки',
				},
				{
					text:'ЗначениеПоУмолчанию',
				},
				{
					text:'Выражение',
				},
				{
					text:'ИскатьПо',
				},
				{
					text:'СвязьПоВладельцу',
				},
				{
					text:'СвязьПоТипу',
				},
				{
					text:'ЭлементСвязиПоТипу',
				},
				{
					text:'ШиринаКолонки',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПерваяСтрокаДанныхТабличногоДокумента',
			style: 'position:absolute;left:249px;top:6px;width:41px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:632px;height:19px;',
			height: 19,width: 632,
			items:
			[
				{
					title:'ЗагрузкаВСправочник',
					items:
					[
					]
				},
				{
					title:'ЗагрузкаВТабличнуюЧасть',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СсылкаИсточника',
			style: 'position:absolute;left:95px;top:0px;width:247px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТабличнаяЧастьИсточника',
			style: 'position:absolute;left:439px;top:0px;width:193px;height:19px;',
		},
					]
				},
				{
					title:'ЗагрузкаВРегистрСведений',
					items:
					[
					]
				},
			]
		},
	]
});