Ext.define('Документы.ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 529,width: 664,
	iconCls: 'bogus',
	title: 'Изменение условий оплаты отпуска по уходу за ребенком',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:477px;width:560px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:436px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьПлановые',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:251px;top:504px;width:413px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:175px;width:648px;height:257px;',
			height: 257,width: 648,
			items:
			[
				{
					title:'Пособия',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПособияДоПолутораЛет',
			style: 'position:absolute;left:110px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДетей',
			style: 'position:absolute;left:110px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПособияДоТрехЛет',
			style: 'position:absolute;left:110px;top:190px;width:88px;height:19px;',
		},
					]
				},
				{
					title:'ПлановыеНачисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:634px;height:206px;',
			height: 206,width: 634,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Должность',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Действие',
				},
				{
					text:'Показатели',
				},
				{
					text:'НаименованиеПоказатель1',
				},
				{
					text:'Показатель1',
				},
				{
					text:'Валюта1',
				},
				{
					text:'НаименованиеПоказательТР1',
				},
				{
					text:'ТарифныйРазряд1',
				},
				{
					text:'НаименованиеПоказатель2',
				},
				{
					text:'Показатель2',
				},
				{
					text:'Валюта2',
				},
				{
					text:'НаименованиеПоказательТР2',
				},
				{
					text:'ТарифныйРазряд2',
				},
				{
					text:'НаименованиеПоказатель3',
				},
				{
					text:'Показатель3',
				},
				{
					text:'Валюта3',
				},
				{
					text:'НаименованиеПоказательТР3',
				},
				{
					text:'ТарифныйРазряд3',
				},
				{
					text:'НаименованиеПоказатель4',
				},
				{
					text:'Показатель4',
				},
				{
					text:'Валюта4',
				},
				{
					text:'НаименованиеПоказательТР4',
				},
				{
					text:'ТарифныйРазряд4',
				},
				{
					text:'НаименованиеПоказатель5',
				},
				{
					text:'Показатель5',
				},
				{
					text:'Валюта5',
				},
				{
					text:'НаименованиеПоказательТР5',
				},
				{
					text:'ТарифныйРазряд5',
				},
				{
					text:'НаименованиеПоказатель6',
				},
				{
					text:'Показатель6',
				},
				{
					text:'Валюта6',
				},
				{
					text:'НаименованиеПоказательТР6',
				},
				{
					text:'ТарифныйРазряд6',
				},
				{
					text:'Сторно',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие5',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие8',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие7',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:74px;top:156px;width:389px;height:24px;',
			items:
			[
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Добавить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие14',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Подменю',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие10',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие12',
				},
			]
		},
					]
				},
				{
					title:'ПлановыеУдержания',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:207px;',
			height: 207,width: 634,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Действие',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Показатели',
				},
				{
					text:'НаименованиеПоказатель1',
				},
				{
					text:'Показатель1',
				},
				{
					text:'Валюта1',
				},
				{
					text:'НаименованиеПоказатель2',
				},
				{
					text:'Показатель2',
				},
				{
					text:'Валюта2',
				},
				{
					text:'НаименованиеПоказатель3',
				},
				{
					text:'Показатель3',
				},
				{
					text:'Валюта3',
				},
				{
					text:'НаименованиеПоказатель4',
				},
				{
					text:'Показатель4',
				},
				{
					text:'Валюта4',
				},
				{
					text:'НаименованиеПоказатель5',
				},
				{
					text:'Показатель5',
				},
				{
					text:'Валюта5',
				},
				{
					text:'НаименованиеПоказатель6',
				},
				{
					text:'Показатель6',
				},
				{
					text:'Валюта6',
				},
				{
					text:'ДокументОснование',
				},
				{
					text:'Сторно',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие4',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Удалить',
				},
				{
					text:'Добавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:74px;top:156px;width:389px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Добавить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие12',
				},
				{
					text:'Подменю',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				{
					text:'Удалить',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменения',
			style: 'position:absolute;left:152px;top:148px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:118px;top:101px;width:538px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:436px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:536px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменения1',
			style: 'position:absolute;left:152px;top:125px;width:90px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:444px;top:438px;width:83px;height:33px;',
			height: 33,width: 83,
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:527px;top:438px;width:129px;height:33px;',
			height: 33,width: 129,
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:504px;width:251px;height:25px;',
			items:
			[
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'Исправить',
				},
			]
		},
	]
});