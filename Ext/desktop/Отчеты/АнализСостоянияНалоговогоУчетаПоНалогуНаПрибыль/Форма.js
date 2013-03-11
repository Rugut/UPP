Ext.define('Отчеты.АнализСостоянияНалоговогоУчетаПоНалогуНаПрибыль.Форма',
	{
	extend: 'Ext.window.Window',
	height: 507,width: 863,
	iconCls: 'bogus',
	title: 'Анализ состояния налогового учета по налогу на прибыль',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПериода',
			style: 'position:absolute;left:194px;top:3px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецПериода',
			style: 'position:absolute;left:315px;top:3px;width:90px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:410px;top:3px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:520px;top:3px;width:252px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:861px;height:507px;',
			height: 507,width: 861,
			items:
			[
				{
					title:'Схема',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:131px;height:27px;',
			items:
			[
				{
					text:'КнопкаВпередВТаблице',
				},
				{
					text:'КнопкаНазадВТаблице',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:359px;height:27px;',
			items:
			[
				{
					text:'КнопкаПоказатьКарту',
				},
				{
					text:'Печать',
				},
				{
					text:'КнопкаНазад',
				},
				{
					text:'КнопкаВперед',
				},
			]
		},
		{
			xtype: 'button',
			name: 'Справка',
			text: '',
			style: 'position:absolute;left:812px;top:3px;width:22px;height:19px;',
		},
	]
});