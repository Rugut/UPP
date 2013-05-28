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
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 554,
			height: 19,
			style: 'position:absolute;left:96px;top:57px;width:554px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Подразделение',
			width: 220,
			height: 19,
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:287px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 554,
			height: 19,
			style: 'position:absolute;left:96px;top:287px;width:554px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Родитель',
			width: 554,
			height: 19,
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
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 220,
			height: 19,
			style: 'position:absolute;left:86px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации',
			width: 220,
			height: 19,
			style: 'position:absolute;left:414px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Склад',
			width: 220,
			height: 19,
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
			style: 'position:absolute;left:6px;top:30px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодДетализации',
			width: 140,
			height: 19,
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
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:86px;top:6px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'Расписание',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
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
			style: 'position:absolute;left:510px;top:81px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаОбработки',
			width: 80,
			height: 19,
			style: 'position:absolute;left:570px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не обрабатывать период до завершения смен ',
			style: 'position:absolute;left:8px;top:105px;width:260px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:314px;width:658px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
	]
});