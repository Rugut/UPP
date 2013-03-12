Ext.define('Отчеты.РегламентированныйОтчетБаланс.ФормаОтчета2003Кв4',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:487px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Баланс',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			items:
			[
				'-',
				{
					text:'Поиск',
				},
				{
					text:'Проверить выгрузку',
				},
				{
					text:'Показать отправки',
				},
				{
					text:'Расширить поле бланка',
				},
				'-',
				{
					text:'Очистить',
				},
				'-',
				'-',
				{
					text:'Проверить в Интернете',
				},
				{
					text:'Подготовить к отправке',
				},
				{
					text:'Отправить',
				},
				'-',
				'-',
				{
					text:'Настройки отчета...',
				},
				'-',
				{
					text:'Сохранять',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Подготовить к отправке и подписать',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Расшифровка',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:462px;width:716px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:630px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:700px;height:52px;',
			height: 52,width: 700,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:222px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:82px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:301px;top:24px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:124px;width:700px;height:304px;',
			height: 304,width: 700,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиБаланс',
			style: 'position:absolute;left:226px;top:261px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийБаланс',
			style: 'position:absolute;left:352px;top:261px;width:348px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиБаланс',
			text: 'Добавить',
			style: 'position:absolute;left:134px;top:285px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиБаланс',
			text: 'Удалить',
			style: 'position:absolute;left:220px;top:285px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтроки',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:0px;top:285px;width:132px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:432px;width:700px;height:22px;',
			height: 22,width: 700,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Комментарий:',
			style: 'position:absolute;left:183px;top:3px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:263px;top:3px;width:437px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:47px;top:3px;width:119px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:700px;height:37px;',
			height: 37,width: 700,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:0px;width:698px;height:35px;',
			height: 35,width: 698,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
	]
});