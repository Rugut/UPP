Ext.define('Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 520,width: 1000,
	iconCls: 'bogus',
	title: 'Сведения о страховых взносах и стаже застрахованных лиц (СЗВ-4, СЗВ-6)',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:553px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:653px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:102px;top:33px;width:318px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:553px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:97px;top:468px;width:778px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:262px;width:984px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Заполнить',
				},
				{
					text:'ЗаполнитьИзменившиесяАдреса',
				},
				{
					text:'ЗаполнитьВзносы',
				},
				{
					text:'ДействиеРедактироватьСЗВ_4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
				{
					text:'ЗаполнитьВсеАдреса',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:286px;width:984px;height:175px;',
			height: 175,width: 984,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'АдресДляИнформирования',
				},
				{
					text:'СтраховойНомерПФР',
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
					text:'КолонкаСтраховая',
				},
				{
					text:'НачисленоСтраховая',
				},
				{
					text:'ДоначисленоСтраховая',
				},
				{
					text:'УплаченоСтраховая',
				},
				{
					text:'ДоУплаченоСтраховая',
				},
				{
					text:'КолонкаНакопительная',
				},
				{
					text:'НачисленоНакопительная',
				},
				{
					text:'ДоначисленоНакопительная',
				},
				{
					text:'УплаченоНакопительная',
				},
				{
					text:'ДоУплаченоНакопительная',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Действие5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:495px;width:1000px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Файл',
				},
				{
					text:'ПроверитьВCheckXML',
				},
				{
					text:'НаДискетку',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительПечать1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:102px;top:81px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:294px;top:81px;width:126px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйПериод',
			style: 'position:absolute;left:102px;top:57px;width:318px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:107px;width:984px;height:69px;',
			height: 69,width: 984,
			items:
			[
				{
					title:'Страница2010',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияЗастрахованныхЛиц',
			style: 'position:absolute;left:182px;top:50px;width:206px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КорректируемыйПериод',
			style: 'position:absolute;left:537px;top:25px;width:206px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаОписания',
					items:
					[
					]
				},
				{
					title:'Страница2009',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТерриториальныеУсловия',
			style: 'position:absolute;left:415px;top:0px;width:66px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки',
			style: 'position:absolute;left:553px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:176px;width:984px;height:65px;',
			height: 65,width: 984,
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
});