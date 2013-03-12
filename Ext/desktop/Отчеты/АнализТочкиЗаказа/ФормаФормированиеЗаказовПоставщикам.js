Ext.define('Отчеты.АнализТочкиЗаказа.ФормаФормированиеЗаказовПоставщикам',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование заказов поставщикам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:640px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:624px;height:439px;',
			height: 439,width: 624,
			items:
			[
				{
					title:'Потребности',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:610px;height:383px;',
			height: 383,width: 610,
			columns:
			[
				{
					text:' Склад. Поставщик. Номенклатура.',
					width:'154',
				},
				{
					text:' Характеристика',
					width:'100',
				},
				{
					text:' Рекомендуемое кол.',
					width:'120',
				},
				{
					text:' Заказанное кол.',
					width:'100',
				},
				{
					text:' Заказать кол.',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:610px;height:24px;',
			items:
			[
				{
					text:'Установить пометки',
				},
				'-',
				{
					text:'Снять пометки',
				},
				{
					text:'Обновить',
				},
			]
		},
					]
				},
				{
					title:'Заказы поставщикам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:610px;height:383px;',
			height: 383,width: 610,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Документ',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:610px;height:24px;',
			items:
			[
				{
					text:'Установить пометки',
				},
				{
					text:'Установить/Снять пометку на удаление',
				},
				{
					text:'Снять пометки',
				},
				'-',
				'-',
				'-',
				{
					text:'Провести',
				},
				{
					text:'Удалить непосредственно',
				},
				{
					text:'Печать',
				},
				{
					text:'Обновить',
				},
			]
		},
					]
				},
			]
		},
	]
});