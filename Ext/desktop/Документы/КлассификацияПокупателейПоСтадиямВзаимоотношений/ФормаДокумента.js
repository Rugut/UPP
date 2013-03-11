Ext.define('Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 430,width: 660,
	iconCls: 'bogus',
	title: 'Классификация покупателей по стадиям взаимоотношений',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:62px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:162px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:405px;width:660px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:644px;height:290px;',
			height: 290,width: 644,
			items:
			[
				{
					title:'Распределение',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:537px;top:6px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Периодичность',
			style: 'position:absolute;left:97px;top:6px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПериодов',
			style: 'position:absolute;left:358px;top:6px;width:66px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:32px;width:630px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Перейти',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Перераспределить',
				},
				{
					text:'ДокументыПоКонтрагенту',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'ОтключитьОтбор',
				},
				{
					text:'Взаиморасчеты',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ОтборПоТекущемуЗначению',
				},
				{
					text:'Действие2',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Действие1',
				},
				{
					text:'УстановитьОтборИСортировкуСписка___',
				},
				{
					text:'История',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:56px;width:630px;height:208px;',
			height: 208,width: 630,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'СтадияВзаимоотношений',
				},
				{
					text:'XYZКлассификация',
				},
				{
					text:'Контрагент',
				},
				{
					text:'КоэффициентВариации',
				},
				{
					text:'ЗначениеПараметра',
				},
				{
					text:'ПроцентПараметра',
				},
				{
					text:'МенеджерКонтрагента',
				},
				{
					text:'СтадияВзаимоотношенийСтарая',
				},
				{
					text:'XYZКлассификацияСтарая',
				},
			]
		},
					]
				},
				{
					title:'ПараметрыРаспределения',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РазовыйПокупательНач',
			style: 'position:absolute;left:109px;top:98px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РазовыйПокупательКон',
			style: 'position:absolute;left:227px;top:98px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'XКлассНач',
			style: 'position:absolute;left:109px;top:154px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'XКлассКон',
			style: 'position:absolute;left:227px;top:154px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'YКлассНач',
			style: 'position:absolute;left:109px;top:179px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'YКлассКон',
			style: 'position:absolute;left:227px;top:179px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ZКлассНач',
			style: 'position:absolute;left:109px;top:204px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ZКлассКон',
			style: 'position:absolute;left:227px;top:204px;width:86px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:378px;width:556px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:354px;width:556px;height:19px;',
		},
	]
});