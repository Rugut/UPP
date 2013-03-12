Ext.define('Документы.РассылкаАнкет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:449px;height:458px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Рассылка анкет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:449px;height:25px;',
			items:
			[
				'-',
				{
					text:'',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Записать и закрыть',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Открыть свойства',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Открыть категории',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Найти в списке',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Редактировать номер',
				},
				{
					text:'Скопировать',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:433px;width:449px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Отправить',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Повторная рассылка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАнкета',
			text: 'Анкета:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Анкета',
			style: 'position:absolute;left:96px;top:57px;width:345px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:433px;height:44px;',
			height: 44,width: 433,
			items:
			[
				{
					title:'Внешний почтовый клиент',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЭлектронныйАдресОтветов',
			text: 'E-mail ответов:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЭлектронныйАдресОтветов',
			style: 'position:absolute;left:88px;top:0px;width:345px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Уведомлять о получении',
			style: 'position:absolute;left:88px;top:24px;width:288px;height:15px;',
		},
					]
				},
				{
					title:'Встроенный почтовый клиент',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьУчетнаяЗаписьДляОтправки',
			text: 'E-mail отправки:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УчетнаяЗаписьДляОтправки',
			style: 'position:absolute;left:88px;top:0px;width:345px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЭлектронныйАдресОтветовВстроенныйПочтовыйКлиент',
			text: 'E-mail ответов:',
			style: 'position:absolute;left:0px;top:25px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЭлектронныйАдресОтветовВстроенныйПочтовыйКлиент',
			style: 'position:absolute;left:88px;top:25px;width:345px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:131px;width:433px;height:196px;',
			height: 196,width: 433,
			items:
			[
				{
					title:'Письмо',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ТекстПисьма',
			style: 'position:absolute;left:6px;top:6px;width:419px;height:164px;',
		},
					]
				},
				{
					title:'Получатели',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:419px;height:24px;',
			items:
			[
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Просмотр HTML',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:419px;height:139px;',
			height: 139,width: 419,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Получатель',
					width:'100',
				},
				{
					text:'Электронный адрес',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Вложения',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:419px;height:24px;',
			items:
			[
				{
					text:'&Скопировать',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Добавить',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:419px;height:139px;',
			height: 139,width: 419,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Имя файла',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПервичнаяРассылка',
			text: 'Рассылка:',
			style: 'position:absolute;left:8px;top:356px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервичнаяРассылка',
			style: 'position:absolute;left:96px;top:356px;width:345px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:381px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:381px;width:345px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:406px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:406px;width:345px;height:19px;',
		},
	]
});