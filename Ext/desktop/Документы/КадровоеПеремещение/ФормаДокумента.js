Ext.define('Документы.КадровоеПеремещение.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 390,width: 652,
	iconCls: 'bogus',
	title: 'Кадровое перемещение',
	
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
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю3',
				},
				{
					text:'КадровоеПеремещениеОрганизацийВводНаОсновании',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель6',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:338px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:365px;width:652px;height:25px;',
			items:
			[
				{
					text:'РазделительОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'ОК',
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
			style: 'position:absolute;left:424px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:636px;height:271px;',
			height: 271,width: 636,
			items:
			[
				{
					title:'Работники',
				},
				{
					title:'Начисления',
				},
				{
					title:'Взыскания',
				},
			]
		},
	]
});