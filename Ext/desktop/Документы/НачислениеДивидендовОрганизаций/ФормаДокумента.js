Ext.define('Документы.НачислениеДивидендовОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 469,width: 651,
	iconCls: 'bogus',
	title: 'Начисление дивидендов организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:423px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:523px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:417px;width:547px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:423px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:651px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'РассчитатьВсе',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'РассчитатьДивиденды',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Рассчитать',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'РассчитатьНДФЛ',
				},
				{
					text:'Действие6',
				},
				{
					text:'СоздатьЗарплатаКВыплате',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:444px;width:651px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:197px;width:635px;height:180px;',
			height: 180,width: 635,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'Физлицо',
				},
				{
					text:'КоличествоАкций',
				},
				{
					text:'Результат',
				},
				{
					text:'ВычетПоНДФЛ',
				},
				{
					text:'НДФЛ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:173px;width:635px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подбор',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДивидендыОбщаяСумма',
			style: 'position:absolute;left:111px;top:107px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДивидендыПолученные',
			style: 'position:absolute;left:464px;top:107px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДивидендыНаОднуАкцию',
			style: 'position:absolute;left:111px;top:131px;width:100px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:431px;top:380px;width:83px;height:33px;',
			height: 33,width: 83,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:514px;top:380px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:444px;width:257px;height:25px;',
			items:
			[
				{
					text:'ВесьДокумент',
				},
				{
					text:'Исправить',
				},
				{
					text:'СписокСотрудников',
				},
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ТекущийСотрудник',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:241px;width:635px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
			]
		},
	]
});