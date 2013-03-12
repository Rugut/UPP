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
			style: 'position:absolute;left:8px;top:32px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:32px;width:20px;height:19px;',
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
			style: 'position:absolute;left:8px;top:56px;width:88px;height:19px;',
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
			style: 'position:absolute;left:8px;top:291px;width:88px;height:19px;',
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
			style: 'position:absolute;left:8px;top:267px;width:86px;height:19px;',
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
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Скопировать',
				},
				'-',
				'-',
				'-',
				{
					text:'Провести',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Настройка',
				},
				{
					text:'Отмена проведения',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:318px;width:514px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:80px;width:498px;height:179px;',
			height: 179,width: 498,
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
					text:'Подбор',
				},
				{
					text:'Заполнить по ценам контрагента',
				},
				{
					text:'Поиск по штрихкоду',
				},
				'-',
				{
					text:'Добавить по поступлению',
				},
				{
					text:'Обновить по ценам контрагента',
				},
				{
					text:'Заполнить по поступлению',
				},
				'-',
				{
					text:'Добавить по ценам контрагента',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип цен:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;',
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
				},
				{
					text:'Код',
					width:'62',
				},
				{
					text:'Артикул',
					width:'130',
				},
				{
					text:'Номенклатура',
					width:'178',
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
				},
			]
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