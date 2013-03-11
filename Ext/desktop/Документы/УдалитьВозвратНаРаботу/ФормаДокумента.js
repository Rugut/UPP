Ext.define('Документы.УдалитьВозвратНаРаботу.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 323,width: 444,
	iconCls: 'bogus',
	title: 'Возврат на работу',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:444px;height:25px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Подменю',
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
					text:'ВозвратНаРаботуОрганизацийВводНаОсновании',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:271px;width:342px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:145px;width:428px;height:120px;',
			height: 120,width: 428,
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
					text:'ДатаВозврата',
				},
				{
					text:'ЗаниматьСтавку',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:121px;width:428px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:298px;width:444px;height:25px;',
			items:
			[
				{
					text:'РазделительОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
	]
});