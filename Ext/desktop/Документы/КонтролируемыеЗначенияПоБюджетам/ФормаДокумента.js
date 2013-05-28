Ext.define('Документы.КонтролируемыеЗначенияПоБюджетам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:410px;height:458px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Контролируемые значения по бюджетам',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 208,
			height: 19,
			style: 'position:absolute;left:194px;top:33px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Сценарий',
			width: 308,
			height: 19,
			style: 'position:absolute;left:94px;top:57px;width:308px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Вид контр. значений:',
			style: 'position:absolute;left:8px;top:85px;width:172px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидКонтролируемыхЗначений',
			width: 220,
			height: 19,
			style: 'position:absolute;left:182px;top:85px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Использование контр. значений:',
			style: 'position:absolute;left:8px;top:109px;width:172px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ИспользованиеКонтролируемыхЗначений',
			width: 220,
			height: 19,
			style: 'position:absolute;left:182px;top:109px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Вид ограничения оборотов:',
			style: 'position:absolute;left:8px;top:133px;width:172px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидОграниченияОборотов',
			width: 220,
			height: 19,
			style: 'position:absolute;left:182px;top:133px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Контролирующий сценарий:',
			style: 'position:absolute;left:8px;top:157px;width:172px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'КонтролирующийСценарий',
			width: 220,
			height: 19,
			style: 'position:absolute;left:182px;top:157px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:433px;width:410px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:176px;width:394px;height:177px;',
			height: 177,width: 394,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Выборочно',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:33px;width:394px;height:144px;',
			height: 144,width: 394,
			columns:
			[
				{
					text:'Период',
					width:'80',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Вид отклонения контролируемых значений',
					width:'100',
					dataIndex:'ВидОтклоненияКонтролируемыхЗначений',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'120',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
				{
					text:'Отклонение',
					width:'80',
					dataIndex:'Отклонение',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'ЦФО',
					width:'120',
					dataIndex:'ЦФО',
					flex:1,
				},
				{
					text:'Проект',
					width:'120',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтролируемыеЗначенияПоБюджетам/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Период',
					},
					{
						name:'ВидОтклоненияКонтролируемыхЗначений',
					},
					{
						name:'СтатьяОборотов',
					},
					{
						name:'Отклонение',
					},
					{
						name:'Сумма',
					},
					{
						name:'ЦФО',
					},
					{
						name:'Проект',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Номенклатура',
					},
				]
			},
		},
					]
				},
				{
					title:'ПоВсем',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНачалоКонтроля',
			text: 'Начало контр. интервала:',
			style: 'position:absolute;left:0px;top:5px;width:172px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКонцаКонтролирующегоСценария',
			width: 100,
			height: 19,
			style: 'position:absolute;left:174px;top:29px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонецКонтроля',
			text: 'Конец контр. интервала:',
			style: 'position:absolute;left:0px;top:29px;width:172px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Отклонение',
			style: 'position:absolute;left:174px;top:77px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтклонение',
			text: 'Отклонение, %:',
			style: 'position:absolute;left:0px;top:77px;width:172px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать обороты по ЦФО',
			style: 'position:absolute;left:0px;top:101px;width:202px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать обороты по проектам',
			style: 'position:absolute;left:0px;top:121px;width:216px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать обороты по контрагентам',
			style: 'position:absolute;left:0px;top:141px;width:238px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать обороты по номенклатуре',
			style: 'position:absolute;left:0px;top:161px;width:238px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидОтклоненияКонтролируемыхЗначений',
			width: 220,
			height: 19,
			style: 'position:absolute;left:174px;top:53px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Вид отклонения:',
			style: 'position:absolute;left:0px;top:53px;width:172px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаКонтролирующегоСценария',
			width: 100,
			height: 19,
			style: 'position:absolute;left:174px;top:5px;width:100px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:382px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный',
			width: 309,
			height: 19,
			style: 'position:absolute;left:93px;top:382px;width:309px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Состояние:',
			style: 'position:absolute;left:8px;top:358px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Состояние',
			width: 309,
			height: 19,
			style: 'position:absolute;left:93px;top:358px;width:309px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:406px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВвода1',
			width: 309,
			height: 19,
			style: 'position:absolute;left:93px;top:406px;width:309px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:410px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
			]
		},
	]
});