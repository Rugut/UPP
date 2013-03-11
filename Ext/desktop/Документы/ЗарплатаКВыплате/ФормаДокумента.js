Ext.define('Документы.ЗарплатаКВыплате.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 524,width: 537,
	iconCls: 'bogus',
	title: 'Зарплата к выплате',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:118px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:218px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:118px;top:59px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:472px;width:433px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:222px;width:521px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие14',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Удалить',
				},
				{
					text:'УдалитьПустые',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие15',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:246px;width:521px;height:220px;',
			height: 220,width: 521,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Авторасчет',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'Физлицо',
				},
				{
					text:'Сумма',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:537px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюВвестиНаОсновании',
				},
				{
					text:'Подменю',
				},
				{
					text:'ОтменаПроведения',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Провести',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Перечитать',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:537px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:88px;width:521px;height:60px;',
			height: 60,width: 521,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:159px;width:116px;height:35px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:49px;top:341px;width:458px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'ВывестиСписок',
				},
				{
					text:'НастройкаСписка',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});