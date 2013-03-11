Ext.define('Документы.ОтражениеЗарплатыВУпрУчете.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 456,width: 566,
	iconCls: 'bogus',
	title: 'Отражение зарплаты в упр учете',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:338px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:438px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:338px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:404px;width:464px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:222px;width:550px;height:24px;',
			items:
			[
				{
					text:'Действие12',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие13',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:246px;width:550px;height:150px;',
			height: 150,width: 550,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'КатегорияЗатраты',
				},
				{
					text:'Подразделение',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'СпособРаспределенияЗатрат',
				},
				{
					text:'ОбъектСтроительства',
				},
				{
					text:'Сумма',
				},
				{
					text:'Проект',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:431px;width:566px;height:25px;',
			items:
			[
				{
					text:'Действие',
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
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:566px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'РедактироватьКодНомер',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:550px;height:92px;',
			height: 92,width: 550,
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
			style: 'position:absolute;left:8px;top:195px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОчистить',
			text: 'Очистить',
			style: 'position:absolute;left:113px;top:195px;width:80px;height:22px;',
		},
	]
});