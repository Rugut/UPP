Ext.define('Обработки.ГрафикЗаказов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:539px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'График заказов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:769px;height:25px;',
			items:
			[
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Видимость отборы',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Восстановить настройку',
				},
				'-',
				{
					text:'Сохранить график',
				},
				{
					text:'Отменить не сохраненные изменения',
				},
				'-',
				{
					text:'Диагностика',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:821px;top:2px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:908px;top:2px;width:64px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:978px;top:2px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодС',
			text: 'Период с',
			style: 'position:absolute;left:769px;top:2px;width:49px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:889px;top:2px;width:16px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:761px;top:0px;width:239px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:27px;width:1000px;height:124px;',
			height: 124,width: 1000,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:986px;height:88px;',
			height: 88,width: 986,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'317',
				},
				{
					text:'Тип сравнения',
					width:'101',
				},
				{
					text:'Значение',
					width:'161',
				},
				{
					text:'С',
					width:'161',
				},
				{
					text:'По',
					width:'161',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:953px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
	]
});