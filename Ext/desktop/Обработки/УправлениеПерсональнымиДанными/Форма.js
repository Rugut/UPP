Ext.define('Обработки.УправлениеПерсональнымиДанными.Форма',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 711,
	iconCls: 'bogus',
	title: 'Управление персональными данными',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:6px;width:696px;height:566px;',
			height: 566,width: 696,
			items:
			[
				{
					title:'РежимДоступен',
					items:
					[
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
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:53px;width:453px;height:424px;',
			height: 424,width: 453,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Дата',
				},
				{
					text:'ПредставлениеСобытия',
				},
				{
					text:'ИмяПользователя',
				},
				{
					text:'ПредставлениеМетаданных',
				},
				{
					text:'Компьютер',
				},
				{
					text:'Пользователь',
				},
				{
					text:'Данные',
				},
				{
					text:'Метаданные',
				},
				{
					text:'ВспомогательныйIPПорт',
				},
				{
					text:'ИмяПриложения',
				},
				{
					text:'Комментарий',
				},
				{
					text:'ОсновнойIPПорт',
				},
				{
					text:'ПредставлениеДанных',
				},
				{
					text:'ПредставлениеПриложения',
				},
				{
					text:'РабочийСервер',
				},
				{
					text:'Сеанс',
				},
				{
					text:'Событие',
				},
				{
					text:'Соединение',
				},
				{
					text:'СтатусТранзакции',
				},
				{
					text:'Транзакция',
				},
				{
					text:'Уровень',
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
					text:'СубъектСобытия',
				},
			]
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
					text:'Период',
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
					text:'Картинка',
				},
				{
					text:'ОбластьДанных',
				},
				{
					text:'ИмяТаблицыИБ',
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
					title:'РежимНеДоступен',
				},
			]
		},
	]
});