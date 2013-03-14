Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ШифрованиеРасшифровка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:704px;height:530px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Шифрование и расшифровка сообщений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:505px;width:704px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:128px;width:688px;height:369px;',
			height: 369,width: 688,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'Тип',
					width:'75',
				},
				{
					text:'Наименование',
					width:'81',
				},
				{
					text:'Дата создания',
					width:'126',
				},
				{
					text:'Дата завершения',
					width:'100',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Налоговый орган',
					width:'120',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:8px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:142px;top:8px;width:554px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОперации',
			text: 'Фильтр по сообщениям:',
			style: 'position:absolute;left:8px;top:32px;width:131px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидыЦикловОбмена',
			text: 'Типы циклов обмена:',
			style: 'position:absolute;left:8px;top:57px;width:131px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Все',
			style: 'position:absolute;left:142px;top:57px;width:41px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заданный:',
			style: 'position:absolute;left:214px;top:57px;width:75px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЦиклаОбмена',
			style: 'position:absolute;left:296px;top:57px;width:400px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Требущие расшифровки',
			style: 'position:absolute;left:142px;top:34px;width:147px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Требущие шифрования',
			style: 'position:absolute;left:296px;top:34px;width:140px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Без учета завершенных циклов обмена',
			style: 'position:absolute;left:142px;top:83px;width:225px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:104px;width:688px;height:24px;',
			items:
			[
				{
					text:'Пометить все',
				},
				{
					text:'Снять флажки у всех',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Режим шифрования первичных сообщений',
			style: 'position:absolute;left:441px;top:34px;width:241px;height:15px;',
		},
	]
});