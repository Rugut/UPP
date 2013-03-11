Ext.define('Документы.КомандировкиОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 652,
	iconCls: 'bogus',
	title: 'Командировки организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:428px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'ДокументыНачисления',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:268px;top:455px;width:384px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:244px;width:636px;height:140px;',
			height: 140,width: 636,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТабельныйНомерСтрока',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'ОсвобождатьСтавку',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
				{
					text:'ВремяНахожденияВПути',
				},
				{
					text:'НапомнитьПоЗавершении',
				},
				{
					text:'Цель',
				},
				{
					text:'ИсточникФинансирования',
				},
				{
					text:'Сторно',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:220px;width:636px;height:24px;',
			items:
			[
				{
					text:'Скопировать',
				},
				{
					text:'Действие13',
				},
				{
					text:'Удалить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие14',
				},
				{
					text:'Подбор',
				},
				{
					text:'Добавить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие16',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Изменить',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие15',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:96px;top:105px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:96px;top:129px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОснованиеКомандировки',
			style: 'position:absolute;left:96px;top:177px;width:548px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:431px;top:389px;width:83px;height:33px;',
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
			style: 'position:absolute;left:515px;top:389px;width:129px;height:33px;',
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
			style: 'position:absolute;left:0px;top:455px;width:268px;height:25px;',
			items:
			[
				{
					text:'ВесьДокумент',
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
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'Исправить',
				},
				{
					text:'СписокСотрудников',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:49px;top:331px;width:389px;height:24px;',
			items:
			[
				{
					text:'Удалить',
				},
				{
					text:'Действие12',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие14',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие9',
				},
				{
					text:'Изменить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});