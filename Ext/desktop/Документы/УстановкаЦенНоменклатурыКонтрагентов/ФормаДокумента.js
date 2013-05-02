Ext.define('Документы.УстановкаЦенНоменклатурыКонтрагентов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:514px;height:343px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка цен номенклатуры контрагентов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:32px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:32px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:197px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:56px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:56px;width:410px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:291px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:97px;top:291px;width:409px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:267px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:97px;top:267px;width:409px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:514px;height:25px;',
			items:
			[
				'-',
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
					]
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
					text:'Провести',
				},
				{
					text:'Отмена проведения',
				},
				'-',
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
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Настройка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:318px;width:514px;height:25px;',
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
					text:'ОК',
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
			style: 'position:absolute;left:8px;top:80px;width:498px;height:179px;',
			height: 179,width: 498,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Цены номенклатуры',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:47px;width:497px;height:26px;',
			items:
			[
				{
					text:'Поиск по штрихкоду',
				},
				'-',
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип цен:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СписокТиповЦен',
			style: 'position:absolute;left:88px;top:0px;width:409px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:73px;width:497px;height:106px;',
			height: 106,width: 497,
			columns:
			[
				{
					text:'№',
					width:'22',
					dataIndex:'ИндексСтрокиТаблицыЦен',
					flex:1,
				},
				{
					text:'Код',
					width:'62',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'130',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'178',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаЦенНоменклатурыКонтрагентов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ИндексСтрокиТаблицыЦен',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
				]
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не регистрировать нулевые цены номенклатуры контрагента',
			style: 'position:absolute;left:0px;top:25px;width:337px;height:15px;',
		},
					]
				},
			]
		},
	]
});