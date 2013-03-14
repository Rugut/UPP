Ext.define('Отчеты.ДиаграммаГанта.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:586px;height:457px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
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
			name: 'Надпись3',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:586px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Сформировать',
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'Отбор',
				},
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Печать',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:570px;height:24px;',
			height: 24,width: 570,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройки1',
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиС1',
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПо1',
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:570px;height:24px;',
			height: 24,width: 570,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройки2',
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиС2',
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПо2',
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВидаДиаграммы',
			text: 'Раздел учета:',
			style: 'position:absolute;left:288px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:570px;height:24px;',
			height: 24,width: 570,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройки3',
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиС3',
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПо3',
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
	]
});