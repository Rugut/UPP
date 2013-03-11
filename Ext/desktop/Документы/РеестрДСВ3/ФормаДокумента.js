Ext.define('Документы.РеестрДСВ3.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 498,width: 765,
	iconCls: 'bogus',
	title: 'Реестр застрахованных лиц (форма ДСВ-3)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:765px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Подменю',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:473px;width:765px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'ПроверитьВCheckXML',
				},
				{
					text:'Файл',
				},
				{
					text:'РазделительПечать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'НаДискетку',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:446px;width:663px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:749px;height:41px;',
			height: 41,width: 749,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:749px;height:35px;',
			height: 35,width: 749,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:749px;height:123px;',
			height: 123,width: 749,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:105px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:446px;top:25px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:105px;top:25px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПлатежногоПоручения',
			style: 'position:absolute;left:54px;top:97px;width:271px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежногоПоручения',
			style: 'position:absolute;left:357px;top:97px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсполненияПлатежногоПоручения',
			style: 'position:absolute;left:591px;top:97px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:446px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:546px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки',
			style: 'position:absolute;left:105px;top:49px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:197px;width:749px;height:244px;',
			height: 244,width: 749,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:749px;height:204px;',
			height: 204,width: 749,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'Фамилия',
				},
				{
					text:'Имя',
				},
				{
					text:'Отчество',
				},
				{
					text:'СтраховойНомерПФР',
				},
				{
					text:'ВзносовРаботника',
				},
				{
					text:'ВзносовРаботодателя',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:749px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеЗаполнить',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие14',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие17',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'УдалитьПустые',
				},
				{
					text:'Рассчитать',
				},
				{
					text:'Действие13',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие10',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие11',
				},
				{
					text:'Подбор',
				},
				{
					text:'СписокРаботников',
				},
			]
		},
					]
				},
			]
		},
	]
});