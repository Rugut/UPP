Ext.define('Документы.УчетФактическихДанныхПоБюджетам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:409px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Учет фактических данных по бюджетам',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:102px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:184px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:202px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
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
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:384px;width:650px;height:25px;',
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:149px;width:634px;height:180px;',
			height: 180,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Период',
					width:'80',
					dataIndex:'ПериодПланирования',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'120',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
				{
					text:'Валюта',
					width:'120',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Сумма',
					width:'120',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Количество',
					width:'120',
					dataIndex:'Количество',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УчетФактическихДанныхПоБюджетам/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ПериодПланирования',
					},
					{
						name:'СтатьяОборотов',
					},
					{
						name:'Валюта',
					},
					{
						name:'Сумма',
					},
					{
						name:'Количество',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:124px;width:634px;height:25px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЦФО',
			style: 'position:absolute;left:102px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЦФО',
			text: 'ЦФО:',
			style: 'position:absolute;left:8px;top:57px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтатьиОборотов',
			style: 'position:absolute;left:102px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьиОборотов',
			text: 'Статья оборотов:',
			style: 'position:absolute;left:8px;top:81px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Период с:',
			style: 'position:absolute;left:340px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачала',
			style: 'position:absolute;left:422px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКонца',
			text: 'по:',
			style: 'position:absolute;left:504px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКонца',
			style: 'position:absolute;left:522px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:608px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:334px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:102px;top:334px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояние',
			text: 'Состояние:',
			style: 'position:absolute;left:340px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Состояние',
			style: 'position:absolute;left:422px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:358px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:358px;width:540px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'БюджетныеОперации',
			style: 'position:absolute;left:8px;top:108px;width:634px;height:16px;',
		},
	],
	dockedItems:
	[
	]
});