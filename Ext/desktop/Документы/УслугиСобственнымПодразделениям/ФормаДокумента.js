Ext.define('Документы.УслугиСобственнымПодразделениям.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:672px;height:404px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Услуги собственным подразделениям',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:352px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:352px;width:568px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:424px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:503px;top:33px;width:74px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:328px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:328px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:379px;width:672px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				{
					text:'ОК',
				},
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
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:580px;top:33px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:336px;top:328px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:424px;top:328px;width:240px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:656px;height:236px;',
			height: 236,width: 656,
			items:
			[
				{
					title:'Получатели',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:641px;height:179px;',
			height: 179,width: 641,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Подразделение',
					width:'210',
				},
				{
					text:'Подразделение организации',
					width:'206',
				},
				{
					text:'Статья затрат',
					width:'182',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Счет (БУ)',
					width:'82',
				},
				{
					text:'Счет (НУ)',
					width:'80',
				},
				{
					text:'Вид аналитики',
					width:'172',
				},
				{
					text:'Вид аналитики (доп)',
					width:'172',
				},
				{
					text:'Аналитика',
					width:'308',
				},
				{
					text:'Номенклатурная группа',
					width:'308',
				},
				{
					text:'Продукция',
					width:'103',
				},
				{
					text:'Характеристика продукции',
					width:'103',
				},
				{
					text:'Серия продукции',
					width:'103',
				},
				{
					text:'Заказ',
					width:'113',
				},
				{
					text:'Проект',
					width:'102',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:641px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:329px;top:6px;width:88px;height:27px;',
		},
					]
				},
				{
					title:'Исполнитель',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:94px;top:6px;width:212px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетЗатрат',
			style: 'position:absolute;left:94px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетЗатрат',
			text: 'Счет (БУ):',
			style: 'position:absolute;left:6px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:416px;top:6px;width:231px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:94px;top:30px;width:212px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетЗатратНУ',
			style: 'position:absolute;left:94px;top:78px;width:88px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьУслуга',
			text: 'Услуга (работа):',
			style: 'position:absolute;left:336px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:424px;top:57px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: '',
			style: 'position:absolute;left:424px;top:79px;width:240px;height:15px;text-align:right;',
		},
	]
});