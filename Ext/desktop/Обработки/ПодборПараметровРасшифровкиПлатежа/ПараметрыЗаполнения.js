Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ПараметрыЗаполнения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:353px;height:453px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка заполнения расшифровки платежа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:428px;width:353px;height:25px;',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:353px;height:25px;',
			items:
			[
				'-',
				{
					text:'Восстановить значения...',
				},
				'-',
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Справка',
				},
				{
					text:'Сохранить значения...',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:337px;height:388px;',
			height: 388,width: 337,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:60px;width:323px;height:302px;',
			height: 302,width: 323,
			items:
			[
				{
					title:'ПоЗаявкам',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Подбирать сумму:',
			style: 'position:absolute;left:6px;top:76px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДляПодбора1',
			style: 'position:absolute;left:129px;top:76px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только включенные в платежный календарь',
			style: 'position:absolute;left:6px;top:100px;width:256px;height:19px;',
		},
					]
				},
				{
					title:'ПоДоговорам',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Подбирать сумму:',
			style: 'position:absolute;left:12px;top:144px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДляПодбора',
			style: 'position:absolute;left:130px;top:144px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подбирать планируемые поступления средств',
			style: 'position:absolute;left:12px;top:188px;width:297px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не превышать запланированных значений',
			style: 'position:absolute;left:12px;top:212px;width:297px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только включенные в платежный календарь',
			style: 'position:absolute;left:12px;top:277px;width:256px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По фактической задолженности',
			style: 'position:absolute;left:12px;top:25px;width:280px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По оперативной задолженности (с учетом заказов)',
			style: 'position:absolute;left:12px;top:45px;width:280px;height:15px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Отбор договоров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:323px;height:331px;',
			height: 331,width: 323,
			columns:
			[
				{
					text:'',
					width:'22',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'156',
				},
				{
					text:'Значение',
					width:'112',
				},
				{
					text:'С',
					width:'112',
				},
				{
					text:'По',
					width:'112',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:323px;height:24px;',
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