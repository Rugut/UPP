Ext.define('Справочники.ОбработкиОбслуживанияТО.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:473px;height:501px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка обслуживания ТО',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:113px;top:33px;width:244px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:362px;top:33px;width:22px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			style: 'position:absolute;left:385px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры обработки обслуживания',
			style: 'position:absolute;left:8px;top:57px;width:457px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбработка',
			text: 'Обработка:',
			style: 'position:absolute;left:8px;top:78px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Обработка',
			style: 'position:absolute;left:113px;top:78px;width:302px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВид',
			text: 'Вид:',
			style: 'position:absolute;left:8px;top:102px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Вид',
			style: 'position:absolute;left:113px;top:102px;width:352px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписание',
			text: 'Описание:',
			style: 'position:absolute;left:8px;top:126px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Описание',
			style: 'position:absolute;left:113px;top:126px;width:352px;height:46px;',
		},
		{
			xtype: 'fieldset',
			title: 'Список моделей поддерживаемого оборудования',
			style: 'position:absolute;left:8px;top:253px;width:457px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:276px;width:457px;height:192px;',
			height: 192,width: 457,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Модель торгового оборудования',
					width:'250',
					dataIndex:'Модель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбработкиОбслуживанияТО/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Модель',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВерсия',
			text: 'Версия обработки:',
			style: 'position:absolute;left:8px;top:201px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Версия',
			style: 'position:absolute;left:113px;top:201px;width:352px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИдентификатор',
			text: 'ID:',
			style: 'position:absolute;left:8px;top:225px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Идентификатор',
			style: 'position:absolute;left:113px;top:225px;width:352px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВерсияAPI',
			text: 'Версия API:',
			style: 'position:absolute;left:8px;top:177px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВерсияAPI',
			style: 'position:absolute;left:113px;top:177px;width:352px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗагрузкаОбновлениеОбработкиССайта',
			text: '',
			style: 'position:absolute;left:445px;top:78px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗагрузкаОбновлениеОбработкиИзКаталога',
			text: '',
			style: 'position:absolute;left:420px;top:78px;width:20px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:473px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
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
				'-',
				{
					text:'Редактировать код',
				},
					]
				},
				'-',
				{
					text:'НайтиВСписке',
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
					text:'Экспорт в файл',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:476px;width:473px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});