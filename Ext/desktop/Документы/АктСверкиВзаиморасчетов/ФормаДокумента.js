Ext.define('Документы.АктСверкиВзаиморасчетов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 441,width: 657,
	iconCls: 'bogus',
	title: 'Акт сверки взаиморасчетов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:416px;width:657px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Печать',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
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
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:413px;top:82px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:96px;top:106px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:413px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:389px;width:553px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:530px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:132px;width:641px;height:250px;',
			height: 250,width: 641,
			items:
			[
				{
					title:'ПоДаннымОрганизации',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:4px;top:0px;width:630px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьПоДаннымУправленческогоУчета',
				},
				{
					text:'ЗаполнитьПоДаннымБухгалтерскогоУчета',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:24px;width:631px;height:176px;',
			height: 176,width: 631,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Дата',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'Сделка',
				},
				{
					text:'Документ',
				},
				{
					text:'Представление',
				},
				{
					text:'Дебет',
				},
				{
					text:'Кредит',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокНаНачало',
			style: 'position:absolute;left:146px;top:207px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокНаКонец',
			style: 'position:absolute;left:280px;top:207px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Расхождение',
			style: 'position:absolute;left:569px;top:207px;width:66px;height:19px;',
		},
					]
				},
				{
					title:'ПоДаннымКонтрагента',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:24px;width:631px;height:176px;',
			height: 176,width: 631,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Дата',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'Сделка',
				},
				{
					text:'Документ',
				},
				{
					text:'Представление',
				},
				{
					text:'Дебет',
				},
				{
					text:'Кредит',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:4px;top:0px;width:631px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ДействиеЗаполнитьПоДаннымОрганизации',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокНаНачалоКонтрагент',
			style: 'position:absolute;left:148px;top:207px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокНаКонецКонтрагент',
			style: 'position:absolute;left:282px;top:207px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасхождениеКонтрагент',
			style: 'position:absolute;left:568px;top:207px;width:67px;height:19px;',
		},
					]
				},
				{
					title:'СчетаРасчетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:627px;height:178px;',
			height: 178,width: 627,
			columns:
			[
				{
					text:'УчаствуетВРасчетах',
				},
				{
					text:'Счет',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:627px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьПоУмолчанию',
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:97px;top:6px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительОрганизаци',
			style: 'position:absolute;left:161px;top:53px;width:472px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительКонтрагента',
			style: 'position:absolute;left:161px;top:77px;width:472px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:630px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:413px;top:58px;width:96px;height:19px;',
		},
	]
});