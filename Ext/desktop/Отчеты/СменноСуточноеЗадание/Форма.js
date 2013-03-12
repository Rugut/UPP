Ext.define('Отчеты.СменноСуточноеЗадание.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:444px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				'-',
				'-',
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Отбор',
				},
				{
					text:'Справка',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Отбор',
				},
				{
					text:'Справка',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:588px;height:96px;',
			height: 96,width: 588,
			items:
			[
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиРабочийЦентр',
			style: 'position:absolute;left:284px;top:0px;width:304px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Рабочий центр:',
			style: 'position:absolute;left:0px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиЗаказ',
			style: 'position:absolute;left:284px;top:24px;width:304px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заказ:',
			style: 'position:absolute;left:0px;top:24px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПроект',
			style: 'position:absolute;left:284px;top:48px;width:304px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проект:',
			style: 'position:absolute;left:0px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиНоменклатура',
			style: 'position:absolute;left:284px;top:72px;width:304px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:0px;top:72px;width:100px;height:19px;',
		},
					]
				},
			]
		},
	]
});