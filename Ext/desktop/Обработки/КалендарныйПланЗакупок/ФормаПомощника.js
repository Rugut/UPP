Ext.define('Обработки.КалендарныйПланЗакупок.ФормаПомощника',
	{
	extend: 'Ext.window.Window',
	height: 430,width: 780,
	iconCls: 'bogus',
	title: 'Помощник заполнения календарного плана закупок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:405px;width:780px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Отмена',
				},
				{
					text:'Назад',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Готово',
				},
				{
					text:'Далее',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:153px;top:8px;width:619px;height:389px;',
			height: 389,width: 619,
			items:
			[
				{
					title:'Номенклатура',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:619px;height:349px;',
			height: 349,width: 619,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'КоличествоЗаказать',
				},
				{
					text:'КоличествоПлана',
				},
				{
					text:'КоличествоЗаказа',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:619px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'УстановитьФлажки',
				},
			]
		},
					]
				},
				{
					title:'Настройки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:140px;width:619px;height:249px;',
			height: 249,width: 619,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'ПредставлениеФильтра',
				},
				{
					text:'ВидСравненияФильтра',
				},
				{
					text:'ЗначениеФильтра',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:115px;width:619px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияНадежность',
			style: 'position:absolute;left:258px;top:45px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияСрокВыполненияЗаказа',
			style: 'position:absolute;left:258px;top:69px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеНадежность',
			style: 'position:absolute;left:381px;top:45px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеСрокВыполненияЗаказа',
			style: 'position:absolute;left:381px;top:69px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеСрокВыполненияЗаказаНач',
			style: 'position:absolute;left:381px;top:69px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеСрокВыполненияЗаказаКон',
			style: 'position:absolute;left:502px;top:69px;width:117px;height:19px;',
		},
					]
				},
				{
					title:'Результат',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:619px;height:368px;',
			height: 368,width: 619,
			columns:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:511px;top:365px;width:108px;height:24px;',
			items:
			[
				{
					text:'ОткрытьДоговор',
				},
				{
					text:'ОткрытьУсловияПоставки',
				},
				{
					text:'ИсторияПокупок',
				},
				{
					text:'АнализУсловийПоставки',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:138px;height:389px;',
			height: 389,width: 138,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});