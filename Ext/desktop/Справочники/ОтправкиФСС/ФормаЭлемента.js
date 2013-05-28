Ext.define('Справочники.ОтправкиФСС.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:352px;height:308px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отправка на сервер ФСС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Предмет',
			text: '',
			style: 'position:absolute;left:14px;top:136px;width:330px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:14px;top:76px;width:71px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Организация',
			text: '',
			style: 'position:absolute;left:89px;top:76px;width:255px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганФСС',
			text: 'Орган ФСС:',
			style: 'position:absolute;left:14px;top:95px;width:71px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'КодОрганаФСС',
			text: '',
			style: 'position:absolute;left:89px;top:95px;width:255px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Субъекты переписки',
			style: 'position:absolute;left:8px;top:55px;width:336px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Предмет переписки',
			style: 'position:absolute;left:8px;top:115px;width:336px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Сообщения',
			style: 'position:absolute;left:8px;top:220px;width:336px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПервичноеСообщение',
			text: 'Зашифрованный пакет отправлен',
			style: 'position:absolute;left:53px;top:240px;width:289px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусОтправки',
			text: 'Протокол обработки пакета отсутствует',
			style: 'position:absolute;left:53px;top:261px;width:289px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Создана:',
			style: 'position:absolute;left:14px;top:180px;width:46px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Активность',
			style: 'position:absolute;left:8px;top:156px;width:336px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Последнее обновление было произведено:',
			style: 'position:absolute;left:14px;top:200px;width:220px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Завершена:',
			style: 'position:absolute;left:174px;top:180px;width:60px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаЗакрытия',
			text: '<не завершена>',
			style: 'position:absolute;left:238px;top:180px;width:106px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПомеченНаУдаление',
			text: 'Отправка помечена на удаление',
			style: 'position:absolute;left:173px;top:53px;width:171px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование1',
			text: 'Идентификатор:',
			style: 'position:absolute;left:8px;top:33px;width:83px;height:15px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИдентификаторОтправкиНаСервере',
			width: 249,
			height: 19,
			style: 'position:absolute;left:95px;top:33px;width:249px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ДатаОтправки',
			text: '',
			style: 'position:absolute;left:64px;top:180px;width:103px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОбновления',
			text: '<не определено>',
			style: 'position:absolute;left:238px;top:200px;width:106px;height:15px;text-align:left;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:352px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выгрузить отправленный пакет',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:283px;width:352px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
});