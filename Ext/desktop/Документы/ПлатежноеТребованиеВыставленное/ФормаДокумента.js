Ext.define('Документы.ПлатежноеТребованиеВыставленное.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 477,width: 657,
	iconCls: 'bogus',
	title: 'Платежное требование выставленное',
	
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
			style: 'position:absolute;left:8px;top:128px;width:641px;height:247px;',
			height: 247,width: 641,
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
					text:'ПодменюВидаОперации',
				},
				{
					text:'НастройкаУСН',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'КлиентБанк',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:452px;width:657px;height:25px;',
			items:
			[
				{
					text:'РазделительОК',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
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
			name: 'ОчередностьПлатежа',
			style: 'position:absolute;left:429px;top:56px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа',
			style: 'position:absolute;left:562px;top:56px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:92px;top:401px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:429px;top:401px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:425px;width:557px;height:19px;',
		},
	]
});