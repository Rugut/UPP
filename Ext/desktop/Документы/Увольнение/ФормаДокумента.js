Ext.define('Документы.Увольнение.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 404,width: 410,
	iconCls: 'bogus',
	title: 'Увольнение',
	
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:410px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'УвольнениеИзОрганизацийВводНаОсновании',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
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
			style: 'position:absolute;left:96px;top:352px;width:306px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:394px;height:220px;',
			height: 220,width: 394,
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
					text:'ДатаУвольнения',
				},
				{
					text:'ПричинаУвольнения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:394px;height:24px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Заполнить',
				},
				{
					text:'ЗаполнитьУволеннымиИзОрганизаций',
				},
				{
					text:'Действие11',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие15',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие17',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие16',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие9',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:379px;width:410px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
	]
});