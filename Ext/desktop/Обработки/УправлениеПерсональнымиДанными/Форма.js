Ext.define('Обработки.УправлениеПерсональнымиДанными.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:711px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Управление персональными данными',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:6px;width:696px;height:566px;',
			height: 566,width: 696,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Режим доступен',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСубъект',
			text: 'Субъект:',
			style: 'position:absolute;left:280px;top:541px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субъект',
			style: 'position:absolute;left:330px;top:541px;width:222px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУничтожить',
			text: 'Уничтожить сведения',
			style: 'position:absolute;left:555px;top:541px;width:135px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Подсказка2',
			text: 'Уничтожение персональных данных по запросу субъекта предусмотрено п.1 ст.14, п.3 ст. 20, п.3 ст.21 и п.4 ст. 21 закона 152-ФЗ ("О персональных данных")',
			style: 'position:absolute;left:35px;top:507px;width:655px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'СубъектЯвляется',
			text: 'Субъект является:',
			style: 'position:absolute;left:6px;top:542px;width:102px;height:18px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:53px;width:453px;height:424px;',
			height: 424,width: 453,
			columns:
			[
				{
					text:'',
					width:'25',
				},
				{
					text:'Дата',
					width:'109',
				},
				{
					text:'Представление события',
					width:'148',
				},
				{
					text:'Пользователь',
					width:'134',
				},
				{
					text:'Метаданные',
					width:'179',
				},
				{
					text:'Компьютер',
					width:'89',
				},
				{
					text:'Пользователь (UID)',
					width:'36',
				},
				{
					text:'Данные',
					width:'98',
				},
				{
					text:'Метаданные',
					width:'100',
				},
				{
					text:'Вспомогательный IPПорт',
					width:'100',
				},
				{
					text:'Имя приложения',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'100',
				},
				{
					text:'Основной IPПорт',
					width:'100',
				},
				{
					text:'Представление данных',
					width:'100',
				},
				{
					text:'Представление приложения',
					width:'100',
				},
				{
					text:'Рабочий сервер',
					width:'100',
				},
				{
					text:'Сеанс',
					width:'100',
				},
				{
					text:'Событие',
					width:'100',
				},
				{
					text:'Соединение',
					width:'100',
				},
				{
					text:'Статус транзакции',
					width:'100',
				},
				{
					text:'Транзакция',
					width:'100',
				},
				{
					text:'Уровень',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:469px;top:161px;width:221px;height:316px;',
			height: 316,width: 221,
			columns:
			[
				{
					text:'Список субъектов события',
					width:'238',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтборСубъект',
			text: 'Отбор:',
			style: 'position:absolute;left:94px;top:27px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборСубъект',
			style: 'position:absolute;left:280px;top:27px;width:179px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:85px;height:24px;',
			items:
			[
				{
					text:'Обновить',
				},
				{
					text:'Установить период',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:469px;top:74px;width:221px;height:61px;',
			height: 61,width: 221,
			columns:
			[
				{
					text:'',
					width:'25',
				},
				{
					text:'Области данных',
					width:'196',
				},
				{
					text:'Список объектов события',
					width:'206',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:469px;top:22px;width:221px;height:24px;',
			items:
			[
				{
					text:'Справка',
				},
			]
		},
					]
				},
				{
					title:'Режим недоступен',
				},
			]
		},
	]
});