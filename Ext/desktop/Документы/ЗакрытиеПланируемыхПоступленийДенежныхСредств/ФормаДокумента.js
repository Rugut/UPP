Ext.define('Документы.ЗакрытиеПланируемыхПоступленийДенежныхСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 427,width: 672,
	iconCls: 'bogus',
	title: 'Закрытие планируемых поступлений денежных средств',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:351px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:142px;width:656px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:166px;width:656px;height:180px;',
			height: 180,width: 656,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДокументПланирования',
				},
				{
					text:'ОстатокПоступление',
				},
				{
					text:'ВалютаПоступление',
				},
				{
					text:'ОстатокРазмещение',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Контрагент',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель6',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:402px;width:672px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:444px;top:78px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:98px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйПоступление',
			style: 'position:absolute;left:444px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:444px;top:351px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода3',
			style: 'position:absolute;left:98px;top:375px;width:566px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборДатаНач',
			style: 'position:absolute;left:98px;top:78px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборДатаКон',
			style: 'position:absolute;left:207px;top:78px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:298px;top:78px;width:20px;height:19px;',
		},
	]
});