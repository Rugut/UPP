Ext.define('Обработки.ТранспортныеУпаковки.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:580px;height:371px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Печать штрихкодов транспортных упаковок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:580px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Печать',
				},
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДокументы',
			text: 'Документы:',
			style: 'position:absolute;left:8px;top:54px;width:63px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Документы',
			style: 'position:absolute;left:76px;top:54px;width:496px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:103px;width:564px;height:25px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Переместить вверх',
				},
				{
					text:'Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:133px;width:564px;height:230px;',
			height: 230,width: 564,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Обрабатывать',
					width:'100',
					dataIndex:'Обрабатывать',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'250',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Ед. Изм.',
					width:'76',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'250',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Качество',
					width:'100',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Упаковка',
					width:'250',
					dataIndex:'Упаковка',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТранспортныеУпаковки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Обрабатывать',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'Качество',
					},
					{
						name:'Упаковка',
					},
					{
						name:'Количество',
					},
				]
			},
		},
	]
});