Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_НеформализованныйДокументНалоговогоОргана_ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:438px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Неформализованный документ налогового органа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Ответить',
				},
				{
					text:'Действие',
				},
				{
					text:'Показать цикл обмена, связанный с документом',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:413px;width:640px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйОрган',
			text: 'Налоговый орган:',
			style: 'position:absolute;left:8px;top:53px;width:123px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НалоговыйОрган',
			text: '',
			style: 'position:absolute;left:134px;top:53px;width:498px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:116px;width:624px;height:289px;',
			height: 289,width: 624,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Содержание',
			style: 'position:absolute;left:0px;top:18px;width:624px;height:271px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:88px;width:624px;height:22px;',
			height: 22,width: 624,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'ВложенныйДокумент',
			text: 'Вложенные документы:',
			style: 'position:absolute;left:1px;top:6px;width:122px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеВложенныеДокументы',
			style: 'position:absolute;left:125px;top:5px;width:390px;height:17px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:73px;width:123px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Организация',
			text: '',
			style: 'position:absolute;left:134px;top:73px;width:498px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСоздан',
			text: '',
			style: 'position:absolute;left:270px;top:33px;width:362px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:123px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Номер',
			text: '',
			style: 'position:absolute;left:134px;top:33px;width:132px;height:15px;',
		},
	]
});