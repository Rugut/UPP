Ext.define('Документы.УстановкаЦенНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:470px;height:313px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка цен номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:101px;width:454px;height:24px;',
			items:
			[
				{
					text:'Заполнить по поступлению',
				},
				'-',
				'-',
				{
					text:'Обновить по ценам номенклатуры',
				},
				{
					text:'Прайс',
				},
				{
					text:'Добавить по плановым ценам',
				},
				{
					text:'Поиск по штрихкоду',
				},
				{
					text:'Заполнить по ценам контрагентов',
				},
				'-',
				{
					text:'Обновить по плановым ценам',
				},
				{
					text:'Подбор',
				},
				{
					text:'Добавить по ценам контрагентов',
				},
				{
					text:'Добавить по поступлению',
				},
				'-',
				{
					text:'Рассчитать по базовым ценам',
				},
				{
					text:'Обновить по ценам контрагентов',
				},
				'-',
				{
					text:'Заполнить по плановым ценам',
				},
				{
					text:'Заполнить по ценам номенклатуры',
				},
				{
					text:'Добавить по ценам номенклатуры',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:125px;width:454px;height:106px;',
			height: 106,width: 454,
			columns:
			[
				{
					text:'№',
					width:'28',
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
					width:'245',
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:182px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:102px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:202px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:261px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:261px;width:360px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦен',
			text: 'Тип цен:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СписокТиповЦен',
			style: 'position:absolute;left:102px;top:57px;width:360px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:237px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:102px;top:237px;width:360px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:470px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				{
					text:'Настройка',
				},
				'-',
				{
					text:'',
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
			style: 'position:absolute;left:0px;top:288px;width:470px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				'-',
				'-',
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не регистрировать нулевые цены номенклатуры',
			style: 'position:absolute;left:8px;top:81px;width:270px;height:15px;',
		},
	]
});