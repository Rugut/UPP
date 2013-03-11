Ext.define('Документы.Событие.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 430,width: 618,
	iconCls: 'bogus',
	title: 'Документ',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:99px;top:33px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:192px;top:33px;width:128px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:99px;top:354px;width:511px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:618px;height:25px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'НаписатьПисьмо',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Подменю',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Файлы',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие14',
				},
				{
					text:'ПодменюВидовСобытия',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие11',
				},
				{
					text:'ПодменюТиповСобытия',
				},
				{
					text:'НаписатьПисьмо',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие13',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ИсточникиИнформацииПоКонтрагенту',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель11',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДокументыКонтрагента',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Файлы',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'СписокСобытийКонтрагента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:405px;width:618px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:99px;top:378px;width:511px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОбъекта',
			style: 'position:absolute;left:422px;top:33px;width:188px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:83px;width:602px;height:266px;',
			height: 266,width: 602,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоСобытия',
			style: 'position:absolute;left:414px;top:6px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОкончаниеСобытия',
			style: 'position:absolute;left:414px;top:30px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СодержаниеСобытия',
			style: 'position:absolute;left:90px;top:126px;width:504px;height:114px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеСобытия',
			style: 'position:absolute;left:90px;top:102px;width:504px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:304px;height:96px;',
			height: 96,width: 304,
			items:
			[
				{
					title:'Контрагенты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:84px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактноеЛицо',
			style: 'position:absolute;left:84px;top:48px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактнаяИнформацияКонтактногоЛица',
			style: 'position:absolute;left:84px;top:72px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактнаяИнформацияКонтрагента',
			style: 'position:absolute;left:84px;top:24px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'Прочие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактноеЛицо1',
			style: 'position:absolute;left:84px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактнаяИнформацияКонтактногоЛица1',
			style: 'position:absolute;left:84px;top:24px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'Кандидаты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактноеЛицо2',
			style: 'position:absolute;left:84px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактнаяИнформацияКонтактногоЛица2',
			style: 'position:absolute;left:84px;top:24px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:322px;top:78px;width:272px;height:24px;',
			height: 24,width: 272,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсточникИнформацииПриОбращении',
			style: 'position:absolute;left:92px;top:0px;width:180px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Важность',
			style: 'position:absolute;left:90px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Основание',
			style: 'position:absolute;left:90px;top:6px;width:504px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Помещение',
			style: 'position:absolute;left:414px;top:56px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Территория',
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:414px;top:81px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Предмет',
			style: 'position:absolute;left:90px;top:31px;width:504px;height:19px;',
		},
					]
				},
				{
					title:'Участники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:252px;height:194px;',
			height: 194,width: 252,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Сотрудник',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:263px;top:46px;width:331px;height:194px;',
			height: 194,width: 331,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Лицо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:252px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:263px;top:22px;width:331px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СостояниеСобытия',
			style: 'position:absolute;left:422px;top:58px;width:188px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаСобытия',
			style: 'position:absolute;left:99px;top:58px;width:221px;height:19px;',
		},
	]
});