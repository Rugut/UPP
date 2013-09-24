Ext.require(['Данные.Обработки.НастройкиПрограммы'], function () 
{
	Ext.define('Обработки.НастройкиПрограммы.ИспользованиеРегистраСвободныеОстатки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:533px;height:188px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Установка параметра программы - Использовать регистр ""Свободные остатки""',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать регистр "Свободные остатки"',
			style: 'position:absolute;left:8px;top:9px;width:310px;height:21px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ИспользоватьСвободныеОстаткиДатаНачала',
			width: 85,
			height: 19,
			style: 'position:absolute;left:177px;top:33px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'НадписьДатаНачала',
			style: 'position:absolute;left:8px;top:33px;width:164px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Контроль остатков товаров на складах может выполняться по регистру "Свободные остатки".\r\nЭтот регистр содержит сводные данные по регистрам "Товары на складах", "Товары в рознице", "Товары в резерве на складах", "Товары к передаче со складов".',
			style: 'position:absolute;left:8px;top:62px;width:513px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодробно',
			text: 'Подробнее...',
			style: 'position:absolute;left:12px;top:122px;width:513px;height:25px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:163px;width:533px;height:25px;',
			width: 533,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Изменить настройку',
					tooltip:'Изменить настройку',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});