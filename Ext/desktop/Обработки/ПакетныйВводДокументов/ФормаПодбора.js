Ext.define('Обработки.ПакетныйВводДокументов.ФормаПодбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:636px;height:336px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Пакетный ввод документов',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:620px;height:295px;',
			height: 295,width: 620,
			items:
			[
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:290px;height:216px;',
			height: 216,width: 290,
			columns:
			[
				{
					text:'Отбор',
					width:'131',
				},
				{
					text:'Значение отбора',
					width:'156',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:301px;top:30px;width:315px;height:216px;',
			height: 216,width: 315,
			columns:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:290px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Добавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:301px;top:6px;width:187px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'Подбор',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Сортировать по возрастанию',
				},
			]
		},
					]
				},
				{
					title:'Обработка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:610px;height:244px;',
			height: 244,width: 610,
			columns:
			[
				{
					text:'Пометка',
					width:'26',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'100',
				},
				{
					text:'Номенклатура',
					width:'229',
				},
				{
					text:'Характеристика номенклатуры',
					width:'263',
				},
				{
					text:'Остаток',
					width:'100',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбратьВсе',
			text: '',
			style: 'position:absolute;left:575px;top:253px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСнятьВсе',
			text: '',
			style: 'position:absolute;left:597px;top:253px;width:19px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:311px;width:636px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Сформировать',
				},
				'-',
				'-',
			]
		},
	]
});