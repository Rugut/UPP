Ext.define('Документы.УстановкаДиапазоновБазовыхЦен.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:506px;height:364px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установки диапазонов базовых цен',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 116,
			height: 19,
			style: 'position:absolute;left:101px;top:33px;width:116px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:223px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 254,
			height: 19,
			style: 'position:absolute;left:244px;top:33px;width:254px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦен',
			text: 'Тип цен:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ТипЦен',
			width: 397,
			height: 19,
			style: 'position:absolute;left:101px;top:57px;width:397px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:128px;width:490px;height:156px;',
			height: 156,width: 490,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Верхняя граница',
					width:'100',
					dataIndex:'ВерхняяГраница',
					flex:1,
				},
				{
					text:'Представление интервала',
					width:'199',
					dataIndex:'ПредставлениеИнтервала',
					flex:1,
				},
				{
					text:'Цена',
					width:'81',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Валюта',
					width:'62',
					dataIndex:'Валюта',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаДиапазоновБазовыхЦен/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВерхняяГраница',
					},
					{
						name:'ПредставлениеИнтервала',
					},
					{
						name:'Цена',
					},
					{
						name:'Валюта',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:312px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 397,
			height: 19,
			style: 'position:absolute;left:101px;top:312px;width:397px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:288px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 397,
			height: 19,
			style: 'position:absolute;left:101px;top:288px;width:397px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБазовыйТипЦен',
			text: 'Надпись базовый тип цен',
			style: 'position:absolute;left:101px;top:81px;width:397px;height:19px;text-align:left;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:105px;width:490px;height:24px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:506px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				'-',
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:339px;width:506px;height:25px;',
			dock: 'bottom',
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
	]
});