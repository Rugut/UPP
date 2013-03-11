Ext.define('Обработки.ПакетныйВводДокументов.ФормаПодбора',
	{
	extend: 'Ext.window.Window',
	height: 336,width: 636,
	iconCls: 'bogus',
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
					text:'ПредставлениеФильтра',
				},
				{
					text:'ПредставлениеЗначения',
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
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:301px;top:6px;width:187px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
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
				},
				{
					text:'Код',
				},
				{
					text:'Артикул',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Характеристика',
				},
				{
					text:'Остаток',
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
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});