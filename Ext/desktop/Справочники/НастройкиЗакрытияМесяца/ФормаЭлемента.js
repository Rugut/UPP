Ext.define('Справочники.НастройкиЗакрытияМесяца.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:850px;height:587px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка закрытия месяца',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:850px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Отчеты регламентных операций',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Справка',
				},
				{
					text:'Переключить видимость справки формы',
				},
				{
					text:'Документы регламентных операций',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:562px;width:850px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:834px;height:521px;',
			height: 521,width: 834,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:2px;top:3px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:4px;width:442px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачалаДействияНастройки',
			text: 'Действует с:',
			style: 'position:absolute;left:2px;top:27px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаДействияНастройки',
			style: 'position:absolute;left:93px;top:28px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:294px;top:28px;width:73px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:372px;top:28px;width:73px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:450px;top:28px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражениеВУчетах',
			text: 'Отражать в:',
			style: 'position:absolute;left:223px;top:28px;width:66px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:55px;width:834px;height:464px;',
			height: 464,width: 834,
			items:
			[
				{
					title:'Сводные настройки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:820px;height:430px;',
			height: 430,width: 820,
			columns:
			[
				{
					text:'N',
					width:'27',
				},
				{
					text:'Регламентная операция',
					width:'173',
				},
				{
					text:'Ответственный',
					width:'100',
				},
				{
					text:'УУ',
					width:'37',
				},
				{
					text:'БУ',
					width:'31',
				},
				{
					text:'НУ',
					width:'31',
				},
			]
		},
					]
				},
				{
					title:'Схема',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:20px;top:20px;width:229px;height:27px;',
			items:
			[
				{
					text:'Изменить ответственного',
				},
			]
		},
					]
				},
				{
					title:'Схема расчета НДС',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:26px;top:29px;width:229px;height:27px;',
			items:
			[
				{
					text:'Изменить ответственного',
				},
			]
		},
					]
				},
				{
					title:'Ответственные',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:526px;top:6px;width:300px;height:430px;',
			height: 430,width: 300,
			items:
			[
				{
					title:'Пользователи',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:286px;height:24px;',
			items:
			[
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				'-',
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Обновить',
				},
				{
					text:'Отключить отбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:286px;height:374px;',
			height: 374,width: 286,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Пользователь',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Группы пользователей',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:286px;height:372px;',
			height: 372,width: 286,
			columns:
			[
				{
					text:'Группа пользователей',
					width:'206',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:286px;height:24px;',
			items:
			[
				'-',
				{
					text:'Отключить отбор',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'ПереместитьВлево',
			text: '<',
			style: 'position:absolute;left:498px;top:99px;width:21px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'ПереместитьВправо',
			text: '>',
			style: 'position:absolute;left:498px;top:124px;width:21px;height:17px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:487px;height:430px;',
			height: 430,width: 487,
			columns:
			[
				{
					text:'Регламентная операция',
					width:'173',
				},
				{
					text:'Ответственный',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Распределение затрат',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:820px;height:408px;',
			height: 408,width: 820,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Характер затрат',
					width:'125',
				},
				{
					text:'Вид подразделения',
					width:'139',
				},
				{
					text:'Подразделение',
					width:'140',
				},
				{
					text:'Статья затрат',
					width:'126',
				},
				{
					text:'Номенклатурная группа',
					width:'100',
				},
				{
					text:'Способ распределения',
					width:'136',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:820px;height:24px;',
			items:
			[
				'-',
				{
					text:'Проверить',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВариант',
			text: 'Вариант:',
			style: 'position:absolute;left:545px;top:3px;width:49px;height:19px;',
		},
					]
				},
			]
		},
	]
});