Ext.define('Справочники.НастройкиФормированияДокументовВыпускаПродукции.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:658px;height:339px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки формирования документов выпуска продукции',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:314px;width:658px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				'-',
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:57px;width:554px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:287px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:287px;width:554px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:96px;top:33px;width:554px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:132px;width:642px;height:147px;',
			height: 147,width: 642,
			items:
			[
				{
					title:'Создавать документы',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:86px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:414px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:414px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:414px;top:6px;width:68px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:490px;top:6px;width:68px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:566px;top:6px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодДетализации',
			text: 'Детализация: ',
			style: 'position:absolute;left:6px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодДетализации',
			style: 'position:absolute;left:86px;top:30px;width:140px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выпуск',
			style: 'position:absolute;left:86px;top:78px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Материалы',
			style: 'position:absolute;left:168px;top:78px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРегулярногоДокумента',
			text: 'Вид:',
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Расписание',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Задержка',
			style: 'position:absolute;left:278px;top:78px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗадержка',
			text: 'дней',
			style: 'position:absolute;left:322px;top:78px;width:29px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать расписание',
			style: 'position:absolute;left:6px;top:6px;width:156px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не обрабатывать документы за предыдущие: ',
			style: 'position:absolute;left:22px;top:78px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеЗадержка',
			text: '',
			style: 'position:absolute;left:39px;top:102px;width:595px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьГраницаФормирования',
			text: 'Начиная с: ',
			style: 'position:absolute;left:510px;top:81px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаОбработки',
			style: 'position:absolute;left:570px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не обрабатывать период до завершения смен ',
			style: 'position:absolute;left:8px;top:105px;width:260px;height:19px;',
		},
	]
});