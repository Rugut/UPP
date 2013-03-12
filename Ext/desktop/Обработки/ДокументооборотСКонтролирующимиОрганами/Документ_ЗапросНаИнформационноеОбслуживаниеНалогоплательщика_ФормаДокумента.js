Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:654px;height:606px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:25px;',
			items:
			[
				{
					text:'Отправить',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Редактировать номер',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие3',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:581px;width:654px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
				{
					text:'Сохранить запрос на диск',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:638px;height:44px;',
			height: 44,width: 638,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:638px;height:36px;',
			height: 36,width: 638,
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:77px;width:638px;height:39px;',
			height: 39,width: 638,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтвет',
			text: 'Ответ:',
			style: 'position:absolute;left:0px;top:10px;width:77px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:119px;width:638px;height:454px;',
			height: 454,width: 638,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидУслуги',
			text: 'Вид услуги:',
			style: 'position:absolute;left:0px;top:92px;width:70px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидУслуги',
			style: 'position:absolute;left:99px;top:92px;width:539px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:0px;top:2px;width:98px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:187px;top:2px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:99px;top:2px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:210px;top:2px;width:130px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:29px;width:98px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:99px;top:29px;width:539px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:140px;width:638px;height:314px;',
			height: 314,width: 638,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФорматОтвета',
			text: 'Формат ответа:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФорматОтвета',
			style: 'position:absolute;left:99px;top:0px;width:539px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период запроса:',
			style: 'position:absolute;left:0px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачПериода',
			style: 'position:absolute;left:99px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: '-',
			style: 'position:absolute;left:190px;top:26px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонПериода',
			style: 'position:absolute;left:210px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:311px;top:26px;width:19px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:67px;width:638px;height:20px;',
			height: 20,width: 638,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Уточните налоги (комбинации КБК и кодов ОКАТО), в разрезе которых Вы хотели бы получить отчет от налогового органа.',
			style: 'position:absolute;left:0px;top:2px;width:638px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:86px;width:638px;height:228px;',
			height: 228,width: 638,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:638px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:638px;height:204px;',
			height: 204,width: 638,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'КБК',
					width:'243',
				},
				{
					text:'ОКАТО',
					width:'131',
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:115px;width:638px;height:23px;',
			height: 23,width: 638,
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'группировать по видам платежей',
			style: 'position:absolute;left:99px;top:3px;width:195px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыбиратьТолько',
			text: 'Фильтр по виду:',
			style: 'position:absolute;left:0px;top:1px;width:96px;height:19px;',
		},
					]
				},
				{
					title:'',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйОрган',
			text: 'Получатель:',
			style: 'position:absolute;left:0px;top:55px;width:98px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрацияВИФНС',
			style: 'position:absolute;left:99px;top:55px;width:539px;height:19px;',
		},
					]
				},
			]
		},
	]
});