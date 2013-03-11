Ext.define('Документы.ИнкассовоеПоручениеПолученное.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 456,width: 657,
	iconCls: 'bogus',
	title: 'Инкассовое поручение полученное',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОрганизации',
			style: 'position:absolute;left:429px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:104px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетКонтрагента',
			style: 'position:absolute;left:429px;top:104px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю3',
				},
				{
					text:'КлиентБанк',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Подменю1',
				},
				{
					text:'НастройкаУСН',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:431px;width:657px;height:25px;',
			items:
			[
				{
					text:'Закрыть1',
				},
				{
					text:'Печать',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'РазделительЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:152px;width:641px;height:202px;',
			height: 202,width: 641,
			items:
			[
				{
					title:'ПлатежПоОднойСделке',
				},
				{
					title:'ПлатежПоНесколькимСделкам',
				},
				{
					title:'ПлатежПрочие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:96px;top:128px;width:100px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:336px;top:56px;width:313px;height:19px;',
			height: 19,width: 313,
			items:
			[
				{
					title:'СтраницаОплата',
				},
				{
					title:'СтраницаЧастичнаяОплата',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВходящегоДокумента',
			style: 'position:absolute;left:196px;top:56px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящегоДокумента',
			style: 'position:absolute;left:96px;top:56px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:380px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:429px;top:380px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:404px;width:553px;height:19px;',
		},
	]
});