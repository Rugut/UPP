Ext.define('Отчеты.АнализСубконтоМеждународный.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:731px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ субконто',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:731px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Субконто',
				},
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Субконто',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Восстановить значения...',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:447px;top:32px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:523px;top:32px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:66px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:166px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:32px;width:56px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:148px;top:32px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:32px;width:19px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:56px;width:715px;height:122px;',
			height: 122,width: 715,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:320px;height:70px;',
			height: 70,width: 320,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Вид субконто',
					width:'278',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:19px;width:320px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:326px;top:44px;width:388px;height:70px;',
			height: 70,width: 388,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:326px;top:19px;width:388px;height:24px;',
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