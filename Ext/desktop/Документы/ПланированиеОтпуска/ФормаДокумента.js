Ext.define('Документы.ПланированиеОтпуска.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 445,width: 500,
	iconCls: 'bogus',
	title: 'Планирование отпуска',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:97px;width:484px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие10',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие15',
				},
				{
					text:'УтвердитьВсе',
				},
				{
					text:'Действие16',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие12',
				},
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:121px;width:484px;height:220px;',
			height: 220,width: 484,
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
					text:'ДатаОкончания',
				},
				{
					text:'СостояниеУтверждения',
				},
				{
					text:'Примечание',
				},
			]
		},
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
			style: 'position:absolute;left:194px;top:33px;width:122px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'ПодменюВводНаОсновании',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ГрафикОтпусковОрганизацийВводНаОсновании',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПодменюДействия',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ПодменюВводНаОсновании',
				},
				{
					text:'Подменю',
				},
				{
					text:'ОтсутствиеНаРабочемМесте',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:394px;width:396px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:420px;width:500px;height:25px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'РазделительОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:370px;width:396px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
	]
});