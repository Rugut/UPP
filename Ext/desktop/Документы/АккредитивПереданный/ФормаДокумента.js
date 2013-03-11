Ext.define('Документы.АккредитивПереданный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 472,width: 657,
	iconCls: 'bogus',
	title: 'Аккредитив переданный',
	
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:128px;width:641px;height:244px;',
			height: 244,width: 641,
			items:
			[
				{
					title:'СтраницаОсновная',
				},
				{
					title:'СтраницаУсловияПлатежа',
				},
				{
					title:'СтраницаПечать',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Подменю3',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'КлиентБанк',
				},
				{
					text:'НастройкаУСН',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:420px;width:557px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:447px;width:657px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:429px;top:396px;width:220px;height:19px;',
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
			style: 'position:absolute;left:92px;top:396px;width:220px;height:19px;',
		},
	]
});