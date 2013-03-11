Ext.define('Документы.ПлатежноеПоручениеИсходящее.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 485,width: 658,
	iconCls: 'bogus',
	title: 'Платежное поручение исходящее',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:92px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:192px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:80px;width:220px;height:19px;',
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
			style: 'position:absolute;left:92px;top:104px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетКонтрагента',
			style: 'position:absolute;left:429px;top:104px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОчередностьПлатежа',
			style: 'position:absolute;left:429px;top:56px;width:57px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:128px;width:642px;height:257px;',
			height: 257,width: 642,
			items:
			[
				{
					title:'СтраницаОсновная',
				},
				{
					title:'СтраницаПечать',
				},
				{
					title:'СтраницаПеречислениеВБюджет',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'НастройкаУСН',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю1',
				},
				{
					text:'КлиентБанк',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа',
			style: 'position:absolute;left:562px;top:56px;width:87px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:460px;width:658px;height:25px;',
			items:
			[
				{
					text:'РазделительОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'Печать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Закрыть1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:56px;width:304px;height:19px;',
			height: 19,width: 304,
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
			name: 'Подразделение',
			style: 'position:absolute;left:92px;top:409px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:429px;top:409px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:433px;width:557px;height:19px;',
		},
	]
});