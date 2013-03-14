Ext.define('Обработки.ПечатьЭтикеток.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:501px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Печать этикеток',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Печатать',
				},
				{
					text:'Отбор',
				},
				{
					text:'Заполнить',
				},
				'-',
					]
				},
				'-',
				{
					text:'Печатать',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Перезаполнить цены',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:253px;width:764px;height:242px;',
			height: 242,width: 764,
			columns:
			[
				{
					text:'Тип штрихкода',
					width:'93',
				},
				{
					text:'Штрихкод',
					width:'146',
				},
				{
					text:'Номенклатура',
					width:'249',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Единица',
					width:'53',
				},
				{
					text:'Характеристика',
					width:'151',
				},
				{
					text:'Серия',
					width:'131',
				},
				{
					text:'Качество',
					width:'133',
				},
				{
					text:'Цена',
					width:'93',
				},
				{
					text:'Валюта',
					width:'49',
				},
				{
					text:'Ед.',
					width:'61',
				},
				{
					text:'ПроцентСкидкиНаценки',
					width:'100',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФорматЭтикетки',
			style: 'position:absolute;left:64px;top:206px;width:201px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФормат',
			text: 'Формат:',
			style: 'position:absolute;left:8px;top:207px;width:56px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать цену',
			style: 'position:absolute;left:8px;top:185px;width:92px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ШиринаЭтикетки',
			style: 'position:absolute;left:349px;top:206px;width:21px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьШирина',
			text: 'Ширина (мм):',
			style: 'position:absolute;left:271px;top:206px;width:71px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВысотаЭтикетки',
			style: 'position:absolute;left:449px;top:206px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВысота',
			text: 'Высота (мм):',
			style: 'position:absolute;left:375px;top:206px;width:68px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Без предварительного просмотра',
			style: 'position:absolute;left:104px;top:185px;width:220px;height:18px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:130px;',
			height: 130,width: 764,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:213px;top:13px;width:250px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номенклатура:',
			style: 'position:absolute;left:6px;top:13px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Единица',
			style: 'position:absolute;left:90px;top:37px;width:113px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Ед. изм.:',
			style: 'position:absolute;left:6px;top:37px;width:47px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Качество',
			style: 'position:absolute;left:290px;top:37px;width:173px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Качество:',
			style: 'position:absolute;left:213px;top:37px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Серии:',
			style: 'position:absolute;left:473px;top:37px;width:107px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'заполненные',
			style: 'position:absolute;left:584px;top:13px;width:85px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'пустые',
			style: 'position:absolute;left:675px;top:13px;width:55px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Характеристики:',
			style: 'position:absolute;left:472px;top:13px;width:107px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'заполненные',
			style: 'position:absolute;left:584px;top:37px;width:87px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'пустые',
			style: 'position:absolute;left:675px;top:37px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипШтрихкода',
			style: 'position:absolute;left:90px;top:61px;width:113px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Тип штрихкода:',
			style: 'position:absolute;left:6px;top:61px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦены',
			style: 'position:absolute;left:90px;top:105px;width:373px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:631px;top:105px;width:126px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В валютах цен',
			style: 'position:absolute;left:469px;top:105px;width:96px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Валюта:',
			style: 'position:absolute;left:570px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Тип цены:',
			style: 'position:absolute;left:6px;top:105px;width:81px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать только внутренние штрихкоды',
			style: 'position:absolute;left:473px;top:60px;width:254px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоКопий',
			text: 'Количество копий:',
			style: 'position:absolute;left:474px;top:206px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоКопий',
			style: 'position:absolute;left:576px;top:206px;width:51px;height:19px;',
		},
	]
});