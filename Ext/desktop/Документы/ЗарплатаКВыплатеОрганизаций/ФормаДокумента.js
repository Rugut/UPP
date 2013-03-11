Ext.define('Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 524,width: 750,
	iconCls: 'bogus',
	title: 'Зарплата к выплате',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:518px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:622px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:122px;top:33px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:518px;top:56px;width:224px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:472px;width:644px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:231px;width:734px;height:198px;',
			height: 198,width: 734,
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
				{
					text:'Начислено',
				},
				{
					text:'Удержано',
				},
				{
					text:'КомпенсацияЗаЗадержкуЗарплаты',
				},
				{
					text:'ВыплаченностьЗарплаты',
				},
				{
					text:'ВыплатаЗарегистрированаДокументом',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:750px;height:25px;',
			items:
			[
				{
					text:'ПодменюПерейти',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Действие3',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие2',
				},
				{
					text:'Провести',
				},
				{
					text:'Действие5',
				},
				{
					text:'Перечитать',
				},
				{
					text:'ОтменаПроведения',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'ПодменюВвестиНаОсновании',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:750px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Записать',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:122px;top:56px;width:303px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:207px;width:734px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'Выплатить',
				},
				{
					text:'Действие2',
				},
				{
					text:'ПодборПоУсловию',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Депонировать',
				},
				{
					text:'ВыплатитьВсе',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Добавить',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие',
				},
				{
					text:'УдалитьПустые',
				},
				{
					text:'ПодменюЗамены',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:734px;height:58px;',
			height: 58,width: 734,
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
			style: 'position:absolute;left:8px;top:149px;width:111px;height:36px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:38px;top:330px;width:500px;height:24px;',
			items:
			[
				{
					text:'Р2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'НеВыплачено',
				},
				{
					text:'Выплачено',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'НастройкаСписка',
				},
				{
					text:'Подменю',
				},
				{
					text:'Депонировано',
				},
				{
					text:'Действие6',
				},
				{
					text:'Р',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВывестиСписок',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});