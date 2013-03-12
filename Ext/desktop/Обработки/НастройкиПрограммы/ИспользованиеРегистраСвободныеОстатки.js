Ext.define('Обработки.НастройкиПрограммы.ИспользованиеРегистраСвободныеОстатки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:533px;height:188px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка параметра программы - Использовать регистр ""Свободные остатки""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:163px;width:533px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Изменить настройку',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать регистр "Свободные остатки"',
			style: 'position:absolute;left:8px;top:9px;width:310px;height:21px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИспользоватьСвободныеОстаткиДатаНачала',
			style: 'position:absolute;left:177px;top:33px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: '',
			style: 'position:absolute;left:8px;top:33px;width:164px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Контроль остатков товаров на складах может выполняться по регистру "Свободные остатки".
Этот регистр содержит сводные данные по регистрам "Товары на складах", "Товары в рознице", "Товары в резерве на складах", "Товары к передаче со складов".',
			style: 'position:absolute;left:8px;top:62px;width:513px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодробно',
			text: 'Подробнее...',
			style: 'position:absolute;left:12px;top:122px;width:513px;height:25px;',
		},
	]
});