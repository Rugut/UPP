Ext.define('Обработки.РегистрацияСчетовФактурНаАванс.Форма',
	{
	extend: 'Ext.window.Window',
	height: 435,width: 736,
	iconCls: 'bogus',
	title: 'Регистрация счетов-фактур на аванс',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:736px;height:25px;',
			items:
			[
				{
					text:'СписокСчетовФактур',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:410px;width:736px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПериода',
			style: 'position:absolute;left:70px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецПериода',
			style: 'position:absolute;left:171px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:253px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:98px;width:720px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:373px;top:33px;width:355px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:122px;width:720px;height:280px;',
			height: 280,width: 720,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'СФсформирован',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Договор',
				},
				{
					text:'Сумма',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'СуммаНДС',
				},
				{
					text:'ДокументОснование',
				},
				{
					text:'СчетНаОплату',
				},
				{
					text:'Дата',
				},
				{
					text:'ВалютаДокумента',
				},
				{
					text:'ВалютнаяСумма',
				},
				{
					text:'СчетФактура',
				},
			]
		},
	]
});