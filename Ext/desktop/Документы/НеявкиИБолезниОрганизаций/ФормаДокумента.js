Ext.define('Документы.НеявкиИБолезниОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 367,width: 504,
	iconCls: 'bogus',
	title: 'Неявки и болезни',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:92px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:192px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:315px;width:404px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:504px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие6',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'ДокументыНачисления',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:268px;top:342px;width:236px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие',
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
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:149px;width:488px;height:120px;',
			height: 120,width: 488,
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
					text:'ДатаНачала',
				},
				{
					text:'ПричинаОтсутствия',
				},
				{
					text:'ОсвобождатьСтавку',
				},
				{
					text:'Сторно',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:124px;width:488px;height:24px;',
			items:
			[
				{
					text:'Изменить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Добавить',
				},
				{
					text:'Подбор',
				},
				{
					text:'Удалить',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие8',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:92px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:283px;top:276px;width:83px;height:33px;',
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
			style: 'position:absolute;left:367px;top:276px;width:129px;height:33px;',
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
			style: 'position:absolute;left:0px;top:342px;width:268px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'ВесьДокумент',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СписокСотрудников',
				},
				{
					text:'Исправить',
				},
				{
					text:'ТекущийСотрудник',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:66px;top:213px;width:389px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие12',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие14',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие13',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
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